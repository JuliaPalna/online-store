import { TPageListRouteProps } from "../types";
import * as routes from "../../routes";

export const pageListAutorisationUser: TPageListRouteProps = [
  {
    name: "Создать новый товаров",
    route: routes.getNewProductRoute(),
  },
  {
    name: "Создать новую категорию",
    route: routes.getNewCategoryRoute(),
  },
  {
    name: "Выход",
    route: routes.singOutRoute(),
  },
];
