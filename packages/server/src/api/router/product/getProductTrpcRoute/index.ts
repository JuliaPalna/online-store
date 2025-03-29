import { z } from "zod";
import { trpc } from "../../../trpc";
import _ from "lodash";
import { zEnvNonemptyTrimmed } from "../../../../lib/schema";
import { getAuthorizedUser } from "../../../../lib/utils";

export const getProductTrpcRoute = trpc.procedure
  .input(
    z.object({
      name: zEnvNonemptyTrimmed,
    }),
  )
  .query(async ({ ctx, input }) => {
    try {
      const userId: string = getAuthorizedUser({ ctx }).id;

      const product = await ctx.prisma.product.findUnique({
        where: {
          name: input.name,
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          count: true,
          imageUrl: true,
          category: true,
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
      });

      if (!product) {
        throw Error("Товар не найден");
      }

      const result = {
        ..._.omit(product, ["_count"]),
        likes: product._count.likes,
        isLike: !!product.likes.length,
      };

      return { product: result };
    } catch (error) {
      if (error instanceof Error) {
        throw Error(`${error}`);
      }
      throw Error(`${error}`);
    }
  });
