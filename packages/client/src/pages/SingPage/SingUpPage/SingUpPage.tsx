import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { trpc } from "../../../api/trpc";
import { Field, Form, HelmetTitle, Input } from "../../../components";
import { useForm } from "../../../hook";
import { initialSingUpProps } from "./initialSingUpProps";
import { API_ROUTES } from "../../../api/routes";
import { validationSchema } from "./schema";

export function SingUpPage(): ReactElement {
  const singUpTrpc = trpc.singUp.useMutation();
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();

  const { formik, error } = useForm({
    initialValues: initialSingUpProps,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { token } = await singUpTrpc.mutateAsync(values);
      Cookies.set("token", token, { expires: 99999 });
      trpcUtils.invalidate();
      navigate(API_ROUTES.MAIN);
    },
  });

  return (
    <>
      <HelmetTitle title="Авторизация" />

      <Form
        title="Регистрация"
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit();
        }}
        buttonName="Зарегистрироваться"
        successMessage="Регистрация выполнена успешно"
        error={error}
        disabled={formik.isSubmitting}
      >
        <Field name="email" label="Почта" data={formik}>
          <Input name="email" type="email" data={formik} />
        </Field>

        <Field name="password" label="Пароль" data={formik}>
          <Input name="password" type="password" data={formik} />
        </Field>

        <Field name="passwordAgain" label="Повторите пароль" data={formik}>
          <Input name="passwordAgain" type="password" data={formik} />
        </Field>
      </Form>
    </>
  );
}
