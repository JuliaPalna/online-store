import { trpc } from "../api/trpc";
import { getProductTrpcRoute } from "./getProductTrpcRoute";
import { getProductsTrpcRoute } from "./getProductsTrpcRoute";
import { createProductTrpcRoute } from "./createProductTrpcRoute";
import { singUpTrpcRoute } from "./singUpTrpcRoute/singUpTrpcRoute";
import { singInTrpcRoute } from "./singInTrpcRoute/singInTrpcRoute";

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  getProducts: getProductsTrpcRoute,
  getProduct: getProductTrpcRoute,
  createProduct: createProductTrpcRoute,
  singUp: singUpTrpcRoute,
  singIn: singInTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
