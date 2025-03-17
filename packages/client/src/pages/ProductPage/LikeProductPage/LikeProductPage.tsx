import { trpc } from "../../../api/trpc";
import {
  Text,
  Informer,
  HelmetTitle,
  PageWrapperLoadingData,
} from "../../../components";
import { ProductListView } from "../../../components/ProductListView";

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
  if (!data) {
    return (
      <Informer status="error">
        <Text>Not found</Text>
      </Informer>
    );
  }

  const products = data.pages.flatMap((page) => page.products);

  return (
    <>
      <HelmetTitle title="Избранное" />

      {products.length < 1 && (
        <Informer status="info">
          <Text>К сожалению, ничего не найдено</Text>
        </Informer>
      )}

      <ProductListView products={products} />
    </>
  );
});
