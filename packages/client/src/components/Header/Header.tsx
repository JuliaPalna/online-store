import { ReactElement } from "react";
import { Box, Logo, Search } from "../ui";
import { Menu } from "../Menu";
import css from "./index.module.scss";

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
