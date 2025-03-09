import { trpc } from "../../../api/trpc";
import { createProductSchema } from "../../../../../server/src/lib/shema/productShema/createProductSchema/shema";
import { initialProductProps } from "./initialProductProps";
import {
  PageWrapperCkecAuthorization,
  ProductInfoForm,
} from "../../../components";
import { useForm } from "../../../hook/useForm";

export const NewProductPage = PageWrapperCkecAuthorization()(() => {
  const createProductTrpc = trpc.createProduct.useMutation();

  const { formik, error } = useForm({
    initialValues: initialProductProps,
    validationSchema: createProductSchema,
    onSubmit: async (values) => {
      await createProductTrpc.mutateAsync(values);
    },
  });

  return (
    <ProductInfoForm
      title="Форма создания товара"
      buttonName="Создать"
      error={error}
      formik={formik}
    />
  );
});
