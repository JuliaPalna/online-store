import crypto from "crypto";
import { env } from "../lib/env";

export function getPasswordHash(value: string): string {
  return crypto
    .createHash("sha256")
    .update(`${env.PASSWORD_SALT_AUTHORIZATION}${value}`)
    .digest("hex");
}
