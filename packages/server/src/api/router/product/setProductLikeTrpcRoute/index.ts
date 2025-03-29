import { trpc } from "../../../trpc";
import { setProductLikeSchema } from "../../../../lib/schema";
import { getAuthorizedUser } from "../../../../lib/utils";
import { findUniqueProduct } from "../../../../lib/utils/findUniqueProduct";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const setProductLikeTrpcRoute = trpc.procedure
  .input(setProductLikeSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const { name, isLike } = input;
      const userId: string = getAuthorizedUser({ ctx }).id;
      const product = await findUniqueProduct({ ctx, name});

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

      const likeCount: number = await ctx.prisma.productLike.count({
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
    } catch (error) {
      throwErrorMessage(error); 
    }
  });
