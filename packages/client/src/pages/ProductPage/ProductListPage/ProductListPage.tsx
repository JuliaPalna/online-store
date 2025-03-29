import { useParams } from "react-router-dom";
import { trpc } from "../../../api/trpc";
import {
  Text,
  PageWrapperLoadingData,
  Informer,
  HelmetTitle,
  ProductListView,
} from "../../../components";
import { useEventButtonProductCard } from "../../../hook";

export const ProductListPage = PageWrapperLoadingData({
  useQuery: () => {
    const { category } = useParams<string>();

    if (category) {
      return trpc.getProductList.useInfiniteQuery(
        { name: category, limit: 2 },
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        },
      );
    }
  },
})((data) => {
  const products = data[0].products.flatMap((page) => page);
  const { handelClick } = useEventButtonProductCard({
    products,
    invalidateValues: { name: products[0].category.nameEn },
  });

  return (
    <>
      <HelmetTitle title={products[0].category.nameRu} />

      {products.length < 1 ? (
        <Informer status="error">
          <Text>Not found</Text>
        </Informer>
      ) : (
        <ProductListView products={products} onClick={handelClick} />
      )}
    </>
  );
});
