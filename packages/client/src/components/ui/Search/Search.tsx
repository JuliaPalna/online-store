import { Input } from "../Input";
import { useSearch } from "../../../hook/useSearch";
import { Field } from "../Field";

export function Search() {
  const { formik } = useSearch();

  return (
    <>
      <Field name="search" label="Поиск" data={formik} hidden={true}>
        <Input name="search" data={formik} />
      </Field>
    </>
  );
}
