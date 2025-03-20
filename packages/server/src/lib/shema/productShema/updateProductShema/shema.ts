import { z } from "zod";
import { createProductSchema } from "../createProductSchema/shema";
import { zStringMin } from "../..";

export const updateProductShema = createProductSchema.extend({
  id: zStringMin(1),
});

export type TUpdateProductShema = z.infer<typeof updateProductShema>;
