import express from "express";
import cors from "cors";
import { applyTrpcToExpressApp } from "./lib";
import { trpcRouter } from "./router";
import { createAppContext, TAppContext } from "./context/AppContext/AppContext";

(async () => {
  let appContext: TAppContext | null = null;
  try {
    appContext = createAppContext();
    const expressApp = express();
    expressApp.use(cors());

    applyTrpcToExpressApp(expressApp, appContext, trpcRouter);

    expressApp.listen(3000, () => {
      // console.info("Listening at http://localhost:3000");
    });
  } catch (error) {
    await appContext?.stop();
    throw Error(`${{ error }}`);
  }
})();
