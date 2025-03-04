import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useFormik } from "formik";
import { withZodSchema } from "formik-validator-zod";
import Cookies from "js-cookie";
import { SingUpForm } from "../../components/SingUpForm";
import { initialSingUpProps } from "./initialSingUpProps";
import { useDispatch } from "../../hook/useDispatch";
import { signUpShema } from "../../../../server/src/lib/shema/signUpShema/shema";
import { trpc } from "../../api/trpc";
import { getMainRoute } from "../../lib/routes";

export function SingUpPage(): ReactElement {
  const singUpTrpc = trpc.singUp.useMutation();
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();

  const { error, dispatch } = useDispatch(async (values) => {
    const { token } = await singUpTrpc.mutateAsync(values);
    Cookies.set("token", token, { expires: 99999 });
    trpcUtils.invalidate();
    navigate(getMainRoute());
  });

  const formik = useFormik({
    initialValues: initialSingUpProps,
    validate: withZodSchema(
      signUpShema.extend({
        passwordAgain: z.string().min(4),
      }),
    ),
    onSubmit: async (values) => {
      await dispatch(values);
      formik.resetForm();
    },
  });

  return <SingUpForm formik={formik} errorCreate={error} />;
}
