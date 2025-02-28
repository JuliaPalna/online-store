import { Formik } from "formik";
import { Button, Field, Form, Text, Textarea, Title } from "../../components";
import {
  initialProductProps,
  TInitialProductProps,
} from "./initialProductProps";
import { withZodSchema } from "formik-validator-zod";
import { trpc } from "../../lib/trpc";
import { createProductSchema } from "../../../../server/src/lib/shema/createProductSchema/shema";

export function NewProductPage() {
  const createProductTrpc = trpc.createProduct.useMutation();

  async function createProduct(values: TInitialProductProps) {
    await createProductTrpc.mutateAsync(values);
  }

  return (
    <>
      <Title className={""}>Форма создания товара</Title>

      <Formik
        initialValues={initialProductProps}
        validate={withZodSchema(createProductSchema)}
        onSubmit={createProduct}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              label="Наименование"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <Text className="error">{errors.name}</Text>
            )}

            <Textarea
              name="description"
              label="Описание"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && touched.description && (
              <Text className="error">{errors.description}</Text>
            )}

            <Field
              name="count"
              label="Количество"
              type="number"
              value={values.count}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.count && touched.count && (
              <Text className="error">{errors.count}</Text>
            )}

            <Field
              name="imageSrc"
              label="Выберите изображение"
              type="file"
              value={values.imageSrc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.imageSrc && touched.imageSrc && (
              <Text className="error">{errors.imageSrc}</Text>
            )}

            <Button type="submit" disabled={isSubmitting} className="button">
              Создать
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
