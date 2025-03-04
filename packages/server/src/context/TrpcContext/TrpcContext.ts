import { inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { TAppContext } from "../AppContext";
import { TExpressRequest } from "./types";

export const getTrpcContext =
  (appContext: TAppContext) =>
  ({ req }: trpcExpress.CreateExpressContextOptions) => ({
    ...appContext,
    authorization: (req as TExpressRequest).user || null,
  });

export type TTrpcContext = inferAsyncReturnType<
  ReturnType<typeof getTrpcContext>
>;
