import { User } from "@prisma/client";
import _ from "lodash";

export const getUser = (user: User | null) => {
  return user && _.pick(user, ["id", "email", "name", "permissions"]);
};
