import { z } from "zod";

export const updateProfileShema = z.object({
  email: z.string().min(3).email(),
  name: z.string(),
});

export type TUpdateProfileShema = z.infer<typeof updateProfileShema>;
