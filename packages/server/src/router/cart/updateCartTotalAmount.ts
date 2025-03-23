import { TTrpcContext } from "../../context";

export async function updateCartTotalAmount({ ctx }: { ctx: TTrpcContext }) {
  if (!ctx.authorization) {
    throw Error(`Not authorization`);
  }

  const userId: string = ctx.authorization.id;

  const cart = await ctx.prisma.cart.findFirst({
    where: {
      userId,
    },
    select: {
      id: true,
      items: {
        select: {
          quantity: true,
          product: {
            select: {
              price: true,
            },
          },
        },
      },
    },
  });

  if (!cart) {
    return;
  }

  const totalAmount: number = cart.items.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0);

  return await ctx.prisma.cart.update({
    where: {
      userId,
    },
    data: {
      totalAmount,
    },
  });
}
