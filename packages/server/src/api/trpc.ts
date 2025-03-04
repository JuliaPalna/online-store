import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { type Express } from "express";
import { TTrpcRouter } from "../router";
import { TAppContext } from "../context/AppContext/AppContext";
import { getTrpcContext, TTrpcContext } from "../context";

export const trpc = initTRPC.context<TTrpcContext>().create();

export const applyTrpcToExpressApp = (
  expressApp: Express,
  appContext: TAppContext,
  trpcRouter: TTrpcRouter,
) => {
  expressApp.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: trpcRouter,
      createContext: getTrpcContext(appContext),
    }),
  );
};
