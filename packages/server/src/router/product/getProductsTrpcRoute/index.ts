import _ from "lodash";
import { trpc } from "../../../api/trpc";

export const getProductsTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const products = await ctx.prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      likes: true,
      _count: {
        select: {
          likes: true,
        },
      },
    },
    orderBy: {
      createAt: "desc",
    },
  });

  const result = products.map((product) => ({
    ..._.omit(product, ["_count"]),
    likes: product._count.likes,
  }));

  return { products: result };
});
