import { trpc } from "../../../trpc";
import { signUpSchema } from "../../../../lib/schema/singSchema/signUpSchema/schema";
import { getToken } from "../../../../lib/utils/getToken";
import { getPasswordHash } from "../../../../lib/utils/getPasswordHash";
import { env } from "../../../../lib/env";

export const singUpTrpcRoute = trpc.procedure
  .input(signUpSchema)
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

    const token: string = getToken({
      value: user.id,
      key: env.JWT_SECRET_KEY_AUTHORIZATION,
    });

    return { token };
  });
