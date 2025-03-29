import { z } from "zod";
import { zNumberSchema, zStringMin } from "../constants";

export const updateProductInCartSchema = z.object({
  name: zStringMin(3),
  quantity: zNumberSchema.optional(),
});

export type TUpdateProductInCartSchema = z.infer<
  typeof updateProductInCartSchema
>;
