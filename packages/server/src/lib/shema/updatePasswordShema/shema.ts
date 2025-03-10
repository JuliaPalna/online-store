import { z } from "zod";

export const updatePasswordProfileShema = z.object({
  password: z.string().nonempty().min(1),
  passwordNew: z.string().nonempty().min(1),
});

export type TUpdatePasswordProfileShema = z.infer<
  typeof updatePasswordProfileShema
>;
