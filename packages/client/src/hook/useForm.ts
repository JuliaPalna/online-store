import { useState } from "react";
import { withZodSchema } from "formik-validator-zod";
import { FormikHelpers, useFormik } from "formik";
import { z } from "zod";

export function useForm<TZodSchema extends z.ZodTypeAny>({
  initialValues = {},
  validationSchema,
  onSubmit,
  isReset = true,
}: {
  initialValues: z.infer<TZodSchema>;
  validationSchema: TZodSchema;
  onSubmit: (
    values: z.infer<TZodSchema>,
    actions: FormikHelpers<z.infer<TZodSchema>>,
  ) => Promise<void> | void;
  isReset?: boolean;
}) {
  const [error, setError] = useState<string | null>(null);

  const formik = useFormik<z.infer<TZodSchema>>({
    initialValues: initialValues,
    validate: withZodSchema(validationSchema),
    onSubmit: async (values, formikHelpers) => {
      try {
        setError(null);
        await onSubmit(values, formikHelpers);
        if (isReset) {
          formik.resetForm();
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    },
  });

  return {
    formik,
    error,
  };
}
