import { Form } from "../Form";
import { Field, Input } from "../ui";
import { IFormSingInProps } from "./IFormSingInProps";

export function SingInForm({ formik, errorCreate }: IFormSingInProps) {
  return (
    <Form
      disabled={formik.isSubmitting}
      error={errorCreate}
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      title="Вход"
      buttonName={formik.isSubmitting ? "Загрузка..." : "Войти"}
      successMessage="Успех!"
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
    </Form>
  );
}
