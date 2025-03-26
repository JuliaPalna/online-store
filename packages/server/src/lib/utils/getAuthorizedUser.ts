import { User } from "@prisma/client";
import { TTrpcContext } from "../../context";

export function getAuthorizedUser({ ctx }: { ctx: TTrpcContext }): User {
  const authorizedUser = getAuthorizedUser({ ctx });

  if (!authorizedUser) {
    throw Error("UNAUTHORIZED");
  }

  return authorizedUser;
}
