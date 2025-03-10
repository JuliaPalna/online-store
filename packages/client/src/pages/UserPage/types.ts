import { FormikValues } from "formik";

export interface IPropsForm {
  formik: FormikValues;
  error: string | null;
  isSuccess: boolean;
}
