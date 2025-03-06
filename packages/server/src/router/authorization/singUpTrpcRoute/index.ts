import { trpc } from "../../../api/trpc";
import { signUpShema } from "../../../lib/shema/singShema/signUpShema/shema";
import { getToken } from "../../../utils/getToken";
import { getPasswordHash } from "../../../utils/getPasswordHash";
import { env } from "../../../lib/env";

export const singUpTrpcRoute = trpc.procedure
  .input(signUpShema)
  .mutation(async ({ ctx, input }) => {
    const isFindUser = await ctx.prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });

    if (isFindUser) {
      throw Error(`Пользователь с данным адресом уже существует`);
    }

    const user = await ctx.prisma.user.create({
      data: {
        email: input.email,
        password: getPasswordHash(input.password),
      },
    });

    const token = getToken({
      value: user.id,
      key: env.JWT_SECRET_KEY_AUTHORIZATION,
    });

    return { token };
  });
