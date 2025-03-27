/*
  Warnings:

  - Added the required column `info` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "info" JSONB NOT NULL;
