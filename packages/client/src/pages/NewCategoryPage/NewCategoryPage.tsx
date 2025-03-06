import { ReactElement } from "react";
import { useFormik } from "formik";
import { withZodSchema } from "formik-validator-zod";
import { trpc } from "../../api/trpc";
import { useDispatch } from "../../hook/useDispatch";
import { initialCategorytProps } from "./types";
import { createCategorySchema } from "../../../../server/src/lib/shema/createCategorySchema/shema";
import { CreateCategoryForm } from "../../components/CreateCategoryForm";

export function NewCategoryPage(): ReactElement {
  const createProductCategoryTrpc = trpc.createCategory.useMutation();

  const { isSuccess, error, dispatch } = useDispatch(async (values) => {
    await createProductCategoryTrpc.mutateAsync(values);
  });

  const formik = useFormik({
    initialValues: initialCategorytProps,
    validate: withZodSchema(createCategorySchema),
    onSubmit: async (values) => {
      await dispatch(values);
      formik.resetForm();
    },
  });

  return (
    <CreateCategoryForm
      formik={formik}
      isSuccessCreate={isSuccess}
      errorCreate={error}
    />
  );
}
