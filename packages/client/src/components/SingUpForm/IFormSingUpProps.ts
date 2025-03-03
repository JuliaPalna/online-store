import { FormikProps } from "formik";
import { TInitialSingUpProps } from "../../pages/SingUpPage/initialSingUpProps";

export interface IFormSingUpProps {
  formik: FormikProps<TInitialSingUpProps>;
  isSuccessCreate: boolean;
  errorCreate: string | null;
}
