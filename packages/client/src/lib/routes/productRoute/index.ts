export function getCatalogRoute(): string {
  return `/catalog`;
}

export const productLisByCategorytRouteParams = { category: ":category" };
export type TProductLisByCategorytRouteParams =
  typeof productLisByCategorytRouteParams;

export function getProductListByCategoryRoute({
  category,
}: TProductLisByCategorytRouteParams): string {
  return `/catalog/${category}`;
}

export const productRouteParams = {
  name: ":name",
  category: ":category",
};

export type TProductRouteParams = typeof productRouteParams;

export function getProductInfoRoute({
  name,
  category,
}: TProductRouteParams): string {
  return `/catalog/${category}/${name}`;
}

export function updateProductRoute({
  name,
  category,
}: TProductRouteParams): string {
  return `/catalog/${category}/${name}/update`;
}

export function getNewProductRoute(): string {
  return "/newproduct";
}

export function searchProductRoute(): string {
  return "/search";
}

export function getLikeProductRoute(): string {
  return "/like";
}

export function getCartUserRoute(): string {
  return "/cart";
}
