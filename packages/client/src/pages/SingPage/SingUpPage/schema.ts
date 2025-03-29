import { z } from "zod";
import { signUpSchema } from "../../../../../server/src/lib/schema";

export const validationSchema = signUpSchema.extend({
  passwordAgain: z.string().min(4),
});
