import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { MainPage, ProductInfoPage, ProductsListPage } from "./pages";
import {
  getMainRoute,
  getProductInfoRoute,
  getProductsListRoute,
  productInfoRouteParams,
} from "./lib/routes";
import { Layout } from "./components";
import "./styles/global.scss";

function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getMainRoute()} element={<MainPage />} />
            <Route
              path={getProductsListRoute()}
              element={<ProductsListPage />}
            />
            <Route
              path={getProductInfoRoute(productInfoRouteParams)}
              element={<ProductInfoPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
