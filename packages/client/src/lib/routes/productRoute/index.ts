export function getCatalogRoute(): string {
  return `/catalog`;
}

export const productLisByCategorytRouteParams = { name: ":name" };
export type TProductLisByCategorytRouteParams =
  typeof productLisByCategorytRouteParams;

export function getProductLisByCategorytRoute({
  name,
}: TProductLisByCategorytRouteParams): string {
  return `/catalog/${name}`;
}

export const productInfoRouteParams = {
  id: ":id",
  category: ":category",
};

export type TProductInfoRouteParams = typeof productInfoRouteParams;

export function getProductInfoRoute({
  id,
  category,
}: TProductInfoRouteParams): string {
  return `/catalog/${category}/${id}`;
}
