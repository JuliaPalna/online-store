import { z } from "zod";
import { products, trpc } from "../../lib";
import { IProduct } from "../../lib/types";
import { isFindItem } from "../../utils/isFindItem";

export const getProductTrpcRoute = trpc.procedure
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .query(({ input }) => {
    const product: IProduct | undefined = isFindItem({
      array: products,
      element: input.id,
      property: "id",
    });

    return { product: product || null };
  });
