import React from "react";
import { Link, useParams } from "react-router-dom";
import { trpc } from "../../../api/trpc";
import {
  List,
  ListItem,
  Title,
  CardProduct,
  Box,
  Text,
  PageWrapperLoadingData,
} from "../../../components";
import { getProductInfoRoute } from "../../../lib/routes";
import css from "./index.module.scss";

export const ProductListPage = PageWrapperLoadingData({
  useQuery: () => {
    const { name } = useParams();
    if (name) {
      return trpc.getProductListByCategory.useInfiniteQuery(
        { name: name, limit: 2 },
        {
          getNextPageParam: (lastPage) => lastPage.nextCursor,
        },
      );
    }
  },
})((data) => {
  if (!data) {
    return <Text>Not found</Text>;
  }

  const products = data?.pages.flatMap((page) => page.products);

  return (
    <>
      <Title className={css.title}>Список</Title>

      <List className={css.list}>
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <ListItem className={css.item}>
                <Link
                  className={css.link}
                  to={getProductInfoRoute({
                    id: product.id,
                    category: product.category.nameEn,
                  })}
                >
                  <Box className={css.wrap}>
                    <CardProduct product={product} />
                  </Box>
                </Link>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
});
