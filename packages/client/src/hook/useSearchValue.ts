import { NavigateFunction, useNavigate } from "react-router-dom";
import { useDebounceCallback } from "usehooks-ts";
import { useForm } from "./useForm";
import { useEffect } from "react";
import { getProductSchema } from "../../../server/src/lib/schema";
import { IUseSearchModalStoreProps, useSearchStore } from "../store";
import { FormikValues } from "formik";
import { useSearchModalStore } from "../store";
import { API_ROUTES } from "../api/routes";

export function useSearchValue(): {
  formik: FormikValues;
} {
  const navigate: NavigateFunction = useNavigate();
  const modalSearch: IUseSearchModalStoreProps = useSearchModalStore();
  const setValueSearch = useSearchStore((state) => state.set);

  const debounced = useDebounceCallback((value: string): void => {
    if (formik.values.search !== "") {
      setValueSearch(value);
      modalSearch.open();
    }
  }, 500);

  const { formik } = useForm({
    initialValues: { search: "" },
    validationSchema: getProductSchema.pick({ search: true }),
    onSubmit: () => {
      navigate(API_ROUTES.SEARCH_PRODUCT);
    },
  });

  useEffect(() => {
    if (formik.values.search !== "") {
      debounced(formik.values.search);
    }
  }, [formik.values.search]);

  return { formik };
}
