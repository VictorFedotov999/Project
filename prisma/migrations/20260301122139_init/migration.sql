-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "userBasketProductId" INTEGER;

-- CreateTable
CREATE TABLE "UserBasketProduct" (
    "id" SERIAL NOT NULL,
    "basketId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "sizeOptionId" INTEGER NOT NULL,
    "typeOptionId" INTEGER NOT NULL,

    CONSTRAINT "UserBasketProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserBasketProduct" ADD CONSTRAINT "UserBasketProduct_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "UserBasket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBasketProduct" ADD CONSTRAINT "UserBasketProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBasketProduct" ADD CONSTRAINT "UserBasketProduct_sizeOptionId_fkey" FOREIGN KEY ("sizeOptionId") REFERENCES "SizeOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBasketProduct" ADD CONSTRAINT "UserBasketProduct_typeOptionId_fkey" FOREIGN KEY ("typeOptionId") REFERENCES "TypeOption"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_userBasketProductId_fkey" FOREIGN KEY ("userBasketProductId") REFERENCES "UserBasketProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;
