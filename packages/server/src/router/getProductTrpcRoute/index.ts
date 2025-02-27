import { z } from "zod";
import { products, trpc } from "../../lib";

export const getProductTrpcRoute = trpc.procedure
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .query(({ input }) => {
    const product = products.find((product) => product.id === input.id);
    return { product: product || null };
  });
