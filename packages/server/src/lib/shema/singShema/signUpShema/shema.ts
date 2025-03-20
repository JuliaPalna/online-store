import { z } from "zod";
import { zEmailRequired, zStringMin } from "../..";

export const signUpShema = z.object({
  email: zEmailRequired,
  password: zStringMin(4),
});

export type TSignUpShema = z.infer<typeof signUpShema>;
