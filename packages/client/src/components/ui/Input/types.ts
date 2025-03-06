import { FormikValues } from "formik";

export interface IInputProps {
  name: string;
  type?: "password" | "text" | "email" | "number" | "file" | "tel";
  data: FormikValues;
}
