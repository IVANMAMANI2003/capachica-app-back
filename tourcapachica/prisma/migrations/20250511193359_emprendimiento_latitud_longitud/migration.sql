/*
  Warnings:

  - You are about to drop the column `coordenadas` on the `emprendimientos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "emprendimientos" DROP COLUMN "coordenadas",
ADD COLUMN     "latitud" DOUBLE PRECISION,
ADD COLUMN     "longitud" DOUBLE PRECISION;
