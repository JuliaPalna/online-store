import { z } from "zod";
import { updatePasswordProfileShema } from "../../../../../../server/src/lib/shema/updatePasswordShema/shema";
import { zPassword } from "../../../../../../server/src/lib/shema";

export const validationPasswordSchema = updatePasswordProfileShema
  .extend({
    passwordNewAgain: zPassword,
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
