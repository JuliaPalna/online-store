import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import Cookies from "js-cookie";
import { createTRPCReact } from "@trpc/react-query";
import { TTrpcRouter } from "../../../server/src/router";
import { env } from "../lib/env";

export const trpc = createTRPCReact<TTrpcRouter>();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const trpcClient = trpc.createClient({
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

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
