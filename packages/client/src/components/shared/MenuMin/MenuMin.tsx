import React, { ReactElement } from "react";
import { List, ListItem } from "../../ui";
import { Link } from "react-router-dom";
import css from "./index.module.scss";
import {
  BasketIcon,
  HomeIcon,
  LikeIcon,
  SearchIcon,
  UserIcon,
} from "../../Icon";
import { API_ROUTES } from "../../../api/routes";

export function MenuMin(): ReactElement {
  const menu: {
    name: React.ReactNode;
    route: string;
  }[] = [
    {
      name: <HomeIcon />,
      route: API_ROUTES.MAIN,
    },
    {
      name: <SearchIcon />,
      route: API_ROUTES.SEARCH__PRODUCT,
    },
    {
      name: <BasketIcon />,
      route: API_ROUTES.CART,
    },
    {
      name: <LikeIcon />,
      route: API_ROUTES.LIKE__PRODUCT,
    },
    {
      name: <UserIcon />,
      route: API_ROUTES.SING_IN,
    },
  ];

  return (
    <nav className={css.menuBlock}>
      <List className={css.menu}>
        {menu.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem className={css.item}>
                <Link className={css.link} to={item.route}>
                  {item.name}
                </Link>
              </ListItem>
            </React.Fragment>
          );
        })}
      </List>
    </nav>
  );
}
