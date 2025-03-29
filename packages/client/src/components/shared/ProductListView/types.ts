import { TProduct } from "../../../../../server/src/lib/schema";
import { TEventButton } from "../../../lib/types";

export interface IProductListViewProps {
  products: Omit<TProduct, "count" | "description">[];
  onClick: (event: TEventButton) => void;
}
