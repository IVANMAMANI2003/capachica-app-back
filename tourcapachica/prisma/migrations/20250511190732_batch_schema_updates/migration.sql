/*
  Warnings:

  - You are about to drop the column `itinerrarios_reserva_id` on the `itinerario_lugares` table. All the data in the column will be lost.
  - You are about to drop the column `coordenadas` on the `lugares_turisticos` table. All the data in the column will be lost.
  - You are about to alter the column `precio` on the `paquetes_turisticos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to drop the column `end_date` on the `tours` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `tours` table. All the data in the column will be lost.
  - You are about to drop the `favoritos` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[transactionId]` on the table `pagos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[servicio_id,fechaInicio,fechaFin]` on the table `servicios_disponibilidad` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itinerarios_reserva_id` to the `itinerario_lugares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentGateway` to the `pagos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `pagos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_fin` to the `tours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_inicio` to the `tours` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "favoritos" DROP CONSTRAINT "favoritos_emprendimiento_id_fkey";

-- DropForeignKey
ALTER TABLE "favoritos" DROP CONSTRAINT "favoritos_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "itinerario_lugares" DROP CONSTRAINT "itinerario_lugares_itinerrarios_reserva_id_fkey";

-- DropForeignKey
ALTER TABLE "itinerarios_reserva" DROP CONSTRAINT "itinerarios_reserva_reserva_id_fkey";

-- DropForeignKey
ALTER TABLE "resenas" DROP CONSTRAINT "resenas_servicio_id_fkey";

-- DropForeignKey
ALTER TABLE "resenas" DROP CONSTRAINT "resenas_usuario_id_fkey";

-- DropIndex
DROP INDEX "servicios_disponibilidad_servicio_id_fecha_key";

-- AlterTable
ALTER TABLE "comprobantes" ADD COLUMN     "qr_code_url" TEXT,
ADD COLUMN     "token_sunat" VARCHAR(255),
ALTER COLUMN "fecha_emision" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "emprendimientos" ALTER COLUMN "fecha_aprobacion" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "itinerario_lugares" DROP COLUMN "itinerrarios_reserva_id",
ADD COLUMN     "itinerarios_reserva_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "lugares_turisticos" DROP COLUMN "coordenadas",
ADD COLUMN     "latitud" DOUBLE PRECISION,
ADD COLUMN     "longitud" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "pagos" ADD COLUMN     "paymentGateway" VARCHAR(50) NOT NULL,
ADD COLUMN     "transactionId" VARCHAR(100) NOT NULL,
ALTER COLUMN "fecha_pago" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "paquetes_turisticos" ALTER COLUMN "precio" DROP NOT NULL,
ALTER COLUMN "precio" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "resenas" ALTER COLUMN "usuario_id" DROP NOT NULL,
ALTER COLUMN "estado" SET DEFAULT 'visible';

-- AlterTable
ALTER TABLE "servicios" ADD COLUMN     "latitud" DOUBLE PRECISION,
ADD COLUMN     "longitud" DOUBLE PRECISION,
ALTER COLUMN "nombre" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "servicios_disponibilidad" ALTER COLUMN "fechaInicio" DROP NOT NULL;

-- AlterTable
ALTER TABLE "servicios_paquetes" ALTER COLUMN "orden" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "tours" DROP COLUMN "end_date",
DROP COLUMN "start_date",
ADD COLUMN     "fecha_fin" DATE NOT NULL,
ADD COLUMN     "fecha_inicio" DATE NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "email_verified" DROP NOT NULL,
ALTER COLUMN "esta_activo" DROP NOT NULL,
ALTER COLUMN "preferencias" DROP NOT NULL;

-- DropTable
DROP TABLE "favoritos";

-- CreateTable
CREATE TABLE "favoritos_emprendimientos" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "emprendimiento_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favoritos_emprendimientos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favoritos_lugares_turisticos" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "lugar_turistico_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favoritos_lugares_turisticos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favoritos_paquetes_turisticos" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "paquete_turistico_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favoritos_paquetes_turisticos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favoritos_servicios" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "servicio_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favoritos_servicios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "favoritos_emprendimientos_usuario_id_emprendimiento_id_key" ON "favoritos_emprendimientos"("usuario_id", "emprendimiento_id");

-- CreateIndex
CREATE UNIQUE INDEX "favoritos_lugares_turisticos_usuario_id_lugar_turistico_id_key" ON "favoritos_lugares_turisticos"("usuario_id", "lugar_turistico_id");

-- CreateIndex
CREATE UNIQUE INDEX "favoritos_paquetes_turisticos_usuario_id_paquete_turistico__key" ON "favoritos_paquetes_turisticos"("usuario_id", "paquete_turistico_id");

-- CreateIndex
CREATE UNIQUE INDEX "favoritos_servicios_usuario_id_servicio_id_key" ON "favoritos_servicios"("usuario_id", "servicio_id");

-- CreateIndex
CREATE UNIQUE INDEX "pagos_transactionId_key" ON "pagos"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "servicios_disponibilidad_servicio_id_fechaInicio_fechaFin_key" ON "servicios_disponibilidad"("servicio_id", "fechaInicio", "fechaFin");

-- AddForeignKey
ALTER TABLE "favoritos_emprendimientos" ADD CONSTRAINT "favoritos_emprendimientos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos_emprendimientos" ADD CONSTRAINT "favoritos_emprendimientos_emprendimiento_id_fkey" FOREIGN KEY ("emprendimiento_id") REFERENCES "emprendimientos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos_lugares_turisticos" ADD CONSTRAINT "favoritos_lugares_turisticos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos_lugares_turisticos" ADD CONSTRAINT "favoritos_lugares_turisticos_lugar_turistico_id_fkey" FOREIGN KEY ("lugar_turistico_id") REFERENCES "lugares_turisticos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos_paquetes_turisticos" ADD CONSTRAINT "favoritos_paquetes_turisticos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos_paquetes_turisticos" ADD CONSTRAINT "favoritos_paquetes_turisticos_paquete_turistico_id_fkey" FOREIGN KEY ("paquete_turistico_id") REFERENCES "paquetes_turisticos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "servicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos_servicios" ADD CONSTRAINT "favoritos_servicios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos_servicios" ADD CONSTRAINT "favoritos_servicios_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "servicios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itinerarios_reserva" ADD CONSTRAINT "itinerarios_reserva_reserva_id_fkey" FOREIGN KEY ("reserva_id") REFERENCES "reservas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itinerario_lugares" ADD CONSTRAINT "itinerario_lugares_itinerarios_reserva_id_fkey" FOREIGN KEY ("itinerarios_reserva_id") REFERENCES "itinerarios_reserva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
