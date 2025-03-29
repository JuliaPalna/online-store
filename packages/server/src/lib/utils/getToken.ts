import jwt from "jsonwebtoken";

export function getToken({
  value,
  key,
}: {
  value: string | object | Buffer<ArrayBufferLike>;
  key: string | undefined;
}): string {
  if(!key) {
    return "";
  }
  // eslint-disable-next-line import-x/no-named-as-default-member
  const token = jwt.sign(value, key);

  return token;
}
