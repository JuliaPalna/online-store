import { trpc } from "../lib";
import { getProductTrpcRoute } from "./getProductTrpcRoute";
import { getProductsTrpcRoute } from "./getProductsTrpcRoute";
import { createProductTrpcRoute } from "./createProductTrpcRoute";

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  getProducts: getProductsTrpcRoute,
  getProduct: getProductTrpcRoute,
  createProduct: createProductTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
