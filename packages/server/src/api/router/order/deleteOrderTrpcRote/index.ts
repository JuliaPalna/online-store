import { trpc } from "../../../trpc";
import {} from "../../../../lib/schema";
import { getAuthorizedUser } from "../../../../lib/utils";
import { z } from "zod";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const deleteOrderTrpcRote = trpc.procedure
  .input(
    z.object({
      id: z.string().trim().min(1),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    try {
      const userId: string = getAuthorizedUser({ ctx }).id;

      await ctx.prisma.order.delete({
        where: {
          userId,
          id: input.id,
        },
      });

      return true;
    } catch (error) {
      throwErrorMessage(error);
    }
  });
