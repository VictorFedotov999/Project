/*
  Warnings:

  - You are about to drop the column `Size` on the `SizesProduct` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `TypesProduct` table. All the data in the column will be lost.
  - Added the required column `price` to the `SizesProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `SizesProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `TypesProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `TypesProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SizesProduct" DROP COLUMN "Size",
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "size" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TypesProduct" DROP COLUMN "Type",
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
