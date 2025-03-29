import { Form } from "../Form";
import { IFormProps } from "./types";
import { Field, Input, Textarea } from "../../ui";

export function ProductInfoForm({
  title,
  buttonName,
  formik,
  error,
  successMessage,
}: IFormProps) {
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
