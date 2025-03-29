import { trpc } from "../../../trpc";
import { signUpSchema } from "../../../../lib/schema";
import { getPasswordHash, getToken } from "../../../../lib/utils";
import { env } from "../../../../lib/env";
import { findUniqueUser } from "../../../../lib/utils/findUniqueUser";

export const singUpTrpcRoute = trpc.procedure
  .input(signUpSchema)
  .mutation(async ({ ctx, input }) => {
    const isUser = await findUniqueUser({ctx, email: input.email});

    if (isUser) {
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
