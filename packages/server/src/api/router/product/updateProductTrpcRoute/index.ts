import { trpc } from "../../../trpc";
import { updateProductSchema } from "../../../../lib/schema/productSchema/updateProductSchema/schema";
import { getAuthorizedUser } from "../../../../lib/utils/getAuthorizedUser";

export const updateProductTrpcRoute = trpc.procedure
  .input(updateProductSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const { id, category, ...productInput } = input;
      getAuthorizedUser({ ctx });

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
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message);
      }
      throw Error(`${error}`);
    }
  });
