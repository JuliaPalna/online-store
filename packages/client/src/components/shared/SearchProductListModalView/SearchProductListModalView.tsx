import React from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem, Text } from "../../ui";
import { useSearchProductList } from "../../../hook";
import { PageWrapperLoadingData } from "../PageWrapper";
import { API_ROUTES } from "../../../api/routes";
import { getProductInfoRoute } from "../../../api/routes";
import css from "./index.module.scss";
import cn from "classnames";

export const SearchProductListModalView = PageWrapperLoadingData({
  useQuery: () => {
    return useSearchProductList();
  },
})((data) => {
  const products = data[0].products.flatMap((page) => page).slice(0, 2);

  return (
    <Box
      className={cn({
        [css.wrap]: true,
      })}
    >
      {products.length < 1 ? (
        <Text>К сожалению, ничего не найдено</Text>
      ) : (
        <Box>
          <List className={css.list}>
            {products.map((product) => {
              return (
                <React.Fragment key={product.id}>
                  <ListItem className={css.item} ariaLabel={product.name}>
                    <Link
                      className={css.link}
                      to={getProductInfoRoute({
                        name: product.name,
                        category: product.category.nameEn,
                      })}
                    >
                      <Box className={css.info}>
                        <Text>{product.name}</Text>
                      </Box>
                    </Link>
                  </ListItem>
                </React.Fragment>
              );
            })}
          </List>

          <Box className={css.all}>
            <Link className={css.link} to={API_ROUTES.SEARCH_PRODUCT}>
              <Text>Показать все совпадения</Text>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
});
