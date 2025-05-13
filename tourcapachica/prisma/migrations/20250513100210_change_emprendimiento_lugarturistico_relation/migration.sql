/*
  Warnings:

  - You are about to drop the `itinerario_lugares` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "itinerario_lugares" DROP CONSTRAINT "itinerario_lugares_itinerarios_reserva_id_fkey";

-- DropForeignKey
ALTER TABLE "itinerario_lugares" DROP CONSTRAINT "itinerario_lugares_lugares_turisticos_id_fkey";

-- AlterTable
ALTER TABLE "emprendimientos" ADD COLUMN     "lugarTuristicoId" INTEGER;

-- DropTable
DROP TABLE "itinerario_lugares";

-- AddForeignKey
ALTER TABLE "emprendimientos" ADD CONSTRAINT "emprendimientos_lugarTuristicoId_fkey" FOREIGN KEY ("lugarTuristicoId") REFERENCES "lugares_turisticos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
