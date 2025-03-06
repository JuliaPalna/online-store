import { trpc } from "../api/trpc";
import { getProductTrpcRoute } from "./product/getProductTrpcRoute";
import { getProductsTrpcRoute } from "./product/getProductsTrpcRoute";
import { createProductTrpcRoute } from "./product/createProductTrpcRoute";
import { singInTrpcRoute } from "./singInTrpcRoute";
import { singUpTrpcRoute } from "./singUpTrpcRoute";
import { getAuthorizationUserRoute } from "./getAuthorizationUserRoute";
import { createCategoryTrpcRote } from "./createCategoryTrpcRote";
import { getCategoryTrpcRoute } from "./getCategoryTrpcRoute";
import { setProductLikeTrpcRoute } from "./product/setProductLikeTrpcRoute";

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  getProducts: getProductsTrpcRoute,
  getProduct: getProductTrpcRoute,
  createProduct: createProductTrpcRoute,
  singUp: singUpTrpcRoute,
  singIn: singInTrpcRoute,
  authorizationUser: getAuthorizationUserRoute,
  createCategory: createCategoryTrpcRote,
  getCategory: getCategoryTrpcRoute,
  setProductLike: setProductLikeTrpcRoute,
});

export type TTrpcRouter = typeof trpcRouter;
