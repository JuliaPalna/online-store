export function getMainRoute(): string {
  return "/";
}

export function getProductsListRoute(): string {
  return "/products";
}

export const productInfoRouteParams = { id: ":id" };
export type TProductInfoRouteParams = typeof productInfoRouteParams;

export function getProductInfoRoute({ id }: TProductInfoRouteParams): string {
  return `/products/${id}`;
}

export function getNewProductRoute(): string {
  return "/products/new";
}

export function singUpRoute(): string {
  return "/products/singup";
}

export function singInRoute(): string {
  return "/products/singin";
}

export function singOutRoute(): string {
  return "/products/singout";
}

export function getNewCategoryRoute(): string {
  return "/products/newcategory";
}
