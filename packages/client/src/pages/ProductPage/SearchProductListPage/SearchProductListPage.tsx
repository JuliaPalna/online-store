import {
  Text,
  Informer,
  HelmetTitle,
  PageWrapperLoadingData,
  ProductListView,
} from "../../../components";
import { useEventButtonProductCard, useSearchProductList } from "../../../hook";
import { useSearchStore } from "../../../store";

export const SearchProductListPage = PageWrapperLoadingData({
  useQuery: () => {
    return useSearchProductList();
  },
})((data) => {
  const valuesSearch: string = useSearchStore((state) => state.search);

  const products = data[0].products.flatMap((page) => page);

  const { handelClick } = useEventButtonProductCard({
    products,
    invalidateValues: { search: valuesSearch },
  });

  return (
    <>
      <HelmetTitle title="Поиск" />

      {products.length < 1 && (
        <Informer status="info">
          <Text>К сожалению, ничего не найдено</Text>
        </Informer>
      )}

      <ProductListView products={products} onClick={handelClick} />
    </>
  );
});
