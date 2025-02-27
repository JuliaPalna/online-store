import { trpc } from "../lib";
import { getProductTrpcRoute } from "./getProductTrpcRoute";
import { getProductsTrpcRoute } from "./getProductsTrpcRoute";

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  getProducts: getProductsTrpcRoute,
  getProduct: getProductTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
