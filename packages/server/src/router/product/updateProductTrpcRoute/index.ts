import { trpc } from "../../../api/trpc";
import { updateProductShema } from "../../../lib/shema/productShema/updateProductShema/shema";

export const updateProductTrpcRoute = trpc.procedure
  .input(updateProductShema)
  .mutation(async ({ ctx, input }) => {
    const { id, category, ...productInput } = input;
    const authorizedUser = ctx.authorization;

    if (!authorizedUser) {
      throw Error("UNAUTHORIZED");
    }

    const product = await ctx.prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!product) {
      throw Error("Not found");
    }

    const categorySearch = await ctx.prisma.category.findUnique({
      where: {
        nameRu: category,
      },
    });

    if (!categorySearch) {
      throw Error(`Товар ${category} нет каталоге`);
    }

    await ctx.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        ...productInput,
        categoryId: categorySearch.id,
      },
    });

    return true;
  });
