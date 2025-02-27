import { trpc } from "../../lib/trpc";
import { List, ListItem, Title, IProduct, CardProduct } from "../../components";
import { Link } from "react-router-dom";
import { getProductInfoRoute } from "../../lib/routes";
import React from "react";

export function ProductsListPage() {
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
      <Title className="">Список товаров</Title>

      <List className="">
        {data.products.map((product: IProduct) => {
          return (
            <React.Fragment key={product.id}>
              <ListItem className="">
                <Link to={getProductInfoRoute({ id: product.id })}>
                  <CardProduct product={product} />
                </Link>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
}
