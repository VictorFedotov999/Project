/*
  Warnings:

  - Added the required column `surname` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "surname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "surname" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Indigenous" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Indigenous_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypesProduct" (
    "id" SERIAL NOT NULL,
    "Type" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "TypesProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SizesProduct" (
    "id" SERIAL NOT NULL,
    "Size" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "SizesProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Indigenous" ADD CONSTRAINT "Indigenous_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypesProduct" ADD CONSTRAINT "TypesProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SizesProduct" ADD CONSTRAINT "SizesProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
