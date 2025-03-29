import { trpc } from "../../../api/trpc";
import {
  Text,
  Informer,
  HelmetTitle,
  PageWrapperLoadingData,
  ProductListView,
} from "../../../components";
import { useEventButtonProductCard } from "../../../hook";

export const LikeProductPage = PageWrapperLoadingData({
  useQuery: () => {
    return trpc.getProductList.useInfiniteQuery(
      {
        limit: 2,
        filterByLike: true,
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
    invalidateValues: { filterByLike: true },
  });

  return (
    <>
      <HelmetTitle title="Избранное" />

      {products.length < 1 ? (
        <Informer status="error">
          <Text>К сожалению, ничего не найдено</Text>
        </Informer>
      ) : (
        <ProductListView products={products} onClick={handelClick} />
      )}
    </>
  );
});
