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
