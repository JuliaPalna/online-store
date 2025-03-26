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
} from "./pages";
import { Layout } from "./components";
import "./styles/global.scss";
import { LikeProductPage } from "./pages/ProductPage/LikeProductPage";
import { CartPage } from "./pages/CartPage";
import { API_ROUTES } from "./api/routes";
import { getUpdateProductRoute } from "./api/routes/getUpdateProductRoute";
import {
  getProductInfoRoute,
  productRouteParams,
} from "./api/routes/getProductInfoRoute";
import {
  getProductListByCategoryRoute,
  productLisByCategorytRouteParams,
} from "./api/routes/getProductListByCategoryRoute";

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
          path={API_ROUTES.SEARCH__PRODUCT}
          element={<SearchProductListPage />}
        />
        <Route path={API_ROUTES.LIKE__PRODUCT} element={<LikeProductPage />} />
        <Route path={API_ROUTES.CART} element={<CartPage />} />

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
      </Route>
    </Routes>
  );
}

export default App;
