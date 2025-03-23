import { useForm } from "./useForm";
import { useEffect } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { getProductSchema } from "../../../server/src/lib/schema/productSchema/getProductSchema/schema";
import { useSearchState } from "./useSearchState";
import { useNavigate } from "react-router-dom";
import { searchProductRoute } from "../lib/routes";
import { FormikValues } from "formik";

export function useSearch(): FormikValues {
  const setValueSearch = useSearchState((state) => state.set);
  const debounced = useDebounceCallback(setValueSearch, 500);
  const navigate = useNavigate();

  const { formik }: FormikValues = useForm({
    initialValues: { search: "" },
    validationSchema: getProductSchema.pick({ search: true }),
    onSubmit: () => {
      navigate(searchProductRoute());
    },
  });

  useEffect(() => {
    debounced(formik.values.search);
  }, [debounced, formik]);

  return { formik };
}
