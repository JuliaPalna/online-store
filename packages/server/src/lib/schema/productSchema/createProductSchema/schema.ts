import { z } from "zod";
import { zNumber, zStringMin } from "../..";

export const createProductSchema = z.object({
  name: zStringMin(3),
  description: zStringMin(5),
  price: zNumber,
  count: zNumber,
  category: zStringMin(3),
});

export type TCreateProductSchema = z.infer<typeof createProductSchema>;
