import { z } from "zod";

export const envClientShema = z.object({
  VITE_SERVER_TRPC_URL: z.string().trim().min(1),
});

// eslint-disable-next-line no-restricted-syntax
export const env = envClientShema.parse(import.meta.env);
