-- AlterTable
ALTER TABLE "servicios_disponibilidad" ADD COLUMN     "cupos_maximos" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "estado" VARCHAR(20) NOT NULL DEFAULT 'activo',
ADD COLUMN     "notas" TEXT;
