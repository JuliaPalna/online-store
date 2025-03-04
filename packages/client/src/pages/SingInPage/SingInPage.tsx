import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { SingInForm } from "../../components/SingInForm";
import { withZodSchema } from "formik-validator-zod";
import { singInShema } from "../../../../server/src/lib/shema/singInShema/shema";
import { initialSingInProps } from "./initialSingInProps";
import { useDispatch } from "../../hook/useDispatch";
import { trpc } from "../../api/trpc";
import { getMainRoute } from "../../lib/routes";

export function SingInPage() {
  const singInTrpcRoute = trpc.singIn.useMutation();
  const navigate = useNavigate();
  const trpcUtils = trpc.useContext();

  const { error, dispatch } = useDispatch(async (values) => {
    const { token } = await singInTrpcRoute.mutateAsync(values);
    Cookies.set("token", token, { expires: 99999 });
    trpcUtils.invalidate();
    navigate(getMainRoute());
  });

  const formik = useFormik({
    initialValues: initialSingInProps,
    validate: withZodSchema(singInShema),
    onSubmit: async (values) => {
      await dispatch(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <SingInForm formik={formik} errorCreate={error} />
    </>
  );
}
