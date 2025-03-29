import React, { ReactElement, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import { useUserContext } from "../../../context/UserContext";
import { Button, List, ListItem, Sidebar } from "../../ui";
import { hasAdminPermission } from "../../../../../server/src/lib/utils";
import { useModalStore, usePageListMenuStore } from "../../../store";
import cn from "classnames";
import css from "./index.module.scss";

export function Menu(): ReactElement {
  const menu = useModalStore();
  const menuRef = useRef(null);

  const user = useUserContext();
  const isAdmin = hasAdminPermission(user);

  const pageList = usePageListMenuStore((state) => state.pages);
  const setAdminPages = usePageListMenuStore((state) => state.setAdminPages);
  const setAutorisationPages = usePageListMenuStore(
    (state) => state.setAutorisationPages,
  );
  const setNotAutorisationPages = usePageListMenuStore(
    (state) => state.setNotAutorisationPages,
  );

  useEffect(() => {
    if (!user) {
      setNotAutorisationPages();
      return;
    }

    if (isAdmin) {
      setAdminPages();
      return;
    }

    setAutorisationPages();
  }, [
    isAdmin,
    setAdminPages,
    setAutorisationPages,
    setNotAutorisationPages,
    user,
  ]);

  //fix bug
  // Argument of type 'RefObject<HTMLDivElement | null>' is not assignable to parameter of type 'RefObject<HTMLElement> | RefObject<HTMLElement>[]'.
  useOnClickOutside(
    menuRef as unknown as React.RefObject<HTMLElement>,
    menu.close,
  );

  function handelClick() {
    if (menu.isOpen) {
      menu.close();
    } else {
      menu.open();
    }
  }

  return (
    <>
      <Button onClick={handelClick} ariaView="reset">
        <Sidebar status={menu.isOpen} />
      </Button>

      <nav
        ref={menuRef}
        className={cn({
          [css.navigation]: true,
          [css.open]: menu.isOpen,
        })}
      >
        <List className={css.menu} onClick={handelClick}>
          {pageList.map((item, index) => {
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
      </nav>
    </>
  );
}
