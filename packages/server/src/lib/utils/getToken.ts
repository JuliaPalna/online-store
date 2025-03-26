import jwt from "jsonwebtoken";

export function getToken({
  value,
  key,
}: {
  value: string | object | Buffer<ArrayBufferLike>;
  key: string;
}): string {
  const token = jwt.sign(value, key);

  return token;
}
