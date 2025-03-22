import { trpc } from "../../../api/trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { Cart } from "@prisma/client";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { updateProductInCartSchema } from "../../../lib/schema/updateProductInCartSchema/schema";

export const toogleQuantityProductInCartTrpcRote = trpc.procedure
  .input(updateProductInCartSchema)
  .mutation(async ({ ctx, input }) => {
    const cartUser: Cart = await findOrCreateCart({ ctx });

    const findCartItem = await ctx.prisma.cartItem.findFirst({
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

    if (input.typeButton === "decrease") {
      await ctx.prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },

        data: {
          quantity: findCartItem.quantity - 1,
        },
      });
    }

    if (input.typeButton === "increase") {
      await ctx.prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },

        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    }

    await updateCartTotalAmount({ ctx });

    return true;
  });
