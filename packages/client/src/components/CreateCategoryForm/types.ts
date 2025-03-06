import { FormikProps } from "formik";
import { TInitialCategorytProps } from "../../pages/NewCategoryPage/types";

export interface ICreateFormProps {
  formik: FormikProps<TInitialCategorytProps>;
  isSuccessCreate: boolean;
  errorCreate: string | null;
}
