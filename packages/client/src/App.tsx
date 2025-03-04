import { Route, Routes } from "react-router-dom";
import { trpc } from "./api/trpc";
import {
  MainPage,
  NewProductPage,
  ProductInfoPage,
  ProductsListPage,
  SingInPage,
  SingUpPage,
} from "./pages";
import * as routs from "./lib/routes";
import { Layout } from "./components";
import * as pages from "./lib/pagesList";
import "./styles/global.scss";
import { SingOutPage } from "./pages/SingOutPage";

function App() {
  const { data, isLoading, isFetching, isError } =
    trpc.authorizationUser.useQuery();

  let pageList = [...pages.initialPageList];

  if (isLoading || isFetching || isError) {
    return;
  }

  pageList = data.authorization
    ? [...pageList, ...pages.pageListAutorisationUser]
    : [...pageList, ...pages.pageListNotAutorisationUser];

  return (
    <Routes>
      <Route path={routs.singOutRoute()} element={<SingOutPage />} />

      <Route element={<Layout props={pageList} />}>
        <Route path={routs.getMainRoute()} element={<MainPage />} />
        <Route
          path={routs.getProductsListRoute()}
          element={<ProductsListPage />}
        />
        <Route
          path={routs.getProductInfoRoute(routs.productInfoRouteParams)}
          element={<ProductInfoPage />}
        />
        <Route path={routs.getNewProductRoute()} element={<NewProductPage />} />
        <Route path={routs.singUpRoute()} element={<SingUpPage />} />
        <Route path={routs.singInRoute()} element={<SingInPage />} />
      </Route>
    </Routes>
  );
}

export default App;
