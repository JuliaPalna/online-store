import { z } from "zod";

export const updateGeneralProfileShema = z.object({
  email: z.string().min(3).email(),
  name: z.string(),
});

export type TUpdateGeneralProfileShema = z.infer<
  typeof updateGeneralProfileShema
>;
