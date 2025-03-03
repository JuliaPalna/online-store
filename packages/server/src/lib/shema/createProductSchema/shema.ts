import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .nonempty()
    .min(3, "Текст должен быть длиной не менее 3 символов."),
  description: z
    .string()
    .nonempty()
    .min(20, "Текст должен быть длиной не менее 20 символов."),
  price: z.number(),
  count: z.number(),
});

export type TCreateProductSchema = z.infer<typeof createProductSchema>;
