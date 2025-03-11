import { ReactElement } from "react";
import { Box, Logo } from "../ui";
import { Menu } from "../Menu";
import css from "./index.module.scss";

export function Header(): ReactElement {
  return (
    <header className={css.header}>
      <Menu />

      <Box className={css.logo}>
        <Logo href={"#"} className={css.link}>
          Logo
        </Logo>
      </Box>
    </header>
  );
}
