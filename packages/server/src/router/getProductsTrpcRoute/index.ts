import _ from "lodash";
import { products, trpc } from "../../lib";

export const getProductsTrpcRoute = trpc.procedure.query(() => {
  return {
    products: products.map((product) =>
      _.pick(product, [
        "id",
        "name",
        "description",
        "image",
        "likes",
        "count",
        "balanceStatus",
      ]),
    ),
  };
});
