import { z } from "zod";
import { createProductSchema } from "../createProductSchema/schema";
import { zStringMin } from "../../constants";

export const updateProductSchema = createProductSchema.extend({
  id: zStringMin(1),
});

export type TUpdateProductSchema = z.infer<typeof updateProductSchema>;
