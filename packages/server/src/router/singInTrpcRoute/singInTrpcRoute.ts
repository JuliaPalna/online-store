import { trpc } from "../../api/trpc";
import { singInShema } from "../../lib/shema/singInShema/shema";
import { getPasswordHash } from "../../utils/getPasswordHash";

export const singInTrpcRoute = trpc.procedure
  .input(singInShema)
  .mutation(async ({ ctx, input }) => {
    const isFindUser = await ctx.prisma.user.findUnique({
      where: {
        email: input.email,
        password: getPasswordHash(input.password),
      },
    });

    if (!isFindUser) {
      throw Error("Неправильный пароль или почта");
    }

    return true;
  });
