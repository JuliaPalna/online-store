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
import { useUserContext } from "../../../context/UserContext";

export function MenuMin(): ReactElement {
  const user = useUserContext();
  const userRoute = user ? API_ROUTES.UPDATE_PROFILE : API_ROUTES.SING_IN;

  const menuList: {
    name: React.ReactNode;
    route: string;
  }[] = [
    {
      name: <HomeIcon />,
      route: API_ROUTES.MAIN,
    },
    {
      name: <SearchIcon />,
      route: API_ROUTES.SEARCH_PRODUCT,
    },
    {
      name: <BasketIcon />,
      route: API_ROUTES.CART,
    },
    {
      name: <LikeIcon />,
      route: API_ROUTES.LIKE_PRODUCT,
    },
    {
      name: <UserIcon />,
      route: userRoute,
    },
  ];

  return (
    <nav className={css.menuBlock}>
      <List className={css.menu}>
        {menuList.map((item, index) => {
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
