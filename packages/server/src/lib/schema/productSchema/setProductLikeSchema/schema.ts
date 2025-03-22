import { z } from "zod";
import { zBoolean, zStringMin } from "../..";

export const setProductLikeSchema = z.object({
  name: zStringMin(1),
  isLike: zBoolean,
});

export type TSetProductLikeSchema = z.infer<typeof setProductLikeSchema>;
