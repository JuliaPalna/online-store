import { API_ROUTES } from "../../../api/routes/constants";
import { TPageListRouteProps } from "../types";

export const pageListAdminPermission: TPageListRouteProps = [
  {
    name: "Создать новый товаров",
    route: API_ROUTES.NEW_PRODUCT,
  },
  {
    name: "Создать новую категорию",
    route: API_ROUTES.NEW_CATEGORY,
  },
  {
    name: "Заказы",
    route: API_ROUTES.ORDER_ALL,
  },
];
