import { TTrpcContext } from "../../context";

export async function findOrCreateCart({ ctx }: { ctx: TTrpcContext }) {
  if (!ctx.authorization) {
    throw Error(`Not authorization`);
  }

  const userId = ctx.authorization.id;

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
