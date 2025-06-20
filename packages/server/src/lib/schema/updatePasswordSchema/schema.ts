import { z } from "zod";
import { zPasswordSchema } from "../constants";

export const updatePasswordProfileSchema = z.object({
  password: zPasswordSchema,
  passwordNew: zPasswordSchema,
});

export type TUpdatePasswordProfileSchema = z.infer<
  typeof updatePasswordProfileSchema
>;
