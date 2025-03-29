import { Product } from "@prisma/client";
import { TTrpcContext } from "../../context";

export async function findUniqueProduct({
  ctx,
  name,
}: {
  ctx: TTrpcContext;
  name: string;
}): Promise<Product | null> {
  const product = await ctx.prisma.product.findUnique({
    where: {
      name: name,
    },
  });

  return product || null;
}
