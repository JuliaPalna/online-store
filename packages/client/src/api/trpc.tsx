import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import Cookies from "js-cookie";
import { createTRPCReact } from "@trpc/react-query";
import { TTrpcRouter } from "../../../server/src/api/router";
import { env } from "../lib/env";

export const trpc = createTRPCReact<TTrpcRouter>();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: env.VITE_SERVER_TRPC_URL,
      headers: () => {
        const token = Cookies.get("token");
        return {
          ...(token && { authorization: `Bearer ${token}` }),
        };
      },
    }),
  ],
});
