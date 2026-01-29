/*
  Warnings:

  - You are about to drop the column `productID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `USER_ID` on the `UserBasket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_productID_fkey";

-- DropForeignKey
ALTER TABLE "UserBasket" DROP CONSTRAINT "UserBasket_USER_ID_fkey";

-- DropIndex
DROP INDEX "UserBasket_USER_ID_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "productID";

-- AlterTable
ALTER TABLE "UserBasket" DROP COLUMN "USER_ID";
