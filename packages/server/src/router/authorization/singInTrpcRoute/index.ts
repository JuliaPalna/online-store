import { trpc } from "../../../api/trpc";
import { env } from "../../../lib/env";
import { singInSchema } from "../../../lib/schema/singSchema/singInSchema/schema";
import { getPasswordHash } from "../../../utils/getPasswordHash";
import { getToken } from "../../../utils/getToken";

export const singInTrpcRoute = trpc.procedure
  .input(singInSchema)
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: input.email,
        password: getPasswordHash(input.password),
      },
    });

    if (!user) {
      throw Error("Неправильный пароль или почта");
    }

    const token: string = getToken({
      value: user.id,
      key: env.JWT_SECRET_KEY_AUTHORIZATION,
    });

    return { token };
  });
