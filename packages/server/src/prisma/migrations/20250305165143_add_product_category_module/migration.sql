-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_fkey";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_fkey" FOREIGN KEY ("category") REFERENCES "ProductCategory"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
