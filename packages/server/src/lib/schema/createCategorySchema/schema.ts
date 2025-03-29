import { z } from "zod";
import { zStringMin } from "../constants";

export const createCategorySchema = z.object({
  nameRu: zStringMin(3),
  nameEn: zStringMin(3),
});

export type TCreateCategorySchema = z.infer<typeof createCategorySchema>;
