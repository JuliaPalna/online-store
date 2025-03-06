import { trpc } from "../../api/trpc";
import { createCategorySchema } from "../../lib/shema/createCategorySchema/shema";

export const createCategoryTrpcRote = trpc.procedure
  .input(createCategorySchema)
  .mutation(async ({ ctx, input }) => {
    const isFind = await ctx.prisma.category.findUnique({
      where: {
        name: input.name,
      },
    });

    if (isFind) {
      throw Error(`${input.name} уже есть в каталоге`);
    }

    await ctx.prisma.category.create({
      data: input,
    });

    return true;
  });
