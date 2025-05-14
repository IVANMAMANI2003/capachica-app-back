/*
  Warnings:

  - You are about to drop the column `duracion` on the `itinerarios_reserva` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `itinerarios_reserva` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `itinerarios_reserva` table. All the data in the column will be lost.
  - You are about to drop the column `notas` on the `itinerarios_reserva` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `reservas` table. All the data in the column will be lost.
  - Added the required column `fechaFinActividad` to the `itinerarios_reserva` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaInicioActividad` to the `itinerarios_reserva` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lugarEncuentro` to the `itinerarios_reserva` table without a default value. This is not possible if the table is not empty.
  - Made the column `servicio_id` on table `itinerarios_reserva` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "itinerarios_reserva" DROP CONSTRAINT "itinerarios_reserva_servicio_id_fkey";

-- AlterTable
ALTER TABLE "itinerarios_reserva" DROP COLUMN "duracion",
DROP COLUMN "fecha",
DROP COLUMN "hora",
DROP COLUMN "notas",
ADD COLUMN     "fechaFinActividad" DATE NOT NULL,
ADD COLUMN     "fechaInicioActividad" DATE NOT NULL,
ADD COLUMN     "hora_fin" TIME,
ADD COLUMN     "hora_inicio" TIME,
ADD COLUMN     "lugarEncuentro" TEXT NOT NULL,
ADD COLUMN     "observaciones" TEXT,
ALTER COLUMN "descripcion" DROP NOT NULL,
ALTER COLUMN "servicio_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "reservas" DROP COLUMN "hora";

-- AddForeignKey
ALTER TABLE "itinerarios_reserva" ADD CONSTRAINT "itinerarios_reserva_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "servicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
