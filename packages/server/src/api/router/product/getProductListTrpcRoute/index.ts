import _ from "lodash";
import { trpc } from "../../../trpc";
import { getProductSchema } from "../../../../lib/schema";
import { getAuthorizedUser, getNextListProps, getNormalizedSearch } from "../../../../lib/utils";
import { Prisma } from "@prisma/client";

export const getProductListTrpcRoute = trpc.procedure
  .input(getProductSchema)
  .query(async ({ ctx, input }) => {
    try {
      const userId: string = getAuthorizedUser({ ctx }).id;
      const normalizedSearch = getNormalizedSearch(input.search);

      const filter = {
        category: {
          category: {
            nameEn: input.name,
          },
        },
        likes: {
          likes: {
            some: {
              userId: userId,
            },
          },
        },
        search: {
          name: {
            contains: normalizedSearch,
            mode: Prisma.QueryMode.insensitive,
          },
        },
      };

      const filterProduct = () => {
        if (input.search) {
          return filter.search;
        }

        if (input.name) {
          return filter.category;
        }

        if (!ctx.authorization) {
          return;
        }

        if (input.filterByLike) {
          return filter.likes;
        }
      };

      const products = await ctx.prisma.product.findMany({
        where: filterProduct(),
        select: {
          id: true,
          name: true,
          price: true,
          category: true,
          imageUrl: true,
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
              userId: userId,
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

      const {nextCursor, newList} = getNextListProps({list: products, limit: input.limit});

      const result = newList.map((product) => ({
        ..._.omit(product, ["_count"]),
        likes: product._count.likes,
        isLike: !!product.likes.length,
      }));

      return { products: result, nextCursor };
    } catch (error) {
      if (error instanceof Error) {
        throw Error(`${error}`);
      }
      throw Error(`${error}`);
    }
  });
