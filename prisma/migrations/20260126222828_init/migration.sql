/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserBasket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userBasketId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserBasket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userBasketId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserBasket" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserBasket_userId_key" ON "UserBasket"("userId");

-- AddForeignKey
ALTER TABLE "UserBasket" ADD CONSTRAINT "UserBasket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userBasketId_fkey" FOREIGN KEY ("userBasketId") REFERENCES "UserBasket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
