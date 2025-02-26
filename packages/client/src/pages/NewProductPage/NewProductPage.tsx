import { useFormik } from "formik";
import { Field, Form, Textarea, Title } from "../../components";
import {
  formCreateProductProps,
  TFormCreateProductProps,
} from "./formCreateProductProps";

export function NewProductPage() {
  const formik = useFormik<TFormCreateProductProps>({
    initialValues: formCreateProductProps,
    onSubmit: () => {
      // console.info("Submitted", values);
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formik.handleSubmit();
  }

  return (
    <>
      <Title className={""}>Форма создания товара</Title>

      <Form
        nameButton="Создать"
        onSubmit={handleSubmit}
        children={[
          <Field
            name="name"
            label="Наименование"
            type="text"
            value={formik.values["name"]}
            onChange={(event) =>
              formik.setFieldValue("name", event.target.value)
            }
          />,

          <Textarea
            name="description"
            label="Описание"
            value={formik.values["description"]}
            onChange={(event) =>
              formik.setFieldValue("description", event.target.value)
            }
          />,

          <Field
            name="count"
            label="Выберите изображение"
            type="file"
            value={formik.values["count"]}
            onChange={(event) =>
              formik.setFieldValue("count", event.target.value)
            }
          />,
        ]}
      />
    </>
  );
}
