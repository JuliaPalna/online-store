import { CartItem } from "@prisma/client";
import { TTrpcContext } from "../../../context";
import { TUpdateProductInCartSchema } from "../../../lib/schema";

interface IFindCartItemProps {
  ctx: TTrpcContext;
  id: string;
  input: TUpdateProductInCartSchema;
}

export async function findCartItem({
  ctx,
  input,
  id,
}: IFindCartItemProps): Promise<CartItem | null> {
  const findCartItem: CartItem | null = await ctx.prisma.cartItem.findFirst({
    where: {
      cartId: id,
      product: {
        name: input.name,
      },
    },
  });

  return findCartItem;
}
