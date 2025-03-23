import { z } from "zod";
import { zNumberSchema, zStringMin } from "../..";

export const createProductSchema = z.object({
  name: zStringMin(3),
  description: zStringMin(5),
  price: zNumberSchema,
  count: zNumberSchema,
  category: zStringMin(3),
});

export type TCreateProductSchema = z.infer<typeof createProductSchema>;
