import cn from "classnames";
import { trpc } from "../../api/trpc";
import { List, ListItem, Title, CardProduct } from "../../components";
import { Link } from "react-router-dom";
import { getProductInfoRoute } from "../../lib/routes";
import React, { ReactElement } from "react";
import { IProduct } from "../../../../server/src/lib/types";
import css from "../../styles/components/Flex/index.module.scss";

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
      <Title>Список товаров</Title>

      <List className={cn({ [css.flex]: true, [css["column"]]: true })}>
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
