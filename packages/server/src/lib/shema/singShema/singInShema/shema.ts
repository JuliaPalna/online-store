import { z } from "zod";

export const singInShema = z.object({
  email: z.string().min(3).email(),
  password: z.string().min(4),
});

export type TSingInShema = z.infer<typeof singInShema>;
