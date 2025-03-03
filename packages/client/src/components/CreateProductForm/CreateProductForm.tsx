import { ReactElement } from "react";
import { Field, Textarea, Input } from "../ui";
import { FormikProps } from "formik";
import { TInitialProductProps } from "../../pages/NewProductPage/initialProductProps";
import { Form } from "../Form";

interface ICreateProductFormProps {
  formik: FormikProps<TInitialProductProps>;
  isSuccessCreate: boolean;
  errorCreate: string | null;
}

export function CreateProductForm({
  formik,
  isSuccessCreate,
  errorCreate,
}: ICreateProductFormProps): ReactElement {
  return (
    <Form
      disabled={formik.isSubmitting}
      error={errorCreate}
      isSuccess={isSuccessCreate}
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      title="Форма создания товара"
      buttonName={formik.isSubmitting ? "Отправка..." : "Создать"}
      successMessage="Товар создан"
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

      <Field
        name="count"
        label="Количество"
        disabled={formik.isSubmitting}
        error={
          formik.errors.count && formik.touched.count && formik.errors.count
        }
      >
        <Input
          name="count"
          type="number"
          value={formik.values.count}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          invalid={!!(formik.errors.count && formik.touched.count)}
        />
      </Field>

      <Field
        name="description"
        label="Описание"
        disabled={formik.isSubmitting}
        error={
          formik.errors.description &&
          formik.touched.description &&
          formik.errors.description
        }
      >
        <Textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          invalid={!!(formik.errors.description && formik.touched.description)}
        />
      </Field>

      <Field
        name="price"
        label="Цена"
        disabled={formik.isSubmitting}
        error={
          formik.errors.price && formik.touched.price && formik.errors.price
        }
      >
        <Input
          name="price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          invalid={!!(formik.errors.price && formik.touched.price)}
        />
      </Field>
    </Form>
  );
}
