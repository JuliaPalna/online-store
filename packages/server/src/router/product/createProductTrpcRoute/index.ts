import { trpc } from "../../../api/trpc";
import { createProductSchema } from "../../../lib/shema/productShema/createProductSchema/shema";

export const createProductTrpcRoute = trpc.procedure
  .input(createProductSchema)
  .mutation(async ({ ctx, input }) => {
    const product = await ctx.prisma.product.findUnique({
      where: {
        name: input.name,
      },
    });

    if (product) {
      throw Error(`Товар ${input.name} уже есть в каталоге`);
    }

    const category = await ctx.prisma.category.findUnique({
      where: {
        nameRu: input.category,
      },
    });

    if (!category) {
      throw Error(`Товар ${input.category} нет каталоге`);
    }

    const newProduct = {
      name: input.name,
      description: input.description,
      price: input.price,
      count: input.count,
      categoryId: category.id,
    };

    await ctx.prisma.product.create({
      data: newProduct,
    });

    return true;
  });
