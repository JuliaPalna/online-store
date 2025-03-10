import _ from "lodash";
import { trpc } from "../../../api/trpc";
import { updateProfileShema } from "../../../lib/shema/updateProfileShema/shema";

export const updateProfileTrpcRoute = trpc.procedure
  .input(updateProfileShema)
  .mutation(async ({ ctx, input }) => {
    const authorizedUser = ctx.authorization;

    if (!authorizedUser) {
      throw Error("UNAUTHORIZED");
    }

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
      data: input,
    });

    ctx.authorization = updateUser;
    return _.pick(authorizedUser, ["id", "email", "name"]);
  });
