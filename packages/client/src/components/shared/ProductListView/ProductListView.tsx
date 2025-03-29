import React from "react";
import { Link } from "react-router-dom";
import { getProductInfoRoute } from "../../../api/routes";
import { Box, List, ListItem } from "../../ui";
import { CardProduct } from "../CardProduct";
import { IProductListViewProps } from "./types";
import css from "./index.module.scss";

export function ProductListView({
  products,
  onClick,
}: IProductListViewProps) {
  return (
    <List className={css.list} onClick={onClick}>
      {products.map((product) => {
        const {id, name, category} = product;

        return (
          <React.Fragment key={id}>
            <ListItem className={css.item} ariaLabel={name}>
              <Link
                className={css.link}
                to={getProductInfoRoute({
                  name,
                  category: category.nameEn,
                })}
              ></Link>

              <Box className={css.wrap}>
                <CardProduct product={product} />
              </Box>
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
}
