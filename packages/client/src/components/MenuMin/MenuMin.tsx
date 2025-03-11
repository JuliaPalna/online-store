import React, { ReactElement } from "react";
import * as routes from "../../lib/routes";
import { List, ListItem } from "../ui";
import { Link } from "react-router-dom";
import css from "./index.module.scss";

export function MenuMin(): ReactElement {
  const menu = [
    {
      name: "Main",
      route: routes.getMainRoute(),
    },
    {
      name: "Search",
      route: "#",
    },
    {
      name: "Корз",
      route: "#",
    },
    {
      name: "Lik",
      route: "#",
    },
    {
      name: "SingIn",
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
