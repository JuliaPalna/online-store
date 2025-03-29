import { z } from "zod";
import { zEmailRequired, zStringMin } from "../../constants";

export const signUpSchema = z.object({
  email: zEmailRequired,
  password: zStringMin(4),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
