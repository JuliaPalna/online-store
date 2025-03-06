import { trpc } from "../../../api/trpc";
import { createCategorySchema } from "../../../lib/shema/createCategorySchema/shema";

export const createCategoryTrpcRote = trpc.procedure
  .input(createCategorySchema)
  .mutation(async ({ ctx, input }) => {
    const isFind = await ctx.prisma.category.findUnique({
      where: {
        nameRu: input.nameRu,
        nameEn: input.nameEn,
      },
    });

    if (isFind) {
      throw Error(`${input.nameRu} (${input.nameEn}) уже есть в каталоге`);
    }

    await ctx.prisma.category.create({
      data: input,
    });

    return true;
  });
