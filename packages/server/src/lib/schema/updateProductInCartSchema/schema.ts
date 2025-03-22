import { z } from "zod";
import { zStringMin } from "..";

export const updateProductInCartSchema = z.object({
  name: zStringMin(3),
  typeButton: zStringMin(1).optional(),
});
