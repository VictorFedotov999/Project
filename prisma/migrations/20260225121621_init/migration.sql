/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `SizeOption` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `TypeOption` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `UserBasket` table. All the data in the column will be lost.
  - You are about to drop the `UserAuth` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SizeOption" DROP CONSTRAINT "SizeOption_productId_fkey";

-- DropForeignKey
ALTER TABLE "TypeOption" DROP CONSTRAINT "TypeOption_productId_fkey";

-- DropForeignKey
ALTER TABLE "UserAuth" DROP CONSTRAINT "UserAuth_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserBasket" DROP CONSTRAINT "UserBasket_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price";

-- AlterTable
ALTER TABLE "SizeOption" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "TypeOption" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "UserBasket" DROP COLUMN "productId",
ADD COLUMN     "productItemId" INTEGER;

-- DropTable
DROP TABLE "UserAuth";

-- CreateTable
CREATE TABLE "ProductItem" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "sizeId" INTEGER,
    "typeId" INTEGER,

    CONSTRAINT "ProductItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserBasket" ADD CONSTRAINT "UserBasket_productItemId_fkey" FOREIGN KEY ("productItemId") REFERENCES "ProductItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "SizeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;
