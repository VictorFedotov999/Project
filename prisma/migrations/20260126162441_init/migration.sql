/*
  Warnings:

  - You are about to drop the column `USER_ID` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[USER_ID]` on the table `UserBasket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `USER_ID` to the `UserBasket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_USER_ID_fkey";

-- DropIndex
DROP INDEX "Product_USER_ID_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "USER_ID";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "productID" INTEGER;

-- AlterTable
ALTER TABLE "UserBasket" ADD COLUMN     "USER_ID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserBasket_USER_ID_key" ON "UserBasket"("USER_ID");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Product"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBasket" ADD CONSTRAINT "UserBasket_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
