import { z } from "zod";
import { updatePasswordProfileShema } from "../../../../../server/src/lib/shema/updatePasswordShema/shema";
import { updateGeneralProfileShema } from "../../../../../server/src/lib/shema/updateProfileShema/shema";
import { trpc } from "../../../api/trpc";
import { PageWrapperCkecAuthorization, Title } from "../../../components";
import { useForm } from "../../../hook/useForm";
import { UpdateGeneralUserForm } from "./UpdateGeneralUserForm";
import { UpdatePassworUserForm } from "./UpdatePasswordUserForm";

export const UpdateProfilePage = PageWrapperCkecAuthorization()(({ user }) => {
  const trpcUtils = trpc.useContext();
  const updateGeneralProfileTrpc = trpc.updateGeneralProfile.useMutation();
  const updatePasswordlProfileTrpc = trpc.updatePasswordProfile.useMutation();

  const initialPasswordValues = {
    password: "",
    passwordNew: "",
    passwordNewAgain: "",
  };

  const initialGeneralValues = {
    email: user.email,
    name: user.name,
  };

  const validationPasswordSchema = updatePasswordProfileShema
    .extend({
      passwordNewAgain: z.string().nonempty().min(1),
    })
    .superRefine((values, ctx) => {
      if (values.passwordNew !== values.passwordNewAgain) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Пароли должны быть одинаковые",
          path: ["passwordNewAgain"],
        });
      }
    });

  const {
    formik: formikGeneral,
    error: errorGeneral,
    isSuccess: isSuccessGeneral,
  } = useForm({
    initialValues: initialGeneralValues,
    validationSchema: updateGeneralProfileShema,
    onSubmit: async (values) => {
      const updatedGeneral = await updateGeneralProfileTrpc.mutateAsync(values);

      trpcUtils.authorizationUser.setData(undefined, {
        authorization: updatedGeneral,
      });
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
      <Title size={1}>Редактировать профиль</Title>

      <UpdateGeneralUserForm
        formik={formikGeneral}
        error={errorGeneral}
        isSuccess={isSuccessGeneral}
      />
      <UpdatePassworUserForm
        formik={formikPassword}
        error={errorPassword}
        isSuccess={isSuccessPassword}
      />
    </>
  );
});
