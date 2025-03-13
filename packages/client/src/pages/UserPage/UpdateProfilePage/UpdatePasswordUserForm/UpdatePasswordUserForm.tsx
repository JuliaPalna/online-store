import { ReactElement } from "react";
import { Field, Form, Input } from "../../../../components";
import { IPropsForm } from "../../types";

export function UpdatePasswordUserForm({
  formik,
  error,
  isSuccess,
}: IPropsForm): ReactElement {
  return (
    <Form
      title="Пароль"
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
      <Field name="password" label="Текущий пароль" data={formik}>
        <Input name="password" type="password" data={formik} />
      </Field>

      <Field name="passwordNew" label="Новый пароль" data={formik}>
        <Input name="passwordNew" type="password" data={formik} />
      </Field>

      <Field name="passwordNewAgain" label="Повторить пароль" data={formik}>
        <Input name="passwordNewAgain" type="password" data={formik} />
      </Field>
    </Form>
  );
}
