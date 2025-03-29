import React, { ReactElement } from "react";
import { Link, List, ListItem } from "../../ui";
import css from "./index.module.scss";
import { socialList } from "../../../lib/socialList";

export function SocialList(): ReactElement {
  return (
    <List className={css.list}>
      {socialList.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem className={css.item}>
              <Link href={item.href}>{item.icon}</Link>
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
  );
}
