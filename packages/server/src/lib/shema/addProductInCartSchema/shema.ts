import { z } from "zod";

export const addProductInCartSchema = z.object({
  productId: z.string().nonempty().min(1),
});
