import { z } from "zod";

export const envClientSchema = z.object({
  VITE_SERVER_TRPC_URL: z.string().trim().min(1),
});

// eslint-disable-next-line no-restricted-syntax
export const env = envClientSchema.parse(import.meta.env);
