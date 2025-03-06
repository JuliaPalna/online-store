import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TrpcProvider } from "./provider/trpcProvider/index.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrpcProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TrpcProvider>
  </StrictMode>,
);
