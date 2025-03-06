import { z } from "zod";

export const setProductLikeShema = z.object({
  productId: z.string().nonempty().min(1),
  isLike: z.boolean(),
});

export type TSetProductLikeShema = z.infer<typeof setProductLikeShema>;
