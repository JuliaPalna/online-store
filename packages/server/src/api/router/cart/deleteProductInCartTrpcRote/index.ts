import { trpc } from "../../../trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { updateProductInCartSchema } from "../../../../lib/schema";
import { findCartItem } from "../findCartItem";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const deleteProductInCartTrpcRote = trpc.procedure
  .input(updateProductInCartSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const cartUser = await findOrCreateCart({ ctx });
      const cartItem = await findCartItem({ ctx, input, id: cartUser.id });

      await ctx.prisma.cartItem.delete({
        where: {
          id: cartItem?.id,
        },
      });

      await updateCartTotalAmount({ ctx });

      return true;
    } catch (error) {
      throwErrorMessage(error);
    }
  });
