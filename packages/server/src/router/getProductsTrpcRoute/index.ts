import { trpc } from "../../api/trpc";

export const getProductsTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const products = await ctx.prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      likes: true,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return { products };
});
