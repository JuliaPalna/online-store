import { FormikProps } from "formik";
import { TInitialSingInProps } from "../../pages/SingInPage/initialSingInProps";

export interface IFormSingInProps {
  formik: FormikProps<TInitialSingInProps>;
  isSuccessCreate: boolean;
  errorCreate: string | null;
}
