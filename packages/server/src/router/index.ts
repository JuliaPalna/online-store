import { trpc } from "../api/trpc";
import { getProductTrpcRoute } from "./getProductTrpcRoute";
import { getProductsTrpcRoute } from "./getProductsTrpcRoute";
import { createProductTrpcRoute } from "./createProductTrpcRoute";
import { singInTrpcRoute } from "./singInTrpcRoute";
import { singUpTrpcRoute } from "./singUpTrpcRoute";
import { getAuthorizationUserRoute } from "./getAuthorizationUserRoute";

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  getProducts: getProductsTrpcRoute,
  getProduct: getProductTrpcRoute,
  createProduct: createProductTrpcRoute,
  singUp: singUpTrpcRoute,
  singIn: singInTrpcRoute,
  authorizationUser: getAuthorizationUserRoute,
});

export type TTrpcRouter = typeof trpcRouter;
