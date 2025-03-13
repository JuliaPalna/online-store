import { z } from "zod";

export const getProductShema = z.object({
  name: z.string().optional(),
  limit: z.number().min(1).max(100).default(10),
  cursor: z.coerce.number().optional(),
  search: z.string().optional(),
});
