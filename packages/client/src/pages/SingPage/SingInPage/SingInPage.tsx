import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { trpc } from "../../../api/trpc";
import { getMainRoute } from "../../../lib/routes";
import { useForm } from "../../../hook/useForm";
import { Field, Form, HelmetTitle, Input } from "../../../components";
import { initialSingInProps } from "./initialSingInProps";
import { singInShema } from "../../../../../server/src/lib/shema/singShema/singInShema/shema";

export function SingInPage() {
  const singInTrpcRoute = trpc.singIn.useMutation();
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();

  const { formik, error } = useForm({
    initialValues: initialSingInProps,
    validationSchema: singInShema,
    onSubmit: async (values) => {
      const { token } = await singInTrpcRoute.mutateAsync(values);
      Cookies.set("token", token, { expires: 99999 });
      trpcUtils.invalidate();
      navigate(getMainRoute());
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
