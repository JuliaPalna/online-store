import { TTrpcContext } from "../../context";

export async function findUniqueUser({
  ctx,
  email,
}: {
  ctx: TTrpcContext;
  email: string;
}): Promise<boolean> {
  const user = await ctx.prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return !!user;
}
