import React, { ReactElement } from "react";
import * as routes from "../../lib/routes";
import { List, ListItem } from "../ui";
import { Link } from "react-router-dom";
import css from "./index.module.scss";
import { BasketIcon, HomeIcon, LikeIcon, SearchIcon, UserIcon } from "../Icon";

export function MenuMin(): ReactElement {
  const menu: {
    name: React.ReactNode;
    route: string;
  }[] = [
    {
      name: <HomeIcon />,
      route: routes.getMainRoute(),
    },
    {
      name: <SearchIcon />,
      route: routes.searchProductRoute(),
    },
    {
      name: <BasketIcon />,
      route: routes.getCartUserRoute(),
    },
    {
      name: <LikeIcon />,
      route: routes.getLikeProductRoute(),
    },
    {
      name: <UserIcon />,
      route: routes.singInRoute(),
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
