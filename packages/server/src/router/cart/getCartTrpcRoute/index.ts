import { trpc } from "../../../api/trpc";

export const getCartTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const userId = ctx.authorization?.id;

  const cart = await ctx.prisma.cart.findFirst({
    where: {
      userId,
    },
    select: {
      id: true,
      userId: true,
      totalAmount: true,
      items: {
        select: {
          id: true,
          quantity: true,
          product: {
            select: {
              name: true,
              price: true,
              id: true,
            },
          },
        },
      },
    },
    orderBy: {
      createAt: "desc",
    },
  });

  if (!cart) {
    throw Error("Товар не найден");
  }
  return { cart };
});
