import { create } from "zustand";
import { IPageRouteProps } from "../lib/pageList/types";
import {
  pageListAdminPermission,
  pageListAutorisationUser,
  pageListInitial,
  pageListNotAutorisationUser,
} from "../lib/pageList";

interface IUsePageListMenuProps {
  pages: IPageRouteProps[];
  setAdminPages: () => void;
  setAutorisationPages: () => void;
  setNotAutorisationPages: () => void;
}

export const usePageListMenu = create<IUsePageListMenuProps>((set) => ({
  pages: [...pageListInitial],

  setAdminPages: () =>
    set(() => ({
      pages: [
        ...pageListInitial,
        ...pageListAdminPermission,
        ...pageListAutorisationUser,
      ],
    })),

  setAutorisationPages: () =>
    set(() => ({
      pages: [...pageListInitial, ...pageListAutorisationUser],
    })),

  setNotAutorisationPages: () =>
    set(() => ({
      pages: [...pageListInitial, ...pageListNotAutorisationUser],
    })),
}));
