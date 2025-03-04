import { FormikProps } from "formik";
import { TInitialSingInProps } from "../../pages/SingInPage/initialSingInProps";

export interface IFormSingInProps {
  formik: FormikProps<TInitialSingInProps>;
  errorCreate: string | null;
}
