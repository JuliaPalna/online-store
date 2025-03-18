import { trpc } from "../../../api/trpc";
import {
  Text,
  Informer,
  HelmetTitle,
  PageWrapperLoadingData,
} from "../../../components";
import { ProductListView } from "../../../components/ProductListView";
import { useEventButtonProductCard } from "../../../hook/useEventButtonProductCard";

export const SearchProductPage = PageWrapperLoadingData({
  useQuery: () => {
    const values = "";

    return trpc.getProductList.useInfiniteQuery(
      {
        search: values,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      },
    );
  },
})((data) => {
  const products = data[0].products.flatMap((page) => page);
  const { handelClick } = useEventButtonProductCard({
    products,
    invalidateValues: { search: "" },
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
