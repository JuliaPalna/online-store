import { z } from "zod";
import { zBoolean, zStringMin } from "../..";

export const setProductLikeShema = z.object({
  name: zStringMin(1),
  isLike: zBoolean,
});

export type TSetProductLikeShema = z.infer<typeof setProductLikeShema>;
