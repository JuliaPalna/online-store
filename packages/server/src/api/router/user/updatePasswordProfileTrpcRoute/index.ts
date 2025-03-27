import { User } from "@prisma/client";
import { trpc } from "../../../trpc";
import { updatePasswordProfileSchema } from "../../../../lib/schema/updatePasswordSchema/schema";
import { getPasswordHash } from "../../../../lib/utils/getPasswordHash";
import { getAuthorizedUser } from "../../../../lib/utils/getAuthorizedUser";

export const updatePasswordProfileTrpcRoute = trpc.procedure
  .input(updatePasswordProfileSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const user: User = getAuthorizedUser({ ctx });

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
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message);
      }
      throw Error(`${error}`);
    }
  });
