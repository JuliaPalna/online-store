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
