import { trpc } from "../../../api/trpc";
import {
  Text,
  Informer,
  HelmetTitle,
  PageWrapperLoadingData,
} from "../../../components";
import { ProductListView } from "../../../components/ProductListView";
import { useEventButtonProductCard } from "../../../hook/useEventButtonProductCard";
import { useSearchState } from "../../../hook/useSearchState";

export const SearchProductPage = PageWrapperLoadingData({
  useQuery: () => {
    const valuesSearch = useSearchState((state) => state.search);

    return trpc.getProductList.useInfiniteQuery(
      {
        search: valuesSearch,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      },
    );
  },
})((data) => {
  const valuesSearch = useSearchState((state) => state.search);

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
