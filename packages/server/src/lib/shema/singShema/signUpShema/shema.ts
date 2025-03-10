import { z } from "zod";

export const signUpShema = z.object({
  email: z.string().min(3).email(),
  password: z.string().min(4),
  name: z.string(),
});

export type TSignUpShema = z.infer<typeof signUpShema>;
