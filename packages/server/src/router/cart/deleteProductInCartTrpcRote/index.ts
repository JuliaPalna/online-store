import { trpc } from "../../../api/trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { Cart, CartItem } from "@prisma/client";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { updateProductInCartSchema } from "../../../lib/schema/updateProductInCartSchema/schema";

export const deleteProductInCartTrpcRote = trpc.procedure
  .input(updateProductInCartSchema)
  .mutation(async ({ ctx, input }) => {
    const cartUser: Cart = await findOrCreateCart({ ctx });

    const cartItem: CartItem | null = await ctx.prisma.cartItem.findFirst({
      where: {
        cart: {
          id: cartUser.id,
        },

        product: {
          name: input.name,
        },
      },
    });

    await ctx.prisma.cartItem.delete({
      where: {
        id: cartItem?.id,
      },
    });

    await updateCartTotalAmount({ ctx });

    return true;
  });
