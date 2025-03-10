import { trpc } from "../../../api/trpc";
import { updatePasswordProfileShema } from "../../../lib/shema/updatePasswordShema/shema";
import { getPasswordHash } from "../../../utils/getPasswordHash";

export const updatePasswordProfileTrpcRoute = trpc.procedure
  .input(updatePasswordProfileShema)
  .mutation(async ({ ctx, input }) => {
    const user = ctx.authorization;

    if (!user) {
      throw Error("UNAUTHORIZED");
    }
    if (user.password !== getPasswordHash(input.password)) {
      throw new Error("Введите корректный пароль");
    }

    const updatePassword = await ctx.prisma.user.update({
      where: {
        email: user.email,
      },
      data: {
        password: getPasswordHash(input.passwordNew),
      },
    });

    ctx.authorization = updatePassword;
    return true;
  });
