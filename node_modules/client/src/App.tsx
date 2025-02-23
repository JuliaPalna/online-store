// import { ProductsListPage } from "./pages";
import { TrpcProvider } from "./lib/trpc";
import { ProductsListPage } from "./pages";

function App() {
  return (
    // <>
    //   <ProductsListPage />
    // </>

    <TrpcProvider>
      <ProductsListPage />
    </TrpcProvider>
  );
}

export default App;
