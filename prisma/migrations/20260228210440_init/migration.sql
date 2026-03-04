/*
  Warnings:

  - You are about to drop the column `ingredientId` on the `ProductItem` table. All the data in the column will be lost.
  - You are about to drop the column `sizeId` on the `ProductItem` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `ProductItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_sizeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_typeId_fkey";

-- AlterTable
ALTER TABLE "ProductItem" DROP COLUMN "ingredientId",
DROP COLUMN "sizeId",
DROP COLUMN "typeId";

-- CreateTable
CREATE TABLE "_ProductItemToSizeOption" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductItemToTypeOption" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IngredientToProductItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductItemToSizeOption_AB_unique" ON "_ProductItemToSizeOption"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductItemToSizeOption_B_index" ON "_ProductItemToSizeOption"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductItemToTypeOption_AB_unique" ON "_ProductItemToTypeOption"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductItemToTypeOption_B_index" ON "_ProductItemToTypeOption"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToProductItem_AB_unique" ON "_IngredientToProductItem"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToProductItem_B_index" ON "_IngredientToProductItem"("B");

-- AddForeignKey
ALTER TABLE "_ProductItemToSizeOption" ADD CONSTRAINT "_ProductItemToSizeOption_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductItemToSizeOption" ADD CONSTRAINT "_ProductItemToSizeOption_B_fkey" FOREIGN KEY ("B") REFERENCES "SizeOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductItemToTypeOption" ADD CONSTRAINT "_ProductItemToTypeOption_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductItemToTypeOption" ADD CONSTRAINT "_ProductItemToTypeOption_B_fkey" FOREIGN KEY ("B") REFERENCES "TypeOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToProductItem" ADD CONSTRAINT "_IngredientToProductItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToProductItem" ADD CONSTRAINT "_IngredientToProductItem_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
