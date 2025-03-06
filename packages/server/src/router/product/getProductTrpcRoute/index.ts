import { z } from "zod";
import { trpc } from "../../../api/trpc";
import _ from "lodash";

export const getProductTrpcRoute = trpc.procedure
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const product = await ctx.prisma.product.findUnique({
      where: {
        id: input.id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        count: true,
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
    });

    if (!product) {
      throw Error("Товар не найден");
    }

    const likesCount = product._count.likes;
    const isLike = !!product.likes.length;

    const result = {
      ..._.omit(product, ["_count"]),
      likes: likesCount,
      isLike: isLike,
    };

    return { product: result };
  });
