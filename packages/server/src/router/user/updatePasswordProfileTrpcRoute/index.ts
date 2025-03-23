import { User } from "@prisma/client";
import { trpc } from "../../../api/trpc";
import { updatePasswordProfileSchema } from "../../../lib/schema/updatePasswordSchema/schema";
import { getPasswordHash } from "../../../utils/getPasswordHash";

export const updatePasswordProfileTrpcRoute = trpc.procedure
  .input(updatePasswordProfileSchema)
  .mutation(async ({ ctx, input }) => {
    const user: User = ctx.authorization;

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
