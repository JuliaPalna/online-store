import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { type Express } from "express";
import { TrpcRouter } from "../router";
import { TAppContext } from "../context/AppContext/AppContext";

export const trpc = initTRPC.context<TAppContext>().create();

export const applyTrpcToExpressApp = (
  expressApp: Express,
  appContext: TAppContext,
  trpcRouter: TrpcRouter,
) => {
  expressApp.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
      createContext: () => appContext,
    }),
  );
};
