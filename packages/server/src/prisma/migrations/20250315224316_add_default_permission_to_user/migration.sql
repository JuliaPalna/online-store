-- AlterTable
ALTER TABLE "User" ALTER COLUMN "permissions" SET DEFAULT ARRAY['USER']::"UserPermission"[];
