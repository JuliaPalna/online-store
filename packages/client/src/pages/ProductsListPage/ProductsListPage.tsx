import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { trpc } from "../../api/trpc";
import { List, ListItem, Title, CardProduct, Box } from "../../components";
import { getProductInfoRoute } from "../../lib/routes";
import css from "./index.module.scss";

export function ProductsListPage(): ReactElement {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getProducts.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Title className={css.title}>Каталог</Title>

      <List className={css.list}>
        {data.products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <ListItem className={css.item}>
                <Link
                  className={css.link}
                  to={getProductInfoRoute({ id: product.id })}
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
}
