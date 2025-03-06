import { trpc } from "../../api/trpc";

export const getCategoryTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const сategory = await ctx.prisma.category.findMany({
    select: {
      name: true,
    },
    // orderBy: {
    //   createAt: "desc",
    // },
  });

  return { сategory };
});
