import { useState } from "react";
import { withZodSchema } from "formik-validator-zod";
import { FormikHelpers, FormikValues, useFormik } from "formik";
import { z } from "zod";

interface IUseFormProps<TZodSchema extends z.ZodTypeAny> {
  initialValues: z.infer<TZodSchema>;
  validationSchema: TZodSchema;
  onSubmit?: (
    values: z.infer<TZodSchema>,
    actions: FormikHelpers<z.infer<TZodSchema>>,
  ) => Promise<void> | void;
  isReset?: boolean;
}

export function useForm<TZodSchema extends z.ZodTypeAny>({
  initialValues = {},
  validationSchema,
  onSubmit,
  isReset = true,
}: IUseFormProps<TZodSchema>) {
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const formik: FormikValues = useFormik<z.infer<TZodSchema>>({
    initialValues: initialValues,
    validate: withZodSchema(validationSchema),
    onSubmit: async (values, formikHelpers) => {
      try {
        if (!onSubmit) {
          return;
        }

        setError(null);
        await onSubmit(values, formikHelpers);

        if (isReset) {
          formik.resetForm();
        }

        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      } catch (error) {
        setIsSuccess(false);

        if (error instanceof Error) {
          setError(error.message);
        }

        throw Error(`${error}`);
      }
    },
  });

  return {
    formik,
    error,
    isSuccess,
  };
}
