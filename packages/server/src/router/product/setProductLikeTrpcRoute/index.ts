import { trpc } from "../../../api/trpc";
import { setProductLikeShema } from "../../../lib/shema/productShema/setProductLikeShema/shema";

export const setProductLikeTrpcRoute = trpc.procedure
  .input(setProductLikeShema)
  .mutation(async ({ ctx, input }) => {
    if (!ctx.authorization) {
      throw Error("Не авторизованный пользователь");
    }

    const { name, isLike } = input;
    const userId = ctx.authorization.id;

    const product = await ctx.prisma.product.findUnique({
      where: {
        name,
      },
    });

    if (!product) {
      throw Error("Нет товара");
    }

    if (isLike) {
      await ctx.prisma.productLike.upsert({
        where: {
          productId_userId: {
            productId: product.id,
            userId,
          },
        },
        create: {
          userId,
          productId: product.id,
        },
        update: {},
      });
    } else {
      await ctx.prisma.productLike.delete({
        where: {
          productId_userId: {
            productId: product.id,
            userId,
          },
        },
      });
    }

    const likeCount = await ctx.prisma.productLike.count({
      where: {
        productId: product.id,
      },
    });

    return {
      product: {
        name: product.name,
        likeCount,
        isLike,
      },
    };
  });
