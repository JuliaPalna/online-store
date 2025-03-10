import { updateProfileShema } from "../../../../../server/src/lib/shema/updateProfileShema/shema";
import { trpc } from "../../../api/trpc";
import {
  Field,
  Form,
  Input,
  PageWrapperCkecAuthorization,
} from "../../../components";
import { useForm } from "../../../hook/useForm";

export const UpdateProfilePage = PageWrapperCkecAuthorization()(({ user }) => {
  const trpcUtils = trpc.useContext();
  const updateUserTrpc = trpc.updateProfile.useMutation();

  const { formik, error } = useForm({
    initialValues: {
      email: user.email,
      name: user.name,
    },
    validationSchema: updateProfileShema,
    onSubmit: async (values) => {
      const updatedUser = await updateUserTrpc.mutateAsync(values);
      trpcUtils.authorizationUser.setData(undefined, {
        authorization: updatedUser,
      });
    },
    isReset: false,
  });

  return (
    <Form
      title="Редактировать профиль"
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      buttonName={formik.isSubmitting ? "Отправка..." : `Редактировать`}
      error={error}
      disabled={formik.isSubmitting}
      successMessage="Профиль отредактирован успешно"
      isSuccess={true}
    >
      <Field name="email" label="Email" data={formik}>
        <Input name="email" type="email" data={formik} />
      </Field>

      <Field name="name" label="Имя" data={formik}>
        <Input name="name" type="text" data={formik} />
      </Field>
    </Form>
  );
});
