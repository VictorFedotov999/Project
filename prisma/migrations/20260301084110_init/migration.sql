/*
  Warnings:

  - You are about to drop the `_IngredientToProductItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductItemToSizeOption` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductItemToTypeOption` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_IngredientToProductItem" DROP CONSTRAINT "_IngredientToProductItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientToProductItem" DROP CONSTRAINT "_IngredientToProductItem_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductItemToSizeOption" DROP CONSTRAINT "_ProductItemToSizeOption_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductItemToSizeOption" DROP CONSTRAINT "_ProductItemToSizeOption_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductItemToTypeOption" DROP CONSTRAINT "_ProductItemToTypeOption_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductItemToTypeOption" DROP CONSTRAINT "_ProductItemToTypeOption_B_fkey";

-- AlterTable
ALTER TABLE "ProductItem" ADD COLUMN     "ingredientId" INTEGER,
ADD COLUMN     "sizeOptionId" INTEGER,
ADD COLUMN     "typeOptionId" INTEGER;

-- DropTable
DROP TABLE "_IngredientToProductItem";

-- DropTable
DROP TABLE "_ProductItemToSizeOption";

-- DropTable
DROP TABLE "_ProductItemToTypeOption";

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_sizeOptionId_fkey" FOREIGN KEY ("sizeOptionId") REFERENCES "SizeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_typeOptionId_fkey" FOREIGN KEY ("typeOptionId") REFERENCES "TypeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
