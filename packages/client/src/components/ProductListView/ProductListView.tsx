import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, CardProduct, Box } from "../../components";
import { getProductInfoRoute } from "../../lib/routes";
import { TProduct } from "../../../../server/src/lib/shema/productShema/productSchema/shema";
import css from "./index.module.scss";

export function ProductListView({
  products,
}: {
  products: Omit<TProduct, "count" | "description">[];
}) {
  return (
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
  );
}
