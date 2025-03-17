/*
  Warnings:

  - You are about to drop the column `orderId` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "updateAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "orderId",
ALTER COLUMN "updateAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "updateAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updateAt" DROP NOT NULL;

-- DropTable
DROP TABLE "Order";
