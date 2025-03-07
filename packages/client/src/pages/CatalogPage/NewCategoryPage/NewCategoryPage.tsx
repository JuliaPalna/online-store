import { ReactElement } from "react";
import { trpc } from "../../../api/trpc";
import { Field, Form, Input, Text } from "../../../components";
import { useForm } from "../../../hook/useForm";
import { initialCategorytProps } from "./types";
import { createCategorySchema } from "../../../../../server/src/lib/shema/createCategorySchema/shema";
import { useUserContext } from "../../../context/UserContext";

export function NewCategoryPage(): ReactElement {
  const user = useUserContext();

  const createProductCategoryTrpc = trpc.createCategory.useMutation();

  const { formik, error } = useForm({
    initialValues: initialCategorytProps,
    validationSchema: createCategorySchema,
    onSubmit: async (values) => {
      await createProductCategoryTrpc.mutateAsync(values);
    },
  });

  if (!user) {
    return <Text>{"No authorization!".toUpperCase()}</Text>;
  }

  return (
    <Form
      title="Форма создания категории товара"
      buttonName={formik.isSubmitting ? "Отправка..." : "Создать"}
      successMessage="Категория создана"
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      error={error}
      disabled={formik.isSubmitting}
    >
      <Field name="nameRu" label="Наименование" data={formik}>
        <Input name="nameRu" type="text" data={formik} />
      </Field>

      <Field name="nameEn" label="Name" data={formik}>
        <Input name="nameEn" type="text" data={formik} />
      </Field>
    </Form>
  );
}
