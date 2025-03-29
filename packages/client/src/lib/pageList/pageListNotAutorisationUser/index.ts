import { API_ROUTES } from "../../../api/routes";
import { TPageListRouteProps } from "../types";

export const pageListNotAutorisationUser: TPageListRouteProps = [
  {
    name: "Вход",
    route: API_ROUTES.SING_IN,
  },
  {
    name: "Регистрация",
    route: API_ROUTES.SING_UP,
  },
];
