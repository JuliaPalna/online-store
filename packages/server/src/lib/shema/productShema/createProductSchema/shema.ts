import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .nonempty()
    .min(3, "Текст должен быть длиной не менее 3 символов."),
  description: z
    .string()
    .nonempty()
    .min(5, "Текст должен быть длиной не менее 5 символов."),
  price: z.number(),
  count: z.number(),
  category: z.string().nonempty().min(1),
});

export type TCreateProductSchema = z.infer<typeof createProductSchema>;
