import _ from "lodash";
import { z } from "zod";
import { trpc } from "../../../api/trpc";

export const getProductListByCategoryTrpcRoute = trpc.procedure
  .input(
    z.object({
      name: z.string(),
      limit: z.number().min(1).max(100).default(10),
      cursor: z.coerce.number().optional(),
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
        serialNumber: true,
        _count: {
          select: {
            likes: true,
          },
        },
      },
      orderBy: [
        {
          createAt: "desc",
        },
        {
          serialNumber: "desc",
        },
      ],
      cursor: input.cursor ? { serialNumber: input.cursor } : undefined,
      take: input.limit + 1,
    });

    const nextProduct = products.at(input.limit);
    const nextCursor = nextProduct?.serialNumber;
    const productsView = products.slice(0, input.limit);

    const result = productsView.map((product) => ({
      ..._.omit(product, ["_count"]),
      likes: product._count.likes,
    }));

    return { products: result, nextCursor };
  });
