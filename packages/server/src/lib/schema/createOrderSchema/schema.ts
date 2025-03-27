import { z } from "zod";
import { zEmailRequired, zEnvNonemptyTrimmed, zStringMin } from "..";

export const createOrderSchema = z.object({
  name: zEnvNonemptyTrimmed,
  secondname: zEnvNonemptyTrimmed,
  email: zEmailRequired,
  tel: z.string().trim(),
  address: zStringMin(5),
});

export type TCreateOrderSchema = z.infer<typeof createOrderSchema>;
