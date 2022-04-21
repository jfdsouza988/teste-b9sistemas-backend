/*
  Warnings:

  - You are about to drop the column `customerId` on the `purchase` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `purchase` table. All the data in the column will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `totalPrice` to the `purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "purchase" DROP CONSTRAINT "purchase_customerId_fkey";

-- DropForeignKey
ALTER TABLE "purchase" DROP CONSTRAINT "purchase_productId_fkey";

-- AlterTable
ALTER TABLE "purchase" DROP COLUMN "customerId",
DROP COLUMN "productId",
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "customer";

-- CreateTable
CREATE TABLE "_productsPurchase" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_productsPurchase_AB_unique" ON "_productsPurchase"("A", "B");

-- CreateIndex
CREATE INDEX "_productsPurchase_B_index" ON "_productsPurchase"("B");

-- AddForeignKey
ALTER TABLE "_productsPurchase" ADD FOREIGN KEY ("A") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsPurchase" ADD FOREIGN KEY ("B") REFERENCES "purchase"("id") ON DELETE CASCADE ON UPDATE CASCADE;
