import { trpc } from "../../../api/trpc";
import { createProductSchema } from "../../../lib/shema/createProductSchema/shema";

export const createProductTrpcRoute = trpc.procedure
  .input(createProductSchema)
  .mutation(async ({ ctx, input }) => {
    const isFind = await ctx.prisma.product.findUnique({
      where: {
        name: input.name,
      },
    });

    if (isFind) {
      throw Error(`Товар ${input.name} уже есть в каталоге`);
    }

    const newProduct = {
      name: input.name,
      description: input.description,
      price: input.price,
      count: input.count,
      // category: ""
    };

    await ctx.prisma.product.create({
      data: newProduct,
    });

    return true;
  });
