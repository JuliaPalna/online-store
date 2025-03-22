import { inferAsyncReturnType } from "@trpc/server";
// import * as trpcExpress from "@trpc/server/adapters/express";
import { TAppContext } from "../AppContext";
// import { Prisma, User } from "@prisma/client";
// import { TExpressRequest } from "./types";
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

export const getTrpcContext =
  (appContext: TAppContext) =>
  ({ req }: CreateNextContextOptions["req"]) => ({

    ...appContext,
    authorization: (req).user || null,
  });

export type TTrpcContext = inferAsyncReturnType<
  ReturnType<typeof getTrpcContext>
>;
