import { FormikValues } from "formik";

export interface IFormProps {
  title?: string;
  successMessage?: string;
  isSuccess?: boolean;
  error: string | null;
  buttonName?: string;
  formik: FormikValues;
}
