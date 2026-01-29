/*
  Warnings:

  - You are about to drop the `SizesProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TypesProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Indigenous" DROP CONSTRAINT "Indigenous_productId_fkey";

-- DropForeignKey
ALTER TABLE "SizesProduct" DROP CONSTRAINT "SizesProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "TypesProduct" DROP CONSTRAINT "TypesProduct_productId_fkey";

-- AlterTable
ALTER TABLE "Indigenous" ALTER COLUMN "productId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;

-- DropTable
DROP TABLE "SizesProduct";

-- DropTable
DROP TABLE "TypesProduct";

-- CreateTable
CREATE TABLE "TypeOption" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "price" INTEGER,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "TypeOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SizeOption" (
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL,
    "price" INTEGER,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "SizeOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Indigenous" ADD CONSTRAINT "Indigenous_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeOption" ADD CONSTRAINT "TypeOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SizeOption" ADD CONSTRAINT "SizeOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
