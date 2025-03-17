import { ReactElement } from "react";
import { type User } from "@prisma/client";

type TUser = Omit<User, "password" | "createAt" | "updateAt">;

export type TWrapPageCheckUserProps = {
  Page: ({ user }: { user: TUser }) => ReactElement;
};
