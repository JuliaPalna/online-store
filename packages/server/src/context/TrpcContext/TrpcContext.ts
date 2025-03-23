import { inferAsyncReturnType } from "@trpc/server";
import { TAppContext } from "../AppContext";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const getTrpcContext =
  (appContext: TAppContext) =>
  ({ req }: CreateNextContextOptions["req"]) => ({
    ...appContext,
    authorization: req.user || null,
  });

export type TTrpcContext = inferAsyncReturnType<
  ReturnType<typeof getTrpcContext>
>;
