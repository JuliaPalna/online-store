import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./api/trpc";
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
import { pageList } from "./lib/pagesList";
import "./styles/global.scss";

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
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
            <Route
              path={routs.getNewProductRoute()}
              element={<NewProductPage />}
            />
            <Route path={routs.singUpRoute()} element={<SingUpPage />} />
            <Route path={routs.singInRoute()} element={<SingInPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
