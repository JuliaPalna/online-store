import { useDebounceValue } from "usehooks-ts";
import { trpc } from "../../../api/trpc";
import { Text, Informer, Input, Field, HelmetTitle } from "../../../components";
import { useForm } from "../../../hook/useForm";
import { getProductShema } from "../../../../../server/src/lib/shema/productShema/getProductShema/shema";
import { ProductListView } from "../../../components/ProductListView";
import { useEffect } from "react";

export const SearchProductPage = () => {
  const [values, setValues] = useDebounceValue("", 500);

  const { formik } = useForm({
    initialValues: { search: "" },
    validationSchema: getProductShema.pick({ search: true }),
  });

  useEffect(() => {
    setValues(formik.values.search);
  }, [formik, setValues]);

  const { data } = trpc.getProductList.useInfiniteQuery(
    {
      search: values,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );

  if (!data) {
    return (
      <Informer status="info">
        <Text>К сожалению, ничего не найдено</Text>
      </Informer>
    );
  }

  const products = data.pages.flatMap((page) => page.products);

  return (
    <>
      <HelmetTitle title="Поиск" />

      <Field name="search" label="Поиск" data={formik}>
        <Input name="search" data={formik} />
      </Field>

      {products.length < 1 && (
        <Informer status="info">
          <Text>К сожалению, ничего не найдено</Text>
        </Informer>
      )}

      <ProductListView products={products} />
    </>
  );
};
