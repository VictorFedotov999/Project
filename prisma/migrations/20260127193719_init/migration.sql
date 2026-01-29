-- AlterTable
ALTER TABLE "BasketItem" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "BasketItem_id_seq";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Category_id_seq";

-- AlterTable
ALTER TABLE "Indigenous" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Indigenous_id_seq";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Product_id_seq";

-- AlterTable
ALTER TABLE "SizeOption" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "SizeOption_id_seq";

-- AlterTable
ALTER TABLE "TypeOption" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "TypeOption_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "UserBasket" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "UserBasket_id_seq";
