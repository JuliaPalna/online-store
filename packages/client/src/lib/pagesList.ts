import { ILayoutProps } from "../components/Layout/ILayoutProps";
import * as routes from "../lib/routes";

export const initialPageList: ILayoutProps[] = [
  {
    name: "Главная страница",
    route: routes.getMainRoute(),
  },
  {
    name: "Создать новый товаров",
    route: routes.getNewProductRoute(),
  },
  {
    name: "Создать новую категорию",
    route: routes.getNewCategoryRoute(),
  },
  {
    name: "Список товаров",
    route: routes.getProductsListRoute(),
  },
];

export const pageListAutorisationUser = [
  {
    name: "Выход",
    route: routes.singOutRoute(),
  },
];

export const pageListNotAutorisationUser = [
  {
    name: "Вход",
    route: routes.singInRoute(),
  },
  {
    name: "Регистрация",
    route: routes.singUpRoute(),
  },
];
