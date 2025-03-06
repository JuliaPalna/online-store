import { ReactElement } from "react";
import { trpc } from "../../../api/trpc";
import { createProductSchema } from "../../../../../server/src/lib/shema/productShema/createProductSchema/shema";
import { initialProductProps } from "./initialProductProps";
import { Field, Form, Input, Textarea } from "../../../components";
import { useForm } from "../../../hook/useForm";

export function NewProductPage(): ReactElement {
  const createProductTrpc = trpc.createProduct.useMutation();

  const { formik, error } = useForm({
    initialValues: initialProductProps,
    validationSchema: createProductSchema,
    onSubmit: async (values) => {
      await createProductTrpc.mutateAsync(values);
    },
  });

  return (
    <Form
      title="Форма создания товара"
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      buttonName={formik.isSubmitting ? "Отправка..." : "Создать"}
      successMessage="Товар создан"
      error={error}
      disabled={formik.isSubmitting}
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
