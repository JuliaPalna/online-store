import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { TrpcProvider, UserContextProvider } from "./provider/index.ts";

const root: HTMLElement | null = document.getElementById("root");

if (root === null) {
  throw Error("Not found");
}

createRoot(root).render(
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
