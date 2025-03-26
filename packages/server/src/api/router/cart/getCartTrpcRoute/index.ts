import { getAuthorizedUser } from "../../../../lib/utils/getAuthorizedUser";
import { trpc } from "../../../trpc";

export const getCartTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const userId: string = getAuthorizedUser({ ctx }).id;

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
          createAt: true,
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
        orderBy: {
          createAt: "desc",
        },
      },
    },
  });

  if (!cart) {
    throw Error("Товар не найден");
  }
  return { cart };
});
