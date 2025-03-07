import { Route, Routes } from "react-router-dom";
import { trpc } from "./api/trpc";
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
} from "./pages";
import {
  pagesListAutorisationUser,
  pagesListInitial,
  pagesListNotAutorisationUser,
} from "./lib/pageList";
import { Layout } from "./components";
import "./styles/global.scss";

function App() {
  const { data, isLoading, isFetching, isError } =
    trpc.authorizationUser.useQuery();

  let pageList = [...pagesListInitial];

  if (isLoading || isFetching || isError) {
    return;
  }

  pageList = data.authorization
    ? [...pageList, ...pagesListAutorisationUser]
    : [...pageList, ...pagesListNotAutorisationUser];

  return (
    <Routes>
      <Route path={routs.singOutRoute()} element={<SingOutPage />} />

      <Route element={<Layout props={pageList} />}>
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

        {/* authorization */}
        <Route path={routs.singUpRoute()} element={<SingUpPage />} />
        <Route path={routs.singInRoute()} element={<SingInPage />} />
      </Route>
    </Routes>
  );
}

export default App;
