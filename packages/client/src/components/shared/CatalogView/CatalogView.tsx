import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Box, Image, List, ListItem, Text } from "../../ui";
import { getProductListByCategoryRoute } from "../../../api/routes";
import { IProps } from "./types";
import image from "../../../assets/images/organicFarming.png";
import cn from "classnames";
import css from "./index.module.scss";

export function CatalogView({ сategory, viewRow }: IProps): ReactElement {
  return (
    <List
      className={cn({
        [css.list]: true,
        [css[`view-${viewRow}`]]: true,
      })}
    >
      {сategory.map((item) => {
        return (
          <React.Fragment key={item.nameEn}>
            <ListItem className={css.item}>
              <Link
                className={css.link}
                to={getProductListByCategoryRoute({
                  category: item.nameEn,
                })}
              >
                <Box className={css.wrap}>
                  <Box className={css.wrapImage}>
                    <Image alt={item.nameRu} src={image} />
                  </Box>
                  <Text>{item.nameRu}</Text>
                </Box>
              </Link>
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
}
