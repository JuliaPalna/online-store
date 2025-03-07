import { TPageListRouteProps } from "../types";
import * as routes from "../../routes";

export const pageListInitial: TPageListRouteProps = [
  {
    name: "Главная страница",
    route: routes.getMainRoute(),
  },
  {
    name: "Каталог",
    route: routes.getCatalogRoute(),
  },
];
