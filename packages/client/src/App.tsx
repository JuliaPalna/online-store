import { Route, Routes } from "react-router-dom";
import * as routs from "./lib/routes";
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
} from "./pages";
import { Layout } from "./components";
import "./styles/global.scss";

function App() {
  return (
    <Routes>
      <Route path={routs.singOutRoute()} element={<SingOutPage />} />

      <Route element={<Layout />}>
        <Route path={routs.getMainRoute()} element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* category */}
        <Route path={routs.getCatalogRoute()} element={<CatalogPage />} />

        <Route
          path={routs.getNewCategoryRoute()}
          element={<NewCategoryPage />}
        />

        {/* product */}
        <Route
          path={routs.getProductLisByCategorytRoute(
            routs.productLisByCategorytRouteParams,
          )}
          element={<ProductListPage />}
        />
        <Route
          path={routs.getProductInfoRoute(routs.productRouteParams)}
          element={<ProductInfoPage />}
        />

        <Route
          path={routs.updateProductRoute(routs.productRouteParams)}
          element={<UpdateProductPage />}
        />

        <Route path={routs.getNewProductRoute()} element={<NewProductPage />} />

        {/* user */}
        <Route
          path={routs.updateProfileRoute()}
          element={<UpdateProfilePage />}
        />

        {/* authorization */}
        <Route path={routs.singUpRoute()} element={<SingUpPage />} />
        <Route path={routs.singInRoute()} element={<SingInPage />} />
      </Route>
    </Routes>
  );
}

export default App;
