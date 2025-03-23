import { trpc } from "../../../api/trpc";
import { createCategorySchema } from "../../../lib/schema/createCategorySchema/schema";

export const createCategoryTrpcRote = trpc.procedure
  .input(createCategorySchema)
  .mutation(async ({ ctx, input }) => {
    const category = await ctx.prisma.category.findUnique({
      where: {
        nameRu: input.nameRu,
        nameEn: input.nameEn,
      },
    });

    if (category) {
      throw Error(`${input.nameRu} (${input.nameEn}) уже есть в каталоге`);
    }

    await ctx.prisma.category.create({
      data: input,
    });

    return true;
  });
