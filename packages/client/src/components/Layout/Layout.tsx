import { Link, Outlet } from "react-router-dom";
import { Box, List, ListItem, Navigation } from "../ui";
import { getMainRoute, getProductsListRoute } from "../../lib/routes";
import css from "./index.module.scss";

export function Layout() {
  return (
    <div className={css.layout}>
      <Navigation className={css.navigation}>
        <List className={css.menu}>
          <ListItem className={css.item}>
            <Link className={css.link} to={getMainRoute()}>
              Главная страница
            </Link>
          </ListItem>
          <ListItem className={css.item}>
            <Link className={css.link} to={getProductsListRoute()}>
              Список товаров
            </Link>
          </ListItem>
        </List>
      </Navigation>

      <Box className={css.content}>
        <Outlet />
      </Box>
    </div>
  );
}
