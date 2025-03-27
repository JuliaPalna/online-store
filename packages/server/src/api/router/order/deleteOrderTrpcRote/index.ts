import { trpc } from "../../../trpc";
import {} from "../../../../lib/schema/updateProductInCartSchema/schema";
import { getAuthorizedUser } from "../../../../lib/utils/getAuthorizedUser";
import { z } from "zod";

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
      if (error instanceof Error) {
        throw Error(error.message);
      }
      throw Error(`${error}`);
    }
  });
