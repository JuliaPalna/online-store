import { useFormik } from "formik";
import { SingUpForm } from "../../components/SingUpForm";
import { initialSingUpProps } from "./initialSingUpProps";
import { useDispatch } from "../../hook/useDispatch";
import { withZodSchema } from "formik-validator-zod";
import { signUpShema } from "../../../../server/src/lib/shema/signUpShema/shema";
import { trpc } from "../../api/trpc";
import { ReactElement } from "react";
import { z } from "zod";

export function SingUpPage(): ReactElement {
  const singUpTrpc = trpc.singUp.useMutation();

  const { isSuccess, error, dispatch } = useDispatch(async (values) => {
    await singUpTrpc.mutateAsync(values);
  });

  const formik = useFormik({
    initialValues: initialSingUpProps,
    validate: withZodSchema(
      signUpShema.extend({
        passwordAgain: z.string().min(4),
      }),
    ),
    onSubmit: async (values) => {
      await dispatch(values);
      formik.resetForm();
    },
  });

  return (
    <SingUpForm
      formik={formik}
      isSuccessCreate={isSuccess}
      errorCreate={error}
    />
  );
}
