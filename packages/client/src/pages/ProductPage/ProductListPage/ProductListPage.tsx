import { useParams } from "react-router-dom";
import { trpc } from "../../../api/trpc";
import {
  Text,
  PageWrapperLoadingData,
  Informer,
  HelmetTitle,
} from "../../../components";
import { ProductListView } from "../../../components/ProductListView";

export const ProductListPage = PageWrapperLoadingData({
  useQuery: () => {
    const { name } = useParams();
    if (name) {
      return trpc.getProductList.useInfiniteQuery(
        { name: name, limit: 2 },
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        },
      );
    }
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

  if (products.length < 1) {
    return (
      <Informer status="error">
        <Text>Not found</Text>
      </Informer>
    );
  }

  return (
    <>
      <HelmetTitle title={products[0].category.nameRu} />

      <ProductListView products={products} />
    </>
  );
});
