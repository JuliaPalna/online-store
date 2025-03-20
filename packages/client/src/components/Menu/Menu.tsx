import React, { ReactElement, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { Button, List, ListItem, Sidebar } from "../ui";
import { hasAdminPermission } from "../../../../server/src/utils/checkUserPermission";
import cn from "classnames";
import css from "./index.module.scss";
import { useModal } from "../../hook/useModal";
import { useClickAway } from "react-use";
import { usePageListMenu } from "../../hook/usePageListMenu";

export function Menu(): ReactElement {
  const menu = useModal();
  const menuRef = useRef(null);
  const menuContentRef = useRef(null);

  const user = useUserContext();
  const isAdmin = hasAdminPermission(user);

  const pageList = usePageListMenu((state) => state.pages);
  const setAdminPages = usePageListMenu((state) => state.setAdminPages);
  const setAutorisationPages = usePageListMenu(
    (state) => state.setAutorisationPages,
  );
  const setNotAutorisationPages = usePageListMenu(
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

  useClickAway(menuContentRef, menu.close);

  function handelClick() {
    if (menu.isOpen) {
      menu.close();
    } else {
      menu.open();
    }
  }

  return (
    <>
      <Button onClick={handelClick} ariaView="reset" ref={menuRef}>
        <Sidebar status={menu.isOpen} />
      </Button>

      <nav
        ref={menuContentRef}
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
