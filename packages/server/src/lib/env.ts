import * as dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envServerShema = z.object({
  PORT: z.string().trim().min(1),
  DATABASE_URL: z.string().trim().min(1),
  JWT_SECRET_KEY_AUTHORIZATION: z.string().trim().min(4),
  PASSWORD_SALT_AUTHORIZATION: z.string().trim().min(4),
});

// eslint-disable-next-line n/no-process-env
export const env = envServerShema.parse(process.env);
