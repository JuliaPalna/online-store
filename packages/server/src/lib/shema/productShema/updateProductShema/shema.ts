import { z } from "zod";
import { createProductSchema } from "../createProductSchema/shema";

export const updateProductShema = createProductSchema.extend({
  id: z.string().nonempty().min(1),
});

export type TEditProductShema = z.infer<typeof updateProductShema>;
