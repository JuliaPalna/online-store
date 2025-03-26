import { PrismaClient } from "@prisma/client";

export const createAppContext = () => {
  const prisma = new PrismaClient();

  return {
    prisma,
    stop: async () => {
      await prisma.$disconnect();
    },
  };
};

export type TAppContext = ReturnType<typeof createAppContext>;
