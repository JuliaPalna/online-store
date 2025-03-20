import { z } from "zod";
import { zBooleanOptional, zStringOptional } from "../..";

export const getProductShema = z.object({
  name: zStringOptional,
  limit: z.number().min(1).max(100).default(10),
  cursor: z.coerce.number().optional(),
  search: zStringOptional,
  filterByLike: zBooleanOptional,
  filterByCart: zBooleanOptional,
});
