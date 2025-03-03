import { useFormik } from "formik";
import { SingInForm } from "../../components/SingInForm";
import { withZodSchema } from "formik-validator-zod";
import { singInShema } from "../../../../server/src/lib/shema/singInShema/shema";
import { initialSingInProps } from "./initialSingInProps";
import { useDispatch } from "../../hook/useDispatch";
import { trpc } from "../../api/trpc";

export function SingInPage() {
  const singInTrpcRoute = trpc.singIn.useMutation();

  const { isSuccess, error, dispatch } = useDispatch(async (values) => {
    await singInTrpcRoute.mutateAsync(values);
  });

  const formik = useFormik({
    initialValues: initialSingInProps,
    validate: withZodSchema(singInShema),
    onSubmit: async (values) => {
      await dispatch(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <SingInForm
        formik={formik}
        isSuccessCreate={isSuccess}
        errorCreate={error}
      />
    </>
  );
}
