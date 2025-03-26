import _ from "lodash";
import { trpc } from "../../../trpc";
import { updateGeneralProfileSchema } from "../../../../lib/schema/updateProfileSchema/schema";
import { User } from "@prisma/client";
import { getAuthorizedUser } from "../../../../lib/utils/getAuthorizedUser";

export const updateGeneralProfileTrpcRoute = trpc.procedure
  .input(updateGeneralProfileSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const authorizedUser: User = getAuthorizedUser({ ctx });

      if (authorizedUser.email !== input.email) {
        const user = await ctx.prisma.user.findUnique({
          where: {
            email: input.email,
          },
        });

        if (user) {
          throw new Error("Пользователь с данным адесом уже существует");
        }
      }

      const updateUser = await ctx.prisma.user.update({
        where: {
          id: authorizedUser.id,
        },
        data: {
          name: input.name,
          email: input.email,
        },
      });

      ctx.authorization = updateUser;
      return _.pick(authorizedUser, ["id", "email", "name"]);
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message);
      }
    }
  });
