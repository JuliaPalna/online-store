-- CreateEnum
CREATE TYPE "UserPermission" AS ENUM ('ADMIN_ALL');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "permissions" "UserPermission"[];
