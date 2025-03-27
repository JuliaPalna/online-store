/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "serialNumber" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_serialNumber_key" ON "Order"("serialNumber");
