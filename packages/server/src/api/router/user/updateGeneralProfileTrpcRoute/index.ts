import _ from "lodash";
import { trpc } from "../../../trpc";
import { updateGeneralProfileSchema } from "../../../../lib/schema";
import { User } from "@prisma/client";
import { getAuthorizedUser } from "../../../../lib/utils";
import { findUniqueUser } from "../../../../lib/utils/findUniqueUser";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const updateGeneralProfileTrpcRoute = trpc.procedure
  .input(updateGeneralProfileSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const authorizedUser: User = getAuthorizedUser({ ctx });

      if (authorizedUser.email !== input.email) {
        const isUser = await findUniqueUser({ctx, email: input.email});

        if (isUser) {
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
      throwErrorMessage(error);
    }
  });
