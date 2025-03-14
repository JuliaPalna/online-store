import _ from "lodash";
import { trpc } from "../../../api/trpc";
import { getProductShema } from "../../../lib/shema/productShema/getProductShema/shema";

export const getProductListTrpcRoute = trpc.procedure
  .input(getProductShema)
  .query(async ({ ctx, input }) => {
    const normalizedSearch = input.search
      ? input.search.trim().replace(/[\s\n\t]/g, " & ")
      : undefined;

    const products = await ctx.prisma.product.findMany({
      where: !input.search
        ? {
            category: {
              nameEn: input.name,
            },
          }
        : {
            category: {
              nameEn: input.name,
            },
            OR: [
              {
                name: {
                  search: normalizedSearch,
                },
              },
              {
                description: {
                  search: normalizedSearch,
                },
              },
            ],
          },
      select: {
        id: true,
        name: true,
        price: true,
        // likes: true,
        category: true,
        serialNumber: true,
        _count: {
          select: {
            likes: true,
          },
        },
        likes: {
          select: {
            id: true,
          },
          where: {
            userId: ctx.authorization?.id,
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
      isLike: !!product.likes.length,
    }));

    return { products: result, nextCursor };
  });
