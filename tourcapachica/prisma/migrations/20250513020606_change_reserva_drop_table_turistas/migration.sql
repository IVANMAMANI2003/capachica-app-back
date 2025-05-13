/*
  Warnings:

  - You are about to drop the column `turista_id` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the `_TourToTurista` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `turistas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `usuario_id` to the `reservas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_TourToTurista" DROP CONSTRAINT "_TourToTurista_A_fkey";

-- DropForeignKey
ALTER TABLE "_TourToTurista" DROP CONSTRAINT "_TourToTurista_B_fkey";

-- DropForeignKey
ALTER TABLE "reservas" DROP CONSTRAINT "reservas_turista_id_fkey";

-- DropForeignKey
ALTER TABLE "turistas" DROP CONSTRAINT "turistas_usuario_id_fkey";

-- AlterTable
ALTER TABLE "reservas" DROP COLUMN "turista_id",
ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_TourToTurista";

-- DropTable
DROP TABLE "turistas";

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
