/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Admin` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserBasket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserBasket` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[USER_ID]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `USER_ID` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "id",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD COLUMN     "USER_ID" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "UserBasket" DROP CONSTRAINT "UserBasket_pkey",
DROP COLUMN "id",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "UserBasket_pkey" PRIMARY KEY ("ID");

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "CategoryProduct" (
    "ID" SERIAL NOT NULL,

    CONSTRAINT "CategoryProduct_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_USER_ID_key" ON "Product"("USER_ID");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_USER_ID_fkey" FOREIGN KEY ("USER_ID") REFERENCES "User"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
