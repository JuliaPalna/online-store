import { ReactElement } from "react";
import { Field, Input } from "../ui";
import { Form } from "../Form";
import { ICreateFormProps } from "./types";

export function CreateCategoryForm({
  formik,
  isSuccessCreate,
  errorCreate,
}: ICreateFormProps): ReactElement {
  return (
    <Form
      disabled={formik.isSubmitting}
      error={errorCreate}
      isSuccess={isSuccessCreate}
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      title="Форма создания категории товара"
      buttonName={formik.isSubmitting ? "Отправка..." : "Создать"}
      successMessage="Категория создана"
    >
      <Field
        name="name"
        label="Наименование"
        disabled={formik.isSubmitting}
        error={formik.errors.name && formik.touched.name && formik.errors.name}
      >
        <Input
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          invalid={!!(formik.errors.name && formik.touched.name)}
        />
      </Field>
    </Form>
  );
}
