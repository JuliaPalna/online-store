import { z } from "zod";
import { updateProductSchema } from "../updateProductSchema/schema";
import { createCategorySchema } from "../../createCategorySchema/schema";
import { zBoolean, zNumberSchema } from "../..";

export const productSchema = updateProductSchema.extend({
  category: createCategorySchema,
  likes: zNumberSchema,
  isLike: zBoolean,
});

export type TProduct = z.infer<typeof productSchema>;

export type TProductList = TProduct[];
