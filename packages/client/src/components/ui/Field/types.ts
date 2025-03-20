import { FormikValues } from "formik";

export interface IFieldProps {
  name: string;
  label: string;
  data: FormikValues;
  children?: React.ReactNode;
  hidden?: boolean;
}
