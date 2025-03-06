import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string()
    .nonempty()
    .min(3, "Текст должен быть длиной не менее 3 символов."),
});

export type TCreateCategorySchema = z.infer<typeof createCategorySchema>;
