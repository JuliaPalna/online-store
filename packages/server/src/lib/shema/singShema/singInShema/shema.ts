import { z } from "zod";
import { zEmailRequired, zPassword } from "../..";

export const singInShema = z.object({
  email: zEmailRequired,
  password: zPassword,
});

export type TSingInShema = z.infer<typeof singInShema>;
