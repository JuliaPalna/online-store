import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, List, ListItem, Navigation } from "../ui";
import css from "./index.module.scss";
import { ILayoutProps } from "./ILayoutProps";

export function Layout({ props }: { props: ILayoutProps[] }) {
  return (
    <Box className={css.layout}>
      <Navigation className={css.navigation}>
        <List className={css.menu}>
          {props.map((item, index) => {
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
    </Box>
  );
}
