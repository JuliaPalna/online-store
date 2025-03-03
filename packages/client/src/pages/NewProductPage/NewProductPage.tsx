import { useFormik } from "formik";
import { initialProductProps } from "./initialProductProps";
import { withZodSchema } from "formik-validator-zod";
import { trpc } from "../../api/trpc";
import { createProductSchema } from "../../../../server/src/lib/shema/createProductSchema/shema";
import { ReactElement } from "react";
import { CreateProductForm } from "../../components/CreateProductForm";
import { useDispatch } from "../../hook/useDispatch";

export function NewProductPage(): ReactElement {
  const createProductTrpc = trpc.createProduct.useMutation();

  const { isSuccess, error, dispatch } = useDispatch(async (values) => {
    await createProductTrpc.mutateAsync(values);
  });

  const formik = useFormik({
    initialValues: initialProductProps,
    validate: withZodSchema(createProductSchema),
    onSubmit: async (values) => {
      await dispatch(values);
      formik.resetForm();
    },
  });

  return (
    <CreateProductForm
      formik={formik}
      isSuccessCreate={isSuccess}
      errorCreate={error}
    ></CreateProductForm>
  );
}
