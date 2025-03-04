import { trpc } from "../../api/trpc";
import { signUpShema } from "../../lib/shema/signUpShema/shema";
import { getToken } from "../../utils/getToken";
import { getPasswordHash } from "../../utils/getPasswordHash";
import { SECRET_KEY_AUTHORIZATION } from "../../api/passport";

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

    const token = getToken({ value: user.id, key: SECRET_KEY_AUTHORIZATION });

    return { token };
  });
