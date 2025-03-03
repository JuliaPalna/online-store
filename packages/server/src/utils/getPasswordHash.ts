import crypto from "crypto";

export function getPasswordHash(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}
