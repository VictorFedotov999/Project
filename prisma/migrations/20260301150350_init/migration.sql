/*
  Warnings:

  - You are about to drop the column `userBasketProductId` on the `Ingredient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_userBasketProductId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "userBasketProductId";

-- CreateTable
CREATE TABLE "_IngredientToUserBasketProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToUserBasketProduct_AB_unique" ON "_IngredientToUserBasketProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToUserBasketProduct_B_index" ON "_IngredientToUserBasketProduct"("B");

-- AddForeignKey
ALTER TABLE "_IngredientToUserBasketProduct" ADD CONSTRAINT "_IngredientToUserBasketProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToUserBasketProduct" ADD CONSTRAINT "_IngredientToUserBasketProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "UserBasketProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
