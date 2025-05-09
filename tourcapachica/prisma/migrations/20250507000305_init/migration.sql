-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permisos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "permisos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles_permisos" (
    "id" SERIAL NOT NULL,
    "rol_id" INTEGER NOT NULL,
    "permiso_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "roles_permisos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "code_iso" VARCHAR(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subdivisions" (
    "id" SERIAL NOT NULL,
    "country_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subdivisions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personas" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellidos" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20),
    "direccion" TEXT,
    "foto_perfil_url" TEXT,
    "fecha_nacimiento" DATE,
    "subdivision_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "personas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "persona_id" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "recovery_token" VARCHAR(255),
    "recovery_token_expires_at" TIMESTAMP(3),
    "email_verification_token" VARCHAR(255),
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "esta_activo" BOOLEAN NOT NULL DEFAULT true,
    "ultimo_acceso" TIMESTAMP(3),
    "preferencias" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_roles" (
    "id" SERIAL NOT NULL,
    "rol_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emprendimientos" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "nombre" VARCHAR(200) NOT NULL,
    "descripcion" TEXT,
    "tipo" VARCHAR(50) NOT NULL,
    "direccion" TEXT,
    "coordenadas" TEXT,
    "contacto_telefono" VARCHAR(20),
    "contacto_email" VARCHAR(100),
    "sitio_web" VARCHAR(200),
    "redes_sociales" JSONB,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "fecha_aprobacion" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "emprendimientos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro_accesos" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "ip_address" VARCHAR(50) NOT NULL,
    "user_agent" TEXT NOT NULL,
    "tipo_evento" VARCHAR(50) NOT NULL,
    "detalles" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registro_accesos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens_invalidados" (
    "id" SERIAL NOT NULL,
    "token_hash" VARCHAR(64) NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "invalidado_en" TIMESTAMP(3) NOT NULL,
    "expira_en" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tokens_invalidados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turistas" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "turistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lugares_turisticos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(200) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "coordenadas" TEXT NOT NULL,
    "horario_apertura" TIME(6),
    "horario_cierre" TIME(6),
    "costo_entrada" DECIMAL(10,2),
    "recomendaciones" TEXT,
    "restricciones" TEXT,
    "es_destacado" BOOLEAN NOT NULL DEFAULT false,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'activo',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lugares_turisticos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicios_emprendedores" (
    "id" SERIAL NOT NULL,
    "servicios_id" INTEGER NOT NULL,
    "emprendimiento_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "servicios_emprendedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicios" (
    "id" SERIAL NOT NULL,
    "tipo_servicio_id" INTEGER NOT NULL,
    "nombre" VARCHAR(200) NOT NULL,
    "descripcion" TEXT,
    "precio_base" DECIMAL(10,2) NOT NULL,
    "moneda" VARCHAR(3) NOT NULL DEFAULT 'PEN',
    "estado" VARCHAR(20) NOT NULL DEFAULT 'activo',
    "detalles_servicio" JSONB NOT NULL DEFAULT '{}',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "servicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paquetes_turisticos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'activo',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emprendimiento_id" INTEGER NOT NULL,

    CONSTRAINT "paquetes_turisticos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicios_paquetes" (
    "id" SERIAL NOT NULL,
    "paqueteTuristicoId" INTEGER NOT NULL,
    "servicioId" INTEGER NOT NULL,
    "orden" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "servicios_paquetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disponibilidad_paquetes" (
    "id" SERIAL NOT NULL,
    "paquete_id" INTEGER NOT NULL,
    "fecha_inicio" DATE NOT NULL,
    "fecha_fin" DATE NOT NULL,
    "cupos_disponibles" INTEGER NOT NULL,
    "cupos_maximos" INTEGER NOT NULL,
    "precio_especial" DECIMAL(10,2),
    "notas" TEXT,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'activo',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "disponibilidad_paquetes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos_servicio" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "requiere_cupo" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tipos_servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicios_disponibilidad" (
    "id" SERIAL NOT NULL,
    "servicio_id" INTEGER NOT NULL,
    "fecha" DATE NOT NULL,
    "cupos_disponibles" INTEGER NOT NULL,
    "precio_especial" DECIMAL(10,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "servicios_disponibilidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resenas" (
    "id" SERIAL NOT NULL,
    "servicio_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "calificacion" INTEGER NOT NULL,
    "comentario" TEXT,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resenas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favoritos" (
    "id" SERIAL NOT NULL,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "emprendimiento_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favoritos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservas" (
    "id" SERIAL NOT NULL,
    "turista_id" INTEGER NOT NULL,
    "codigo_reserva" TEXT NOT NULL,
    "tipo_reserva" TEXT NOT NULL,
    "fecha_reserva" TIMESTAMP(3) NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "hora" VARCHAR(8),
    "fecha_fin" TIMESTAMP(3),
    "cantidad_personas" INTEGER NOT NULL DEFAULT 1,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "precio_total" DECIMAL(12,2) NOT NULL,
    "moneda" VARCHAR(3) NOT NULL DEFAULT 'PEN',
    "metodo_pago" VARCHAR(50),
    "datos_pago" JSONB,
    "notas" TEXT,
    "motivo_cancelacion" TEXT,
    "fecha_cancelacion" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itinerarios_reserva" (
    "id" SERIAL NOT NULL,
    "fecha" DATE NOT NULL,
    "hora" TIME(6),
    "tipo_evento" VARCHAR(100) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "notas" TEXT,
    "duracion" INTEGER,
    "reserva_id" INTEGER NOT NULL,
    "servicio_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "itinerarios_reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itinerario_lugares" (
    "id" SERIAL NOT NULL,
    "itinerrarios_reserva_id" INTEGER NOT NULL,
    "lugares_turisticos_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "itinerario_lugares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagos" (
    "id" SERIAL NOT NULL,
    "reserva_id" INTEGER NOT NULL,
    "monto_total" DECIMAL(12,2) NOT NULL,
    "moneda" VARCHAR(3) NOT NULL DEFAULT 'PEN',
    "estado" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "fecha_pago" TIMESTAMP(3),
    "datos_metodo_pago" JSONB,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pago_detalle" (
    "id" SERIAL NOT NULL,
    "pago_id" INTEGER NOT NULL,
    "tipo_pago_id" INTEGER NOT NULL,
    "concepto" VARCHAR(100) NOT NULL,
    "monto" DECIMAL(12,2) NOT NULL,
    "porcentaje_impuesto" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "descripcion" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pago_detalle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_pago" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" TEXT,
    "requiere_verificacion" BOOLEAN NOT NULL DEFAULT false,
    "comision_porcentaje" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tipo_pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comprobantes" (
    "id" SERIAL NOT NULL,
    "pago_id" INTEGER NOT NULL,
    "tipo_comprobante" VARCHAR(20) NOT NULL,
    "serie" VARCHAR(4) NOT NULL,
    "numero" INTEGER NOT NULL,
    "fecha_emision" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ruc_cliente" VARCHAR(11),
    "razon_social" VARCHAR(100),
    "direccion_cliente" TEXT,
    "subtotal" DECIMAL(12,2) NOT NULL,
    "igv" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "total" DECIMAL(12,2) NOT NULL,
    "moneda" VARCHAR(3) NOT NULL DEFAULT 'PEN',
    "estado" VARCHAR(20) NOT NULL DEFAULT 'emitido',
    "codigo_sunat" VARCHAR(100),
    "codigo_hash" VARCHAR(100),
    "xml_url" TEXT,
    "pdf_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comprobantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tours" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "guide_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imageables" (
    "id" SERIAL NOT NULL,
    "image_id" INTEGER NOT NULL,
    "imageable_id" INTEGER NOT NULL,
    "imageable_type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "imageables_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sliders" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'activo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sliders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TourToTurista" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TourToTurista_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_nombre_key" ON "roles"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "permisos_nombre_key" ON "permisos"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "roles_permisos_rol_id_permiso_id_key" ON "roles_permisos"("rol_id", "permiso_id");

-- CreateIndex
CREATE UNIQUE INDEX "countries_name_key" ON "countries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "countries_code_iso_key" ON "countries"("code_iso");

-- CreateIndex
CREATE UNIQUE INDEX "subdivisions_country_id_name_key" ON "subdivisions"("country_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_persona_id_key" ON "usuarios"("persona_id");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_roles_usuario_id_rol_id_key" ON "usuarios_roles"("usuario_id", "rol_id");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_invalidados_token_hash_key" ON "tokens_invalidados"("token_hash");

-- CreateIndex
CREATE UNIQUE INDEX "turistas_usuario_id_key" ON "turistas"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "lugares_turisticos_nombre_key" ON "lugares_turisticos"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "servicios_paquetes_paqueteTuristicoId_servicioId_key" ON "servicios_paquetes"("paqueteTuristicoId", "servicioId");

-- CreateIndex
CREATE UNIQUE INDEX "disponibilidad_paquetes_paquete_id_fecha_inicio_fecha_fin_key" ON "disponibilidad_paquetes"("paquete_id", "fecha_inicio", "fecha_fin");

-- CreateIndex
CREATE UNIQUE INDEX "tipos_servicio_nombre_key" ON "tipos_servicio"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "servicios_disponibilidad_servicio_id_fecha_key" ON "servicios_disponibilidad"("servicio_id", "fecha");

-- CreateIndex
CREATE UNIQUE INDEX "favoritos_emprendimiento_id_usuario_id_key" ON "favoritos"("emprendimiento_id", "usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "reservas_codigo_reserva_key" ON "reservas"("codigo_reserva");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_pago_nombre_key" ON "tipo_pago"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "comprobantes_pago_id_key" ON "comprobantes"("pago_id");

-- CreateIndex
CREATE UNIQUE INDEX "comprobantes_serie_numero_key" ON "comprobantes"("serie", "numero");

-- CreateIndex
CREATE INDEX "imageables_imageable_id_imageable_type_idx" ON "imageables"("imageable_id", "imageable_type");

-- CreateIndex
CREATE INDEX "_TourToTurista_B_index" ON "_TourToTurista"("B");

-- AddForeignKey
ALTER TABLE "roles_permisos" ADD CONSTRAINT "roles_permisos_permiso_id_fkey" FOREIGN KEY ("permiso_id") REFERENCES "permisos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permisos" ADD CONSTRAINT "roles_permisos_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subdivisions" ADD CONSTRAINT "subdivisions_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personas" ADD CONSTRAINT "personas_subdivision_id_fkey" FOREIGN KEY ("subdivision_id") REFERENCES "subdivisions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "personas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_roles" ADD CONSTRAINT "usuarios_roles_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_roles" ADD CONSTRAINT "usuarios_roles_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprendimientos" ADD CONSTRAINT "emprendimientos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registro_accesos" ADD CONSTRAINT "registro_accesos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tokens_invalidados" ADD CONSTRAINT "tokens_invalidados_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turistas" ADD CONSTRAINT "turistas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicios_emprendedores" ADD CONSTRAINT "servicios_emprendedores_emprendimiento_id_fkey" FOREIGN KEY ("emprendimiento_id") REFERENCES "emprendimientos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicios_emprendedores" ADD CONSTRAINT "servicios_emprendedores_servicios_id_fkey" FOREIGN KEY ("servicios_id") REFERENCES "servicios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicios" ADD CONSTRAINT "servicios_tipo_servicio_id_fkey" FOREIGN KEY ("tipo_servicio_id") REFERENCES "tipos_servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paquetes_turisticos" ADD CONSTRAINT "paquetes_turisticos_emprendimiento_id_fkey" FOREIGN KEY ("emprendimiento_id") REFERENCES "emprendimientos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicios_paquetes" ADD CONSTRAINT "servicios_paquetes_paqueteTuristicoId_fkey" FOREIGN KEY ("paqueteTuristicoId") REFERENCES "paquetes_turisticos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicios_paquetes" ADD CONSTRAINT "servicios_paquetes_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "servicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disponibilidad_paquetes" ADD CONSTRAINT "disponibilidad_paquetes_paquete_id_fkey" FOREIGN KEY ("paquete_id") REFERENCES "paquetes_turisticos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicios_disponibilidad" ADD CONSTRAINT "servicios_disponibilidad_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "servicios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "servicios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resenas" ADD CONSTRAINT "resenas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos" ADD CONSTRAINT "favoritos_emprendimiento_id_fkey" FOREIGN KEY ("emprendimiento_id") REFERENCES "emprendimientos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoritos" ADD CONSTRAINT "favoritos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_turista_id_fkey" FOREIGN KEY ("turista_id") REFERENCES "turistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itinerarios_reserva" ADD CONSTRAINT "itinerarios_reserva_reserva_id_fkey" FOREIGN KEY ("reserva_id") REFERENCES "reservas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itinerarios_reserva" ADD CONSTRAINT "itinerarios_reserva_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "servicios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itinerario_lugares" ADD CONSTRAINT "itinerario_lugares_itinerrarios_reserva_id_fkey" FOREIGN KEY ("itinerrarios_reserva_id") REFERENCES "itinerarios_reserva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itinerario_lugares" ADD CONSTRAINT "itinerario_lugares_lugares_turisticos_id_fkey" FOREIGN KEY ("lugares_turisticos_id") REFERENCES "lugares_turisticos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_reserva_id_fkey" FOREIGN KEY ("reserva_id") REFERENCES "reservas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pago_detalle" ADD CONSTRAINT "pago_detalle_pago_id_fkey" FOREIGN KEY ("pago_id") REFERENCES "pagos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pago_detalle" ADD CONSTRAINT "pago_detalle_tipo_pago_id_fkey" FOREIGN KEY ("tipo_pago_id") REFERENCES "tipo_pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comprobantes" ADD CONSTRAINT "comprobantes_pago_id_fkey" FOREIGN KEY ("pago_id") REFERENCES "pagos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tours" ADD CONSTRAINT "tours_guide_id_fkey" FOREIGN KEY ("guide_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageables" ADD CONSTRAINT "imageables_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TourToTurista" ADD CONSTRAINT "_TourToTurista_A_fkey" FOREIGN KEY ("A") REFERENCES "tours"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TourToTurista" ADD CONSTRAINT "_TourToTurista_B_fkey" FOREIGN KEY ("B") REFERENCES "turistas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
