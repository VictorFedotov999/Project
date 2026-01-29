/*
  Warnings:

  - You are about to drop the column `quantity` on the `BasketItem` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "BasketItem_basketId_productId_key";

-- AlterTable
ALTER TABLE "BasketItem" DROP COLUMN "quantity";
