import { Field, Input } from "../ui";
import { ReactElement } from "react";
import { Form } from "../Form";
import { IFormSingUpProps } from "./IFormSingUpProps";

export function SingUpForm({
  formik,
  isSuccessCreate,
  errorCreate,
}: IFormSingUpProps): ReactElement {
  return (
    <Form
      disabled={formik.isSubmitting}
      error={errorCreate}
      isSuccess={isSuccessCreate}
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      title="Регистрация"
      buttonName={formik.isSubmitting ? "Загрузка..." : "Зарегистрироваться"}
      successMessage="Регистрация выполнена успешно"
    >
      <Field
        name="email"
        label="Почта"
        disabled={formik.isSubmitting}
        error={
          formik.errors.email && formik.touched.email && formik.errors.email
        }
      >
        <Input
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          invalid={!!(formik.errors.email && formik.touched.email)}
        />
      </Field>

      <Field
        name="password"
        label="Пароль"
        disabled={formik.isSubmitting}
        error={
          formik.errors.password &&
          formik.touched.password &&
          formik.errors.password
        }
      >
        <Input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          invalid={!!(formik.errors.password && formik.touched.password)}
        />
      </Field>

      <Field
        name="passwordAgain"
        label="Повторите пароль"
        disabled={formik.isSubmitting}
        error={
          formik.errors.passwordAgain &&
          formik.touched.passwordAgain &&
          formik.errors.passwordAgain
        }
      >
        <Input
          name="passwordAgain"
          type="password"
          value={formik.values.passwordAgain}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
          invalid={
            !!(formik.errors.passwordAgain && formik.touched.passwordAgain)
          }
        />
      </Field>
    </Form>
  );
}
