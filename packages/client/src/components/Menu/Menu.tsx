import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { Button, List, ListItem, Sidebar } from "../ui";
import * as pages from "../../lib/pageList";
import cn from "classnames";
import css from "./index.module.scss";

export function Menu(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUserContext();
  let pageList = [...pages.pageListInitial];

  pageList = user
    ? [...pageList, ...pages.pageListAutorisationUser]
    : [...pageList, ...pages.pageListNotAutorisationUser];

  function handelClick() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <>
      <Button onClick={handelClick} className={css.button}>
        <Sidebar status={isOpen} />
      </Button>

      <nav
        className={cn({
          [css.navigation]: true,
          [css.open]: isOpen,
        })}
      >
        <List className={css.menu}>
          {pageList.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <ListItem className={css.item}>
                  <Link
                    className={css.link}
                    to={item.route}
                    onClick={handelClick}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              </React.Fragment>
            );
          })}
        </List>
      </nav>
    </>
  );
}
