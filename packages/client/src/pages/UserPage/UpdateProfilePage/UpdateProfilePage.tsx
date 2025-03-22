import { updateGeneralProfileSchema } from "../../../../../server/src/lib/schema/updateProfileSchema/schema";
import { trpc } from "../../../api/trpc";
import {
  HelmetTitle,
  PageWrapperCkecAuthorization,
  Title,
} from "../../../components";
import { useForm } from "../../../hook/useForm";
import { UpdateGeneralUserForm } from "./UpdateGeneralUserForm";
import {
  initialPasswordValues,
  UpdatePasswordUserForm,
} from "./UpdatePasswordUserForm";
import { validationPasswordSchema } from "./UpdatePasswordUserForm";

export const UpdateProfilePage = PageWrapperCkecAuthorization()(({ user }) => {
  const updateGeneralProfileTrpc = trpc.updateGeneralProfile.useMutation();
  const updatePasswordlProfileTrpc = trpc.updatePasswordProfile.useMutation();

  const initialGeneralValues = {
    email: user.email,
    name: user.name,
  };

  const {
    formik: formikGeneral,
    error: errorGeneral,
    isSuccess: isSuccessGeneral,
  } = useForm({
    initialValues: initialGeneralValues,
    validationSchema: updateGeneralProfileSchema,
    onSubmit: async (values) => {
      await updateGeneralProfileTrpc.mutateAsync(values);
    },
    isReset: false,
  });

  const {
    formik: formikPassword,
    error: errorPassword,
    isSuccess: isSuccessPassword,
  } = useForm({
    initialValues: initialPasswordValues,
    validationSchema: validationPasswordSchema,
    onSubmit: async (values) => {
      await updatePasswordlProfileTrpc.mutateAsync({
        password: values.password,
        passwordNew: values.passwordNewAgain,
      });
    },
  });

  return (
    <>
      <HelmetTitle title="Профиль" />

      <Title size={1}>Профиль</Title>

      <UpdateGeneralUserForm
        formik={formikGeneral}
        error={errorGeneral}
        isSuccess={isSuccessGeneral}
      />

      <UpdatePasswordUserForm
        formik={formikPassword}
        error={errorPassword}
        isSuccess={isSuccessPassword}
      />
    </>
  );
});
