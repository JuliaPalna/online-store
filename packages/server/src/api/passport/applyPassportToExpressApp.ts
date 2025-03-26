import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { type Express } from "express";
import { Passport } from "passport";
import { TAppContext } from "../../context/AppContext/AppContext";
import { env } from "../../lib/env";

export function applyPassportToExpressApp(
  expressApp: Express,
  ctx: TAppContext,
) {
  const passport = new Passport();

  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
    secretOrKey: env.JWT_SECRET_KEY_AUTHORIZATION,
  };

  passport.use(
    new JwtStrategy(opts, function (jwtPayload: string, done) {
      ctx.prisma.user
        .findUnique({
          where: {
            id: jwtPayload,
          },
        })
        .then((user) => {
          if (!user) {
            done(null, false);
            return;
          }

          done(null, user);
        })
        .catch((error) => {
          return done(error, false);
        });
    }),
  );

  expressApp.use((request, response, next) => {
    if (!request.headers.authorization) {
      next();
      return;
    }

    passport.authenticate(
      "jwt",
      { session: false },
      //исправление ошибки:
      // при некорретном токене отражается главная страница + авторизация/вход
      (...args: undefined[]) => {
        request.user = args[1] || undefined;
        next();
      },
    )(request, response, next);
  });
}
