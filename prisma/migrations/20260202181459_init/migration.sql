-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "sortingId" INTEGER;

-- CreateTable
CREATE TABLE "Sorting" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Sorting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sorting_title_key" ON "Sorting"("title");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sortingId_fkey" FOREIGN KEY ("sortingId") REFERENCES "Sorting"("id") ON DELETE SET NULL ON UPDATE CASCADE;
