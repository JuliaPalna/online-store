import { trpc } from "../../../trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { Cart } from "@prisma/client";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { updateProductInCartSchema } from "../../../../lib/schema/updateProductInCartSchema/schema";
import { findCartItem } from "../findCartItem";

export const deleteProductInCartTrpcRote = trpc.procedure
  .input(updateProductInCartSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const cartUser: Cart = await findOrCreateCart({ ctx });
      const cartItem = await findCartItem({ ctx, input, id: cartUser.id });

      await ctx.prisma.cartItem.delete({
        where: {
          id: cartItem?.id,
        },
      });

      await updateCartTotalAmount({ ctx });

      return true;
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message);
      }
    }
  });
