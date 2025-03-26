export const productLisByCategorytRouteParams = { category: ":category" };
export type TProductLisByCategorytRouteParams =
  typeof productLisByCategorytRouteParams;

export function getProductListByCategoryRoute({
  category,
}: TProductLisByCategorytRouteParams): string {
  return `/catalog/${category}`;
}
