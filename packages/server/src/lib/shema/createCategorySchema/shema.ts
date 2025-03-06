import { z } from "zod";

export const createCategorySchema = z.object({
  nameRu: z
    .string()
    .nonempty()
    .min(3, "Текст должен быть длиной не менее 3 символов."),
  nameEn: z
    .string()
    .nonempty()
    .min(1, "Текст должен быть длиной не менее 1 символов."),
});

export type TCreateCategorySchema = z.infer<typeof createCategorySchema>;
