import { trpc } from "../../../trpc";
import { updateProductSchema } from "../../../../lib/schema";
import { getAuthorizedUser } from "../../../../lib/utils";
import { findUniqueCategory } from "../../../../lib/utils/findUniqueCategory";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

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

      const categorySearch = await findUniqueCategory({ctx, name: category});

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
      throwErrorMessage(error);
    }
  });
