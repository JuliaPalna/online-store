import React, { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { trpc } from "../../../api/trpc";
import { List, ListItem, Title, CardProduct, Box } from "../../../components";
import { getProductInfoRoute } from "../../../lib/routes";
import css from "./index.module.scss";

export function ProductListPage(): ReactElement {
  const { name } = useParams();

  if (!name) {
    throw Error("Not Found");
  }
  const { data, error, isLoading, isFetching, isError } =
    trpc.getProductListByCategory.useQuery({ name: name });

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Title className={css.title}>{name}</Title>

      <List className={css.list}>
        {data.products.map((product) => {
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
}
