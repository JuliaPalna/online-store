// import { trpc } from "../../../api/trpc";
import {
  Text,
  Informer,
  HelmetTitle,
  PageWrapperLoadingData,
} from "../../../components";
import { ProductListView } from "../../../components/shared/ProductListView";
import { useEventButtonProductCard } from "../../../hook/useEventButtonProductCard";
import { useSearchProductList } from "../../../hook/useSearchProductList";
import { useSearchStore } from "../../../store/useSearchStore";

export const SearchProductListPage = PageWrapperLoadingData({
  useQuery: () => {
    return useSearchProductList();
  },
})((data) => {
  const valuesSearch = useSearchStore((state) => state.search);

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
