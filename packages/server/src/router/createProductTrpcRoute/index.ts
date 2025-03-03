import { trpc } from "../../lib";
import { IProduct } from "../../types";
import { createProductSchema } from "../../lib/shema/createProductSchema/shema";

export const createProductTrpcRoute = trpc.procedure
  .input(createProductSchema)
  .mutation(async ({ ctx, input }) => {
    const isFindProduct: IProduct | null = await ctx.prisma.product.findUnique({
      where: {
        name: input.name,
      },
    });

    if (isFindProduct) {
      throw Error(`Товар ${input.name} уже есть в каталоге`);
    }

    const newProduct = {
      ...input,
      likes: 0,
    };

    await ctx.prisma.product.create({
      data: newProduct,
    });

    return true;
  });
