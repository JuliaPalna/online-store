import { trpc } from "../../../trpc";
import { createOrderSchema } from "../../../../lib/schema/";
import { getAuthorizedUser } from "../../../../lib/utils";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const createOrderTrpcRote = trpc.procedure
  .input(createOrderSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const userId: string = getAuthorizedUser({ ctx }).id;

      const cart = await ctx.prisma.cart.findFirst({
        where: {
          userId,
        },
        select: {
          id: true,
          totalAmount: true,
          items: {
            select: {
              product: {
                select: {
                  name: true,
                  price: true,
                  id: true,
                },
              },
            },
          },
        },
      });

      await ctx.prisma.order.create({
        data: {
          userId,
          totalAmount: cart?.totalAmount,
          status: "PENDING",
          products: JSON.stringify(cart?.items),
          info: JSON.stringify(input),
        },
      });

      return true;
    } catch (error) {
      throwErrorMessage(error);
    }
  });
