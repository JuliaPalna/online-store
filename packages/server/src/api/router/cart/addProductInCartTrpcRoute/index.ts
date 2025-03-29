import { trpc } from "../../../trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { updateProductInCartSchema } from "../../../../lib/schema";
import { findCartItem } from "../findCartItem";
import { findUniqueProduct } from "../../../../lib/utils/findUniqueProduct";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const addProductInCartTrpcRote = trpc.procedure
  .input(updateProductInCartSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const cartUser = await findOrCreateCart({ ctx });
      const cartItem = await findCartItem({ ctx, input, id: cartUser.id });

      if (cartItem) {
        await ctx.prisma.cartItem.update({
          where: {
            id: cartItem.id,
          },

          data: {
            quantity: cartItem.quantity + 1,
          },
        });
      } else {
        const product = await findUniqueProduct({ ctx, name: input.name});

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
    } catch (error) {
      throwErrorMessage(error);
    }
  });
