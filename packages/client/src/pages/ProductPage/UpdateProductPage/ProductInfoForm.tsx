import { Field, Form, Input, Textarea } from "../../../components";
import { useForm } from "../../../hook/useForm";
import { useNavigate } from "react-router-dom";
import { updateProductShema } from "../../../../../server/src/lib/shema/productShema/updateProductShema/shema";
import { trpc } from "../../../api/trpc";

import { getProductInfoRoute } from "../../../lib/routes";
import { TrpcRouterOutput } from "../../../../../server/src/router";

interface IFormProps {
  title?: string;
  successMessage?: string;
  isSuccess?: boolean;
  // error: string | null;
  buttonName?: string;
  // formik: FormikValues;
  product: NonNullable<TrpcRouterOutput["getProduct"]["product"]>;
}

export function ProductInfoForm({
  title,
  buttonName,
  product,
  // formik,
  // error,
  successMessage,
}: IFormProps) {
  const navigate = useNavigate();
  const updateProductTrpc = trpc.updateProduct.useMutation();
  const initialValues = {
    name: product.name,
    count: product.count,
    description: product.description,
    price: product.price,
    category: product.category.nameRu,
  };

  const { formik, error } = useForm({
    initialValues: initialValues,
    validationSchema: updateProductShema.omit({ id: true }),
    onSubmit: async (values) => {
      await updateProductTrpc.mutateAsync({
        id: product.id,
        ...values,
      });

      navigate(
        getProductInfoRoute({
          id: product.id,
          category: product.category.nameEn,
        }),
      );
    },
  });

  return (
    <Form
      title={title}
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      buttonName={formik.isSubmitting ? "Отправка..." : `${buttonName}`}
      error={error}
      disabled={formik.isSubmitting}
      successMessage={successMessage}
    >
      <Field name="name" label="Наименование" data={formik}>
        <Input name="name" type="text" data={formik} />
      </Field>

      <Field name="count" label="Количество" data={formik}>
        <Input name="count" type="number" data={formik} />
      </Field>

      <Field name="description" label="Описание" data={formik}>
        <Textarea name="description" data={formik} />
      </Field>

      <Field name="price" label="Цена" data={formik}>
        <Input name="price" type="number" data={formik} />
      </Field>

      <Field name="category" label="Категория" data={formik}>
        <Input name="category" type="text" data={formik} />
      </Field>
    </Form>
  );
}
