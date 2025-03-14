import { z } from "zod";
import { updateProductShema } from "../updateProductShema/shema";
import { createCategorySchema } from "../../createCategorySchema/shema";

export const productSchema = updateProductShema.extend({
  category: createCategorySchema,
  likes: z.number(),
  isLike: z.boolean(),
});

export type TProduct = z.infer<typeof productSchema>;

export type TProductList = TProduct[];
