-- Rename column 'fecha' to 'fechaInicio'
ALTER TABLE "servicios_disponibilidad" RENAME COLUMN "fecha" TO "fechaInicio";

-- Add new column 'fechaFin'
ALTER TABLE "servicios_disponibilidad" ADD COLUMN "fechaFin" DATE;