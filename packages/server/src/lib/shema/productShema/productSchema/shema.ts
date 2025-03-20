import { z } from "zod";
import { updateProductShema } from "../updateProductShema/shema";
import { createCategorySchema } from "../../createCategorySchema/shema";
import { zBoolean, zNumber } from "../..";

export const productSchema = updateProductShema.extend({
  category: createCategorySchema,
  likes: zNumber,
  isLike: zBoolean,
});

export type TProduct = z.infer<typeof productSchema>;

export type TProductList = TProduct[];
