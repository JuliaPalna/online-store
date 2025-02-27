import { z } from "zod";

const imageValidationRegex: RegExp = /\.(?:jpe?g|svg|png|gif)$/;

export const formCreateProductSchema = z.object({
  name: z
    .string()
    .nonempty()
    .min(3, "Текст должен быть длиной не менее 3 символов."),
  description: z
    .string()
    .nonempty()
    .min(20, "Текст должен быть длиной не менее 20 символов."),
  imageSrc: z
    .string()
    .refine(
      (value) => imageValidationRegex.test(value),
      "Прикрепите изображение",
    ),
  count: z.number(),
});
