/*
  Warnings:

  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductCategory" ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
