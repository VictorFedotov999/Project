/*
  Warnings:

  - You are about to drop the column `img` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `productItemId` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `productItemId` on the `UserBasket` table. All the data in the column will be lost.
  - You are about to drop the `ProductItem` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserBasket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageUrl` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_productItemId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_sizeId_fkey";

-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_typeId_fkey";

-- DropForeignKey
ALTER TABLE "UserBasket" DROP CONSTRAINT "UserBasket_productItemId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "img",
DROP COLUMN "productItemId",
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "productId" INTEGER,
ALTER COLUMN "price" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userBasketId" INTEGER,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SizeOption" ADD COLUMN     "productId" INTEGER;

-- AlterTable
ALTER TABLE "TypeOption" ADD COLUMN     "productId" INTEGER;

-- AlterTable
ALTER TABLE "UserBasket" DROP COLUMN "productItemId";

-- DropTable
DROP TABLE "ProductItem";

-- CreateIndex
CREATE UNIQUE INDEX "UserBasket_userId_key" ON "UserBasket"("userId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userBasketId_fkey" FOREIGN KEY ("userBasketId") REFERENCES "UserBasket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SizeOption" ADD CONSTRAINT "SizeOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeOption" ADD CONSTRAINT "TypeOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
