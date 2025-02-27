import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, List, ListItem, Navigation } from "../ui";
import * as routes from "../../lib/routes";
import css from "./index.module.scss";

export function Layout() {
  const pages = [
    {
      name: "Главная страница",
      route: routes.getMainRoute(),
    },
    {
      name: "Создать новый товаров",
      route: routes.getNewProductRoute(),
    },
    {
      name: "Список товаров",
      route: routes.getProductsListRoute(),
    },
  ];

  return (
    <div className={css.layout}>
      <Navigation className={css.navigation}>
        <List className={css.menu}>
          {pages.map((item, index) => {
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
      </Navigation>

      <Box className={css.content}>
        <Outlet />
      </Box>
    </div>
  );
}
