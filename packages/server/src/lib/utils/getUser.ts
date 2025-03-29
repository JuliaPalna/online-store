import { User } from "@prisma/client";
import _ from "lodash";

export const getUser = (
  user: User | null
): Pick<User, "name" | "id" | "email" | "permissions"> | null => {
  return user && _.pick(user, ["id", "email", "name", "permissions"]);
};
