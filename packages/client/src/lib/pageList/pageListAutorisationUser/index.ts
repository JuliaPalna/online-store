import { API_ROUTES } from "../../../api/routes";
import { TPageListRouteProps } from "../types";

export const pageListAutorisationUser: TPageListRouteProps = [
  {
    name: "Редактировать профиль",
    route: API_ROUTES.UPDATE_PROFILE,
  },
  {
    name: "Выход",
    route: API_ROUTES.SING_OUT,
  },
];
