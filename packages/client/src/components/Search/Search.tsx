import { useSearch } from "../../hook/useSearch";
import { Input, Field } from "../ui";

export function Search() {
  const { formik } = useSearch();

  return (
    <Field name="search" label="Поиск" data={formik}>
      <Input name="search" data={formik} />
    </Field>
  );
}
