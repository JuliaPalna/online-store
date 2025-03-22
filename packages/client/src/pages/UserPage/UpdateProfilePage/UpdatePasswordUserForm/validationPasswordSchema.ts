import { z } from "zod";
import { updatePasswordProfileSchema } from "../../../../../../server/src/lib/schema/updatePasswordSchema/schema";
import { zPasswordSchema } from "../../../../../../server/src/lib/schema";

export const validationPasswordSchema = updatePasswordProfileSchema
  .extend({
    passwordNewAgain: zPasswordSchema,
  })
  .superRefine((values, ctx) => {
    if (values.passwordNew !== values.passwordNewAgain) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Пароли должны быть одинаковые",
        path: ["passwordNewAgain"],
      });
    }
  });
