import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem } from "../ui";
import { getProductLisByCategorytRoute } from "../../lib/routes";
import css from "./index.module.scss";

interface IProps {
  сategory: {
    nameRu: string;
    nameEn: string;
  }[];
}

export function CatalogView({ сategory }: IProps): ReactElement {
  return (
    <List className={css.list}>
      {сategory.map((item) => {
        return (
          <React.Fragment key={item.nameEn}>
            <ListItem className={css.item}>
              <Link
                className={css.link}
                to={getProductLisByCategorytRoute({
                  name: item.nameEn,
                })}
              >
                <Box className={css.wrap}>{item.nameRu}</Box>
              </Link>
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
}
