import { z } from "zod";

export const updateProductInCartSchema = z.object({
  name: z.string().nonempty().min(1),
  typeButton: z.string().min(1).optional(),
});
