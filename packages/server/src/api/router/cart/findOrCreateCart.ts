import { Cart } from "@prisma/client";
import { TTrpcContext } from "../../../context";
import { getAuthorizedUser } from "../../../lib/utils/getAuthorizedUser";

export async function findOrCreateCart({ ctx }: { ctx: TTrpcContext }) {
  const userId: string = getAuthorizedUser({ ctx }).id;

  const cart = await ctx.prisma.cart.findFirst({
    where: {
      userId,
    },
  });

  const cartUser: Cart = cart
    ? cart
    : await ctx.prisma.cart.create({
        data: {
          userId,
        },
      });

  return cartUser;
}
