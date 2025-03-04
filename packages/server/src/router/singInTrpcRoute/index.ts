import { trpc } from "../../api/trpc";
import { singInShema } from "../../lib/shema/singInShema/shema";
import { getPasswordHash } from "../../utils/getPasswordHash";
import { getToken } from "../../utils/getToken";
import { SECRET_KEY_AUTHORIZATION } from "../../api/passport";

export const singInTrpcRoute = trpc.procedure
  .input(singInShema)
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

    const token = getToken({ value: user.id, key: SECRET_KEY_AUTHORIZATION });

    return { token };
  });
