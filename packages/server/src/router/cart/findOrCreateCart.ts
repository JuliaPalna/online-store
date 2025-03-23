import { Cart } from "@prisma/client";
import { TTrpcContext } from "../../context";

export async function findOrCreateCart({ ctx }: { ctx: TTrpcContext }) {
  if (!ctx.authorization) {
    throw Error(`Not authorization`);
  }

  const userId: string = ctx.authorization.id;

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
