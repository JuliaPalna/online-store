import { TPageListRouteProps } from "../types";
import * as routes from "../../routes";

export const pageListNotAutorisationUser: TPageListRouteProps = [
  {
    name: "Вход",
    route: routes.singInRoute(),
  },
  {
    name: "Регистрация",
    route: routes.singUpRoute(),
  },
];
