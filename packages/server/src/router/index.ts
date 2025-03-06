import { trpc } from "../api/trpc";
import { getProductTrpcRoute } from "./product/getProductTrpcRoute";
import { getProductListTrpcRoute } from "./product/getProductListTrpcRoute";
import { createProductTrpcRoute } from "./product/createProductTrpcRoute";
import { singInTrpcRoute } from "./authorization/singInTrpcRoute";
import { singUpTrpcRoute } from "./authorization/singUpTrpcRoute";
import { getAuthorizationUserTrpcRoute } from "./authorization/getAuthorizationUserTrpcRoute";
import { createCategoryTrpcRote } from "./category/createCategoryTrpcRote";
import { getCategoryTrpcRoute } from "./category/getCategoryTrpcRoute";
import { setProductLikeTrpcRoute } from "./product/setProductLikeTrpcRoute";
import { getProductListByCategoryTrpcRoute } from "./product/getProductListByCategoryTrpcRoute";

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  getProductList: getProductListTrpcRoute,
  getProduct: getProductTrpcRoute,
  createProduct: createProductTrpcRoute,
  singUp: singUpTrpcRoute,
  singIn: singInTrpcRoute,
  authorizationUser: getAuthorizationUserTrpcRoute,
  createCategory: createCategoryTrpcRote,
  getCategory: getCategoryTrpcRoute,
  setProductLike: setProductLikeTrpcRoute,
  getProductListByCategory: getProductListByCategoryTrpcRoute,
});

export type TTrpcRouter = typeof trpcRouter;
