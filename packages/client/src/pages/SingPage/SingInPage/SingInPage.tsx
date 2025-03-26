import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { trpc } from "../../../api/trpc";
import { useForm } from "../../../hook/useForm";
import { Field, Form, HelmetTitle, Input } from "../../../components";
import { initialSingInProps } from "./initialSingInProps";
import { singInSchema } from "../../../../../server/src/lib/schema/singSchema/singInSchema/schema";
import { API_ROUTES } from "../../../api/routes";

export function SingInPage() {
  const singInTrpcRoute = trpc.singIn.useMutation();
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();

  const { formik, error } = useForm({
    initialValues: initialSingInProps,
    validationSchema: singInSchema,
    onSubmit: async (values) => {
      const { token } = await singInTrpcRoute.mutateAsync(values);
      Cookies.set("token", token, { expires: 99999 });
      trpcUtils.invalidate();
      navigate(API_ROUTES.MAIN);
    },
  });

  return (
    <>
      <HelmetTitle title="Авторизация" />

      <Form
        title="Вход"
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit();
        }}
        buttonName="Войти"
        successMessage="Успех!"
        error={error}
        disabled={formik.isSubmitting}
      >
        <Field name="email" label="Почта" data={formik}>
          <Input name="email" type="email" data={formik} />
        </Field>

        <Field name="password" label="Пароль" data={formik}>
          <Input name="password" type="password" data={formik} />
        </Field>
      </Form>
    </>
  );
}
