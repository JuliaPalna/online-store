import { z } from "zod";
import { zPassword } from "..";

export const updatePasswordProfileShema = z.object({
  password: zPassword,
  passwordNew: zPassword,
});

export type TUpdatePasswordProfileShema = z.infer<
  typeof updatePasswordProfileShema
>;
