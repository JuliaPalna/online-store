import { Link } from "react-router-dom";
import { Box, List, ListItem, Text } from "../../ui";
import React from "react";
import { useSearchProductList } from "../../../hook/useSearchProductList";
import { PageWrapperLoadingData } from "../PageWrapper";
import css from "./index.module.scss";
import cn from "classnames";
import { API_ROUTES } from "../../../api/routes";
import { getProductInfoRoute } from "../../../api/routes/getProductInfoRoute";

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
            <Link className={css.link} to={API_ROUTES.SEARCH__PRODUCT}>
              <Text>Показать все совпадения</Text>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
});
