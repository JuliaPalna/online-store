import { trpc } from "../../../trpc";
import { findOrCreateCart } from "../findOrCreateCart";
import { Cart } from "@prisma/client";
import { updateCartTotalAmount } from "../updateCartTotalAmount";
import { updateProductInCartSchema } from "../../../../lib/schema";
import { findCartItem } from "../findCartItem";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const updateQuantityProductInCartTrpcRote = trpc.procedure
  .input(updateProductInCartSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const cartUser: Cart = await findOrCreateCart({ ctx });
      const cartItem = await findCartItem({ ctx, input, id: cartUser.id });

      if (!cartItem) {
        return;
      }

      await ctx.prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },

        data: {
          quantity: input.quantity,
        },
      });

      await updateCartTotalAmount({ ctx });

      return true;
    } catch (error) {
      throwErrorMessage(error);
    }
  });
