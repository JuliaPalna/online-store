import { Route, Routes } from "react-router-dom";
import { trpc } from "./api/trpc";
import {
  CatalogPage,
  MainPage,
  NewCategoryPage,
  NewProductPage,
  ProductInfoPage,
  ProductListPage,
  SingInPage,
  SingUpPage,
} from "./pages";
import * as routs from "./lib/routes";
import { Layout } from "./components";
import "./styles/global.scss";
import { SingOutPage } from "./pages/SingPage/SingOutPage";
import {
  pagesListAutorisationUser,
  pagesListInitial,
  pagesListNotAutorisationUser,
} from "./lib/pageList";

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

        <Route path={routs.getCatalogRoute()} element={<CatalogPage />} />

        <Route
          path={routs.getProductLisByCategorytRoute(
            routs.productLisByCategorytRouteParams,
          )}
          element={<ProductListPage />}
        />
        <Route
          path={routs.getProductInfoRoute(routs.productInfoRouteParams)}
          element={<ProductInfoPage />}
        />

        <Route path={routs.getNewProductRoute()} element={<NewProductPage />} />
        <Route
          path={routs.getNewCategoryRoute()}
          element={<NewCategoryPage />}
        />

        <Route path={routs.singUpRoute()} element={<SingUpPage />} />
        <Route path={routs.singInRoute()} element={<SingInPage />} />
      </Route>
    </Routes>
  );
}

export default App;
