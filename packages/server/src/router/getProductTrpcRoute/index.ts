import { z } from "zod";
import { trpc } from "../../lib";
import { IProduct } from "../../types";

export const getProductTrpcRoute = trpc.procedure
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .query(async ({ ctx, input }) => {
    const product: IProduct | null = await ctx.prisma.product.findUnique({
      where: {
        id: input.id,
      },
    });

    return { product: product || null };
  });
