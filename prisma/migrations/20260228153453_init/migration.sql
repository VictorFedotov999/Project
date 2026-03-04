/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `userBasketId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `SizeOption` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `TypeOption` table. All the data in the column will be lost.
  - Added the required column `image` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Made the column `price` on table `Ingredient` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userBasketId_fkey";

-- DropForeignKey
ALTER TABLE "SizeOption" DROP CONSTRAINT "SizeOption_productId_fkey";

-- DropForeignKey
ALTER TABLE "TypeOption" DROP CONSTRAINT "TypeOption_productId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "imageUrl",
DROP COLUMN "productId",
ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "price" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageUrl",
DROP COLUMN "userBasketId",
ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "rating" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SizeOption" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "TypeOption" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "UserBasket" ADD COLUMN     "basketCost" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "quantity" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "ProductItem" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "sizeId" INTEGER,
    "typeId" INTEGER,
    "ingredientId" INTEGER,
    "userBasketId" INTEGER,

    CONSTRAINT "ProductItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "SizeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_userBasketId_fkey" FOREIGN KEY ("userBasketId") REFERENCES "UserBasket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
