import { ReactElement } from "react";
import { SocialList } from "../SocialList";
import { Box } from "../ui";
import css from "./index.module.scss";

export function Footer():ReactElement {
  return (
    <footer className={css.footer}>
      <Box>
        <SocialList />
      </Box>
    </footer>
  );
}
