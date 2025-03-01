import { Formik } from "formik";
import { Button, Field, Form, Text, Textarea, Title } from "../../components";
import { initialProductProps } from "./initialProductProps";
import { withZodSchema } from "formik-validator-zod";
import { trpc } from "../../api/trpc";
import { createProductSchema } from "../../../../server/src/lib/shema/createProductSchema/shema";
import { useDispatch } from "../../hook/useDispatch";
import { Input } from "../../components/ui/Input";
import { Informer } from "../../components/ui/Informer";
import { ReactElement } from "react";

export function NewProductPage(): ReactElement {
  const createProductTrpc = trpc.createProduct.useMutation();

  const { isSuccess, error, dispatch } = useDispatch(async (props) => {
    await createProductTrpc.mutateAsync(props);
  });

  return (
    <>
      <Title className={""}>Форма создания товара</Title>

      <Formik
        initialValues={initialProductProps}
        validate={withZodSchema(createProductSchema)}
        onSubmit={(values, actions) => {
          dispatch(values);
          actions.resetForm();
        }}
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
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Field
              name="name"
              label="Наименование"
              disabled={isSubmitting}
              error={errors.name && touched.name && errors.name}
            >
              <Input
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                invalid={!!(errors.name && touched.name)}
              />
            </Field>

            <Field
              name="count"
              label="Количество"
              disabled={isSubmitting}
              error={errors.count && touched.count && errors.count}
            >
              <Input
                name="count"
                type="number"
                value={values.count}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                invalid={!!(errors.count && touched.count)}
              />
            </Field>

            <Field
              name="description"
              label="Описание"
              disabled={isSubmitting}
              error={
                errors.description && touched.description && errors.description
              }
            >
              <Textarea
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                invalid={!!(errors.description && touched.description)}
              />
            </Field>
            <Field
              name="imageSrc"
              label="Выберите изображение"
              disabled={isSubmitting}
              error={errors.imageSrc && touched.imageSrc && errors.imageSrc}
            >
              <Input
                name="imageSrc"
                type="file"
                value={values.imageSrc}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                invalid={!!(errors.imageSrc && touched.imageSrc)}
              />
            </Field>

            {!!isSuccess && (
              <Informer status="success">
                <Text>Товар создан</Text>
              </Informer>
            )}
            {!!error && (
              <Informer status="error">
                <Text>{error}</Text>
              </Informer>
            )}

            <Button type="submit" disabled={isSubmitting} className="button">
              {isSubmitting ? "isSubmitting..." : "Создать"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
