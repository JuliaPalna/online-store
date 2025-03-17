import { trpc } from "../../../api/trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { Cart } from "@prisma/client";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { addProductInCartSchema } from "../../../lib/shema/addProductInCartSchema/shema";

export const addProductInCartTrpcRote = trpc.procedure
  .input(addProductInCartSchema)
  .mutation(async ({ ctx, input }) => {
    const cartUser: Cart = await findOrCreateCart({ ctx });

    const product = await ctx.prisma.product.findUnique({
      where: {
        id: input.productId,
      },
    });

    if (!product) {
      throw Error(`not found`);
    }

    const findCartItem = await ctx.prisma.cartItem.findFirst({
      where: {
        cartId: cartUser.id,
        productId: input.productId,
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
