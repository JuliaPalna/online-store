import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "../ui";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import { MenuMin } from "../shared/MenuMin";
import css from "./index.module.scss";

export function Layout(): ReactElement {
  return (
    <Box className={css.layout}>
      <Box className={css.header}>
        <Header />
      </Box>

      <Box className={css.content}>
        <Outlet />
      </Box>

      <Box className={css.footer}>
        <Footer />
      </Box>

      <Box className={css.bottomMenu}>
        <MenuMin />
      </Box>
    </Box>
  );
}
