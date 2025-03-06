/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `ProductCategory` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ProductCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId,categoryId]` on the table `ProductCategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropIndex
DROP INDEX "ProductCategory_name_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryId",
DROP COLUMN "likes";

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "createAt",
DROP COLUMN "name",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "productId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductLike" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProductLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductLike_productId_userId_key" ON "ProductLike"("productId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategory_productId_categoryId_key" ON "ProductCategory"("productId", "categoryId");

-- AddForeignKey
ALTER TABLE "ProductLike" ADD CONSTRAINT "ProductLike_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLike" ADD CONSTRAINT "ProductLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
