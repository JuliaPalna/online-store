import { TProductRouteParams } from "../getProductInfoRoute";

export function getUpdateProductRoute({
  name,
  category,
}: TProductRouteParams): string {
  return `/catalog/${category}/${name}/update`;
}
