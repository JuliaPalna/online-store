import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envShema = z.object({
  PORT: z.string().trim().min(1),
  DATABASE_URL: z.string().trim().min(1),
  JWT_SECRET_KEY_AUTHORIZATION: z.string().trim().min(4),
});

// eslint-disable-next-line n/no-process-env
export const env = envShema.parse(process.env);
