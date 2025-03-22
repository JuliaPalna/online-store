import { z } from "zod";
import { zEmailRequired, zStringMin } from "..";

export const updateGeneralProfileSchema = z.object({
  email: zEmailRequired,
  name: zStringMin(3),
});

export type TUpdateGeneralProfileShema = z.infer<
  typeof updateGeneralProfileSchema
>;
