import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import {
  MainPage,
  NewProductPage,
  ProductInfoPage,
  ProductsListPage,
} from "./pages";
import * as routs from "./lib/routes";
import { Layout } from "./components";
import "./styles/global.scss";
import { pageList } from "./lib/pagesList";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
