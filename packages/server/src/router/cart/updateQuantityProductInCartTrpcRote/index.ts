import { trpc } from "../../../api/trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { Cart, CartItem } from "@prisma/client";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { updateProductInCartSchema } from "../../../lib/schema/updateProductInCartSchema/schema";

export const updateQuantityProductInCartTrpcRote = trpc.procedure
  .input(updateProductInCartSchema)
  .mutation(async ({ ctx, input }) => {
    const cartUser: Cart = await findOrCreateCart({ ctx });

    const findCartItem: CartItem | null = await ctx.prisma.cartItem.findFirst({
      where: {
        cartId: cartUser.id,
        product: {
          name: input.name,
        },
      },
    });

    if (!findCartItem) {
      return;
    }

    await ctx.prisma.cartItem.update({
      where: {
        id: findCartItem.id,
      },

      data: {
        quantity: input.quantity,
      },
    });

    await updateCartTotalAmount({ ctx });

    return true;
  });
