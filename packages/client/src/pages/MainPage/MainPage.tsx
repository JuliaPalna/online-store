import React, { ReactElement } from "react";
import { Box, List, ListItem, Title } from "../../components/ui";
import css from "./index.module.scss";
import { trpc } from "../../api/trpc";
import { getProductsListRoute } from "../../lib/routes";
import { Link } from "react-router-dom";

export function MainPage(): ReactElement {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getCategory.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Title className={css.title}>Главная страница</Title>

      <List className={css.list}>
        {data.сategory.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <ListItem className={css.item}>
                <Link className={css.link} to={getProductsListRoute()}>
                  <Box className={css.wrap}>{item.name}</Box>
                </Link>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
}
