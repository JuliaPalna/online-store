import { trpc } from "../../../api/trpc";
import { setProductLikeShema } from "../../../lib/shema/productShema/setProductLikeShema/shema";

export const setProductLikeTrpcRoute = trpc.procedure
  .input(setProductLikeShema)
  .mutation(async ({ ctx, input }) => {
    if (!ctx.authorization) {
      throw Error("Не авторизованный пользователь");
    }

    const { productId, isLike } = input;
    const userId = ctx.authorization.id;

    const product = await ctx.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw Error("Нет товара");
    }

    if (isLike) {
      await ctx.prisma.productLike.upsert({
        where: {
          productId_userId: {
            productId,
            userId,
          },
        },
        create: {
          userId,
          productId,
        },
        update: {},
      });
    } else {
      await ctx.prisma.productLike.delete({
        where: {
          productId_userId: {
            productId,
            userId,
          },
        },
      });
    }

    const likeCount = await ctx.prisma.productLike.count({
      where: {
        productId,
      },
    });

    return {
      product: {
        id: product.id,
        likeCount,
        isLike,
      },
    };
  });
