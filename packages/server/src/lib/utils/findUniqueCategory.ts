import { Category } from "@prisma/client";
import { TTrpcContext } from "../../context";

export async function findUniqueCategory({
  ctx,
  name,
}: {
  ctx: TTrpcContext;
  name: string;
}): Promise<Category | null> {
  const category = await ctx.prisma.category.findUnique({
    where: {
      nameRu: name,
    },
  });

  return category || null;
}
