import { ReactElement } from "react";
import { type User } from "@prisma/client";

type TUser = Omit<User, "password" | "createAt">;

export type TWrapPageCheckUserProps = {
  Page: ({ user }: { user: TUser }) => ReactElement;
};
