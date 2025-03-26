import React, { ReactElement } from "react";
import { Link, List, ListItem } from "../../ui";
import { ISocialProps } from "./types";
import css from "./index.module.scss";

export function SocialList(): ReactElement {
  const social: ISocialProps[] = [
    {
      href: "#",
      icon: "VK",
    },
    {
      href: "#",
      icon: "TG",
    },
    {
      href: "#",
      icon: "IN",
    },
  ];

  return (
    <List className={css.list}>
      {social.map((item, index) => {
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
