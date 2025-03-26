import type { User } from "@prisma/client";

type isUser = Pick<User, "permissions" | "id"> | null;

export const hasAdminPermission = (user: isUser): boolean => {
  return user?.permissions.includes("ADMIN_ALL") || false;
};
