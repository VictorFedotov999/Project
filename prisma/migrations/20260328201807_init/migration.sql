/*
  Warnings:

  - You are about to drop the column `price` on the `UserBasketProduct` table. All the data in the column will be lost.
  - You are about to drop the `Filter` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "UserBasketProduct" DROP COLUMN "price";

-- DropTable
DROP TABLE "Filter";
