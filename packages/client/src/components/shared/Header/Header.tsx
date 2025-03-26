import { ReactElement } from "react";
import { Box, Logo } from "../../ui";
import { Menu } from "../Menu";
import css from "./index.module.scss";
import { Search } from "../Search";

export function Header(): ReactElement {
  return (
    <header className={css.header}>
      <Menu />

      <Box className={css.logo}>
        <Logo href={"#"}>Logo</Logo>
      </Box>

      <Box>
        <Search />
      </Box>
    </header>
  );
}
