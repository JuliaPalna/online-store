import { FormikProps } from "formik";
import { TInitialProductProps } from "../../pages/NewProductPage/initialProductProps";

export interface ICreateProductFormProps {
  formik: FormikProps<TInitialProductProps>;
  isSuccessCreate: boolean;
  errorCreate: string | null;
}
