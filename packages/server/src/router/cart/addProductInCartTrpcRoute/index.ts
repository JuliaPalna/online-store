import { trpc } from "../../../api/trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { Cart } from "@prisma/client";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { updateProductInCartSchema } from "../../../lib/schema/updateProductInCartSchema/schema";

export const addProductInCartTrpcRote = trpc.procedure
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

    if (findCartItem) {
      await ctx.prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },

        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      const product = await ctx.prisma.product.findUnique({
        where: {
          name: input.name,
        },
      });

      if (!product) {
        throw Error(`not found`);
      }

      const newCartItem = {
        quantity: 1,
        cartId: cartUser.id,
        productId: product.id,
      };

      await ctx.prisma.cartItem.create({
        data: newCartItem,
      });
    }

    await updateCartTotalAmount({ ctx });

    return true;
  });
