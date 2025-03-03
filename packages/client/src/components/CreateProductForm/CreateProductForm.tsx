import { ReactElement } from "react";
import { Button, Field, Text, Textarea, Title, Informer, Input } from "../ui";
import css from "../../styles/components/CreateProductForm/index.module.scss";
import { FormikProps } from "formik";
import { TInitialProductProps } from "../../pages/NewProductPage/initialProductProps";

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
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      className={css.form}
    >
      <Title className={css.title}>Форма создания товара</Title>

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

      {isSuccessCreate && (
        <Informer status="success">
          <Text>Товар создан</Text>
        </Informer>
      )}
      {!!errorCreate && (
        <Informer status="error">
          <Text>{errorCreate}</Text>
        </Informer>
      )}

      <Button
        type="submit"
        disabled={formik.isSubmitting}
        className={css.button}
      >
        {formik.isSubmitting ? "formik.isSubmitting..." : "Создать"}
      </Button>
    </form>
  );
}
