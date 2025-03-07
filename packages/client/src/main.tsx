import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { TrpcProvider, UserContextProvider } from "./provider/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrpcProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </TrpcProvider>
  </StrictMode>,
);
