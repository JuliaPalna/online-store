import { ReactElement } from "react";
import { Field, Form, Input } from "../../../../components";
import { IPropsForm } from "../../types";

export function UpdateGeneralUserForm({
  formik,
  error,
  isSuccess,
}: IPropsForm): ReactElement {
  return (
    <Form
      title="Общие"
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      buttonName={formik.isSubmitting ? "Отправка..." : `Редактировать`}
      error={error}
      disabled={formik.isSubmitting}
      successMessage="Отредактирован успешно"
      isSuccess={isSuccess}
    >
      <Field name="email" label="Email" data={formik}>
        <Input name="email" type="email" data={formik} />
      </Field>

      <Field name="name" label="Имя" data={formik}>
        <Input name="name" type="text" data={formik} />
      </Field>
    </Form>
  );
}
