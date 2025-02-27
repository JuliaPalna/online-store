import { ILayoutProps } from "../components/Layout/ILayoutProps";
import * as routes from "../lib/routes";

export const pageList: ILayoutProps[] = [
  {
    name: "Главная страница",
    route: routes.getMainRoute(),
  },
  {
    name: "Создать новый товаров",
    route: routes.getNewProductRoute(),
  },
  {
    name: "Список товаров",
    route: routes.getProductsListRoute(),
  },
];
