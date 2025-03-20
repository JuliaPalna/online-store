import { useForm } from "./useForm";
import { useEffect } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { getProductShema } from "../../../server/src/lib/shema/productShema/getProductShema/shema";
import { useSearchState } from "./useSearchState";
import { useNavigate } from "react-router-dom";
import { searchProductRoute } from "../lib/routes";

export function useSearch() {
  const setValueSearch = useSearchState((state) => state.set);
  const debounced = useDebounceCallback(setValueSearch, 500);
  const navigate = useNavigate();

  const { formik } = useForm({
    initialValues: { search: "" },
    validationSchema: getProductShema.pick({ search: true }),
    onSubmit: () => {
      navigate(searchProductRoute());
    },
  });

  useEffect(() => {
    debounced(formik.values.search);
  }, [debounced, formik, navigate]);

  return { formik };
}
