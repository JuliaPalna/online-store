import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TrpcProvider } from "./api/trpc.tsx";
import { BrowserRouter } from "react-router-dom";
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
