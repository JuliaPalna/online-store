import { z } from "zod";
import { updateProductSchema } from "../updateProductSchema/schema";
import { createCategorySchema } from "../../createCategorySchema/schema";
import { zBoolean, zNumber } from "../..";

export const productSchema = updateProductSchema.extend({
  category: createCategorySchema,
  likes: zNumber,
  isLike: zBoolean,
});

export type TProduct = z.infer<typeof productSchema>;

export type TProductList = TProduct[];
