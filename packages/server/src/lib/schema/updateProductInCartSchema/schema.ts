import { z } from "zod";
import { zNumberSchema, zStringMin } from "..";

export const updateProductInCartSchema = z.object({
  name: zStringMin(3),
  quantity: zNumberSchema.optional(),
  // typeButton: zStringMin(1).optional(),
});
