import { TPageListRouteProps } from "../types";
import * as routes from "../../routes";

export const pagesListInitial: TPageListRouteProps = [
  {
    name: "Главная страница",
    route: routes.getMainRoute(),
  },
  {
    name: "Каталог",
    route: routes.getCatalogRoute(),
  },
];
