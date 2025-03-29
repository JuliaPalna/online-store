import { Route, Routes } from "react-router-dom";
import {
  CatalogPage,
  MainPage,
  NewCategoryPage,
  NewProductPage,
  ProductInfoPage,
  ProductListPage,
  SingInPage,
  SingUpPage,
  SingOutPage,
  UpdateProductPage,
  NotFoundPage,
  UpdateProfilePage,
  SearchProductListPage,
  OrderPage,
  LikeProductPage,
  CartPage,
  OrderListPage,
} from "./pages";
import { Layout } from "./components";
import {
  API_ROUTES,
  getProductInfoRoute,
  getProductListByCategoryRoute,
  getUpdateProductRoute,
  productLisByCategorytRouteParams,
  productRouteParams,
} from "./api/routes";
import "./styles/global.scss";

function App() {
  return (
    <Routes>
      <Route path={API_ROUTES.SING_OUT} element={<SingOutPage />} />

      <Route element={<Layout />}>
        <Route path={API_ROUTES.MAIN} element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* category */}
        <Route path={API_ROUTES.CATALOGY} element={<CatalogPage />} />
        <Route path={API_ROUTES.NEW_CATEGORY} element={<NewCategoryPage />} />

        {/* product */}
        <Route
          path={getProductListByCategoryRoute(productLisByCategorytRouteParams)}
          element={<ProductListPage />}
        />
        <Route
          path={getProductInfoRoute(productRouteParams)}
          element={<ProductInfoPage />}
        />
        <Route
          path={API_ROUTES.SEARCH_PRODUCT}
          element={<SearchProductListPage />}
        />
        <Route path={API_ROUTES.LIKE_PRODUCT} element={<LikeProductPage />} />
        <Route
          path={getUpdateProductRoute(productRouteParams)}
          element={<UpdateProductPage />}
        />

        <Route path={API_ROUTES.NEW_PRODUCT} element={<NewProductPage />} />

        {/* user */}
        <Route
          path={API_ROUTES.UPDATE_PROFILE}
          element={<UpdateProfilePage />}
        />

        {/* authorization */}
        <Route path={API_ROUTES.SING_UP} element={<SingUpPage />} />
        <Route path={API_ROUTES.SING_IN} element={<SingInPage />} />

        {/* cart, order */}
        <Route path={API_ROUTES.CART} element={<CartPage />} />
        <Route path={API_ROUTES.ORDER} element={<OrderPage />} />
        <Route path={API_ROUTES.ORDER_ALL} element={<OrderListPage />} />
      </Route>
    </Routes>
  );
}

export default App;
