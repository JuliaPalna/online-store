import { trpc } from "../../../trpc";
import { createProductSchema } from "../../../../lib/schema";
import { findUniqueProduct } from "../../../../lib/utils/findUniqueProduct";
import { findUniqueCategory } from "../../../../lib/utils/findUniqueCategory";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const createProductTrpcRoute = trpc.procedure
  .input(createProductSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const product = await findUniqueProduct({ ctx, name: input.name});

      if (product) {
        throw Error(`Товар ${input.name} уже есть в каталоге`);
      }

      const category = await findUniqueCategory({ctx, name: input.category});

      if (!category) {
        throw Error(`Категории ${input.category} нет в каталоге`);
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
    } catch (error) {
      throwErrorMessage(error);
    }
  });
