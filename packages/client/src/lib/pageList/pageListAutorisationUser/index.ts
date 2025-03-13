import { TPageListRouteProps } from "../types";
import * as routes from "../../routes";

export const pageListAutorisationUser: TPageListRouteProps = [
  {
    name: "Редактировать профиль",
    route: routes.updateProfileRoute(),
  },
  {
    name: "Выход",
    route: routes.singOutRoute(),
  },
];
