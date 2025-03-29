import { trpc } from "../../../trpc";
import { createCategorySchema } from "../../../../lib/schema";
import { findUniqueCategory } from "../../../../lib/utils/findUniqueCategory";
import { throwErrorMessage } from "../../../../lib/utils/throwErrorMessage";

export const createCategoryTrpcRote = trpc.procedure
  .input(createCategorySchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const category = await findUniqueCategory({ctx, name: input.nameRu});
      
      if (category) {
        throw Error(`${input.nameRu} (${input.nameEn}) уже есть в каталоге`);
      }

      await ctx.prisma.category.create({
        data: input,
      });

      return true;
    } catch (error) {
      throwErrorMessage(error);
    }
  });
