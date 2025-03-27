import { useForm } from "./useForm";
import { useEffect } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { getProductSchema } from "../../../server/src/lib/schema/productSchema/getProductSchema/schema";
import { useSearchStore } from "../store/useSearchStore";
import { useNavigate } from "react-router-dom";
import { FormikValues } from "formik";
import { useSearchModalStore } from "../store/useSearchModalStore";
import { API_ROUTES } from "../api/routes/constants";

export function useSearchValue(): {
  formik: FormikValues;
} {
  const navigate = useNavigate();
  const modalSearch = useSearchModalStore();
  const setValueSearch = useSearchStore((state) => state.set);

  const debounced = useDebounceCallback((value) => {
    if (formik.values.search !== "") {
      setValueSearch(value);
      modalSearch.open();
    }
  }, 500);

  const { formik } = useForm({
    initialValues: { search: "" },
    validationSchema: getProductSchema.pick({ search: true }),
    onSubmit: () => {
      navigate(API_ROUTES.SEARCH__PRODUCT);
    },
  });

  useEffect(() => {
    if (formik.values.search !== "") {
      debounced(formik.values.search);
    }
  }, [formik.values.search]);

  return { formik };
}
