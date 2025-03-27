import { API_ROUTES } from "../../../api/routes/constants";
import { TPageListRouteProps } from "../types";

export const pageListInitial: TPageListRouteProps = [
  {
    name: "Главная страница",
    route: API_ROUTES.MAIN,
  },
  {
    name: "Каталог",
    route: API_ROUTES.CATALOGY,
  },
];
