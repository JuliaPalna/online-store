import express from "express";
import cors from "cors";
import { applyTrpcToExpressApp } from "./api/trpc";
import { applyPassportToExpressApp } from "./api/passport";
import { trpcRouter } from "./api/router";
import { createAppContext, TAppContext } from "./context/AppContext/AppContext";
import { env } from "./lib/env";

(async () => {
  let appContext: TAppContext | null = null;

  try {
    appContext = createAppContext();
    const expressApp = express();
    expressApp.use(cors());

    applyPassportToExpressApp(expressApp, appContext);
    applyTrpcToExpressApp(expressApp, appContext, trpcRouter);

    expressApp.listen(env.PORT, () => {
      // eslint-disable-next-line no-console
      console.info(`Listening at http://localhost:${env.PORT}`);
    });
  } catch (error) {
    await appContext?.stop();
    throw Error(`${{ error }}`);
  }
})();
