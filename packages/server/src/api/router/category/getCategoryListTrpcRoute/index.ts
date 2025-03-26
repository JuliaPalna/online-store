import { trpc } from "../../../trpc";

export const getCategoryListTrpcRoute = trpc.procedure.query(
  async ({ ctx }) => {
    const сategory = await ctx.prisma.category.findMany({
      select: {
        nameRu: true,
        nameEn: true,
      },
      orderBy: {
        createAt: "desc",
      },
    });

    return { сategory };
  },
);
