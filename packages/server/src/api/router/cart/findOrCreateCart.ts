import { TTrpcContext } from "../../../context";
import { getAuthorizedUser } from "../../../lib/utils";

export async function findOrCreateCart({ ctx }: { ctx: TTrpcContext }) {
  const userId: string = getAuthorizedUser({ ctx }).id;

  const cart = await ctx.prisma.cart.findFirst({
    where: {
      userId,
    },
  });

  const cartUser = cart
    ? cart
    : await ctx.prisma.cart.create({
        data: {
          userId,
        },
      });

  return cartUser;
}
