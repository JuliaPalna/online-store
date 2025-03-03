import { trpc } from "../../api/trpc";
import { signUpShema } from "../../lib/shema/signUpShema/shema";
import { getPasswordHash } from "../../utils/getPasswordHash";

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

    await ctx.prisma.user.create({
      data: {
        email: input.email,
        password: getPasswordHash(input.password),
      },
    });

    return true;
  });
