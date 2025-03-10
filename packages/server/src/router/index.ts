import { trpc } from "../api/trpc";
import { getProductTrpcRoute } from "./product/getProductTrpcRoute";
import { getProductListTrpcRoute } from "./product/getProductListTrpcRoute";
import { createProductTrpcRoute } from "./product/createProductTrpcRoute";
import { singInTrpcRoute } from "./authorization/singInTrpcRoute";
import { singUpTrpcRoute } from "./authorization/singUpTrpcRoute";
import { getAuthorizationUserTrpcRoute } from "./authorization/getAuthorizationUserTrpcRoute";
import { createCategoryTrpcRote } from "./category/createCategoryTrpcRote";
import { getCategoryListTrpcRoute } from "./category/getCategoryListTrpcRoute";
import { setProductLikeTrpcRoute } from "./product/setProductLikeTrpcRoute";
import { getProductListByCategoryTrpcRoute } from "./product/getProductListByCategoryTrpcRoute";
import { updateProductTrpcRoute } from "./product/updateProductTrpcRoute";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { updateGeneralProfileTrpcRoute } from "./user/updateGeneralProfileTrpcRoute";
import { updatePasswordProfileTrpcRoute } from "./user/updatePasswordProfileTrpcRoute";

export const trpcRouter = trpc.router({
  //get-запрос
  //http://localhost:3000/trpc/getProducts
  // product
  getProductList: getProductListTrpcRoute,
  getProductListByCategory: getProductListByCategoryTrpcRoute,
  getProduct: getProductTrpcRoute,
  createProduct: createProductTrpcRoute,
  updateProduct: updateProductTrpcRoute,
  setProductLike: setProductLikeTrpcRoute,

  // authorization
  singUp: singUpTrpcRoute,
  singIn: singInTrpcRoute,
  authorizationUser: getAuthorizationUserTrpcRoute,

  // category
  createCategory: createCategoryTrpcRote,
  getCategoryList: getCategoryListTrpcRoute,

  //user
  updateGeneralProfile: updateGeneralProfileTrpcRoute,
  updatePasswordProfile: updatePasswordProfileTrpcRoute,
});

export type TTrpcRouter = typeof trpcRouter;

export type TrpcRouterInput = inferRouterInputs<TTrpcRouter>;
export type TrpcRouterOutput = inferRouterOutputs<TTrpcRouter>;
