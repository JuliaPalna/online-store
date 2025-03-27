import { trpc } from "../../../trpc";

export const getCategoryListTrpcRoute = trpc.procedure.query(
  async ({ ctx }) => {
    try {
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
    } catch (error) {
      if (error instanceof Error) {
        throw Error(`${error}`);
      }
      throw Error(`${error}`);
    }
  },
);
