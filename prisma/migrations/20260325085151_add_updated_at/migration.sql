-- DropForeignKey
ALTER TABLE "UserBasketProduct" DROP CONSTRAINT "UserBasketProduct_basketId_fkey";

-- AlterTable
ALTER TABLE "UserBasketProduct" ALTER COLUMN "basketId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserBasketProduct" ADD CONSTRAINT "UserBasketProduct_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "UserBasket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
