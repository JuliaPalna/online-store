import { useForm } from "./useForm";
import { getProductShema } from "../../../server/src/lib/shema/productShema/getProductShema/shema";
import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

export function useSearch() {
  const [values, setValues] = useDebounceValue("", 500);

  const { formik } = useForm({
    initialValues: { search: "" },
    validationSchema: getProductShema.pick({ search: true }),
  });

  useEffect(() => {
    setValues(formik.values.search);
  }, [formik, setValues]);

  return {
    formik,
    values,
  };
}
