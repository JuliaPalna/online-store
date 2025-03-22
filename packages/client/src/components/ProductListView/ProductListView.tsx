import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, CardProduct, Box } from "../../components";
import { getProductInfoRoute } from "../../lib/routes";
import { TProduct } from "../../../../server/src/lib/schema/productSchema/productSchema/schema";
import css from "./index.module.scss";

export function ProductListView({
  products,
  onClick,
}: {
  products: Omit<TProduct, "count" | "description">[];
  onClick: (event: React.MouseEvent) => void;
}) {
  return (
    <List className={css.list} onClick={onClick}>
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
