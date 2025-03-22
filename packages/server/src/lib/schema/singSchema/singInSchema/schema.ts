import { z } from "zod";
import { zEmailRequired, zPasswordSchema } from "../..";

export const singInSchema = z.object({
  email: zEmailRequired,
  password: zPasswordSchema,
});

export type TSingInSchema = z.infer<typeof singInSchema>;
