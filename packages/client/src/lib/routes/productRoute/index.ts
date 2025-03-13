export function getCatalogRoute(): string {
  return `/catalog`;
}

export const productLisByCategorytRouteParams = { name: ":name" };
export type TProductLisByCategorytRouteParams =
  typeof productLisByCategorytRouteParams;

export function getProductListByCategoryRoute({
  name,
}: TProductLisByCategorytRouteParams): string {
  return `/catalog/${name}`;
}

export const productRouteParams = {
  id: ":id",
  category: ":category",
};

export type TProductRouteParams = typeof productRouteParams;

export function getProductInfoRoute({
  id,
  category,
}: TProductRouteParams): string {
  return `/catalog/${category}/${id}`;
}

export function updateProductRoute({
  id,
  category,
}: TProductRouteParams): string {
  return `/catalog/${category}/${id}/update`;
}

export function getNewProductRoute(): string {
  return "/newproduct";
}

export function searchProductRoute(): string {
  return "/search";
}
