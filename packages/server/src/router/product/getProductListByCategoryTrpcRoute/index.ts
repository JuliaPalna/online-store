import _ from "lodash";
import { z } from "zod";
import { trpc } from "../../../api/trpc";

export const getProductListByCategoryTrpcRoute = trpc.procedure
  .input(
    z.object({
      name: z.string(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const products = await ctx.prisma.product.findMany({
      where: {
        category: {
          nameEn: input.name,
        },
      },
      select: {
        id: true,
        name: true,
        price: true,
        likes: true,
        category: true,
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
