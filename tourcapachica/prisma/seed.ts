import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface CountryData {
  name: string;
  codeIso: string;
  subdivisions: string[];
}

async function main() {
  try {
    // Limpiar la base de datos
    await prisma.$transaction([
      prisma.pagoDetalle.deleteMany(),
      prisma.comprobante.deleteMany(),
      prisma.pago.deleteMany(),
      prisma.itinerarioReserva.deleteMany(),
      prisma.reserva.deleteMany(),
      prisma.resena.deleteMany(),
      prisma.favoritoServicio.deleteMany(),
      prisma.favoritoPaqueteTuristico.deleteMany(),
      prisma.favoritoLugarTuristico.deleteMany(),
      prisma.favoritoEmprendimiento.deleteMany(),
      prisma.servicioDisponibilidad.deleteMany(),
      prisma.disponibilidadPaquete.deleteMany(),
      prisma.servicioPaquete.deleteMany(),
      prisma.servicioEmprendedor.deleteMany(),
      prisma.servicio.deleteMany(),
      prisma.paqueteTuristico.deleteMany(),
      prisma.emprendimiento.deleteMany(),
      prisma.lugarTuristico.deleteMany(),
      prisma.tour.deleteMany(),
      prisma.imageable.deleteMany(),
      prisma.image.deleteMany(),
      prisma.slider.deleteMany(),
      prisma.tipoPago.deleteMany(),
      prisma.tipoServicio.deleteMany(),
      prisma.registroAcceso.deleteMany(),
      prisma.tokenInvalidado.deleteMany(),
      prisma.usuariosRoles.deleteMany(),
      prisma.rolesPermisos.deleteMany(),
      prisma.usuario.deleteMany(),
      prisma.persona.deleteMany(),
      prisma.subdivision.deleteMany(),
      prisma.country.deleteMany(),
      prisma.role.deleteMany(),
      prisma.permiso.deleteMany(),
    ]);

    // Reiniciar todas las secuencias a 1
    await prisma.$executeRawUnsafe(`
      DO $$ 
      DECLARE 
          r RECORD;
      BEGIN
          FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
              EXECUTE 'TRUNCATE TABLE ' || quote_ident(r.tablename) || ' RESTART IDENTITY CASCADE';
          END LOOP;
      END $$;
    `);

    // 1. Crear roles
    const superAdminRole = await prisma.role.create({
      data: {
        nombre: 'SuperAdmin',
        descripcion: 'Administrador con acceso completo al sistema',
      },
    });

    const emprendedorRole = await prisma.role.create({
      data: {
        nombre: 'Emprendedor',
        descripcion: 'Usuario que gestiona sus emprendimientos y servicios',
      },
    });

    const userRole = await prisma.role.create({
      data: {
        nombre: 'User',
        descripcion: 'Usuario regular del sistema',
      },
    });

    const guiaRole = await prisma.role.create({
      data: {
        nombre: 'Guía',
        descripcion: 'Guía turístico profesional',
      },
    });

    const adminRole = await prisma.role.create({
      data: {
        nombre: 'Admin',
        descripcion: 'Administrador del sistema',
      },
    });

    // 2. Crear permisos
    await prisma.permiso.createMany({
      data: [
        { nombre: 'gestion_completa', descripcion: 'Acceso completo a todas las funcionalidades' },
        { nombre: 'gestion_emprendimientos', descripcion: 'Gestionar emprendimientos' },
        { nombre: 'gestion_servicios', descripcion: 'Gestionar servicios' },
        { nombre: 'gestion_paquetes', descripcion: 'Gestionar paquetes turísticos' },
        { nombre: 'gestion_reservas', descripcion: 'Gestionar reservas' },
        { nombre: 'gestion_pagos', descripcion: 'Gestionar pagos' },
        { nombre: 'ver_emprendimientos', descripcion: 'Ver emprendimientos' },
        { nombre: 'ver_servicios', descripcion: 'Ver servicios' },
        { nombre: 'ver_paquetes', descripcion: 'Ver paquetes turísticos' },
        { nombre: 'hacer_reservas', descripcion: 'Hacer reservas' },
        { nombre: 'gestion_usuarios', descripcion: 'Gestionar usuarios' },
        { nombre: 'gestion_roles', descripcion: 'Gestionar roles y permisos' },
        { nombre: 'gestion_lugares', descripcion: 'Gestionar lugares turísticos' },
        { nombre: 'gestion_guias', descripcion: 'Gestionar guías turísticos' },
        { nombre: 'gestion_comprobantes', descripcion: 'Gestionar comprobantes' },
      ],
    });

    // Obtener los permisos creados
    const permisosList = await prisma.permiso.findMany();
    const permisosMap = Object.fromEntries(permisosList.map(p => [p.nombre, p.id]));

    // 3. Asignar permisos a roles
    await prisma.rolesPermisos.createMany({
      data: [
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_completa'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_emprendimientos'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_servicios'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_paquetes'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_reservas'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_pagos'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['ver_emprendimientos'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['ver_servicios'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['ver_paquetes'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['hacer_reservas'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_usuarios'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_roles'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_lugares'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_guias'] },
        { rolId: superAdminRole.id, permisoId: permisosMap['gestion_comprobantes'] },
      ],
    });

    


    // 4. Crear países y subdivisiones
    // Read the JSON file for countries and subdivisions
    const jsonPath = path.join(__dirname, 'countries_subdivisions.json');
    const jsonData = fs.readFileSync(jsonPath, 'utf-8');
    const countries: CountryData[] = JSON.parse(jsonData);

    console.log('Starting to seed countries and subdivisions...');

    // Crear países y subdivisiones
    for (const countryData of countries) {
      // Create country
      const country = await prisma.country.create({
        data: {
          name: countryData.name,
          codeIso: countryData.codeIso,
        },
      });

      console.log(`Created country: ${country.name}`);

      // Create subdivisions for the country
      for (const subdivisionName of countryData.subdivisions) {
        await prisma.subdivision.create({
          data: {
            name: subdivisionName,
            countryId: country.id,
          },
        });
        console.log(`Created subdivision: ${subdivisionName} for ${country.name}`);
      }
    }

    // 5. Obtener subdivisiones necesarias
    const puno = await prisma.subdivision.findFirst({
      where: { name: 'Puno' },
    });

    const lima = await prisma.subdivision.findFirst({
      where: { name: 'Lima' },
    });

    if (!puno || !lima) {
      throw new Error('No se pudieron encontrar las subdivisiones necesarias');
    }

    // Generar hash para los usuarios de prueba
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Crear personas de prueba
    const personas = await Promise.all([
      prisma.persona.create({
        data: {
          nombre: 'Admin',
          apellidos: 'Sistema',
          telefono: '999999999',
          direccion: 'Av. Principal 123',
          subdivisionId: lima.id,
          fotoPerfilUrl: 'https://example.com/images/admin-profile.jpg',
          fechaNacimiento: new Date('1990-01-01'),
        },
      }),
      prisma.persona.create({
        data: {
          nombre: 'Juan',
          apellidos: 'Emprendedor',
          telefono: '987654321',
          direccion: 'Av. Comercial 456',
          subdivisionId: puno.id,
          fotoPerfilUrl: 'https://example.com/images/emprendedor-profile.jpg',
          fechaNacimiento: new Date('1992-05-15'),
        },
      }),
      prisma.persona.create({
        data: {
          nombre: 'Carlos',
          apellidos: 'Usuario',
          telefono: '987123456',
          direccion: 'Av. Usuario 789',
          subdivisionId: lima.id,
          fotoPerfilUrl: 'https://example.com/images/user-profile.jpg',
          fechaNacimiento: new Date('1995-08-20'),
        },
      }),
      prisma.persona.create({
        data: {
          nombre: 'María',
          apellidos: 'Emprendedora',
          telefono: '987654322',
          direccion: 'Av. Turismo 101',
          subdivisionId: puno.id,
          fotoPerfilUrl: 'https://example.com/images/emprendedora-profile.jpg',
          fechaNacimiento: new Date('1988-12-10'),
        },
      }),
      prisma.persona.create({
        data: {
          nombre: 'Pedro',
          apellidos: 'Guía',
          telefono: '987654323',
          direccion: 'Av. Guía 202',
          subdivisionId: puno.id,
          fotoPerfilUrl: 'https://example.com/images/guia-profile.jpg',
          fechaNacimiento: new Date('1991-03-25'),
        },
      }),
    ]);

    // Crear usuarios asociados a las personas
    const usuarios = await Promise.all([
      prisma.usuario.create({
        data: {
          email: 'admin@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[0].id,
          emailVerified: true,
          estaActivo: true,
          preferencias: { tema: 'claro', notificaciones: true },
        },
      }),
      prisma.usuario.create({
        data: {
          email: 'emprendedor@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[1].id,
          emailVerified: true,
          estaActivo: true,
          preferencias: { tema: 'claro', notificaciones: true },
        },
      }),
      prisma.usuario.create({
        data: {
          email: 'usuario@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[2].id,
          emailVerified: true,
          estaActivo: true,
          preferencias: { tema: 'claro', notificaciones: true },
        },
      }),
      prisma.usuario.create({
        data: {
          email: 'emprendedora@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[3].id,
          emailVerified: true,
          estaActivo: true,
          preferencias: { tema: 'claro', notificaciones: true },
        },
      }),
      prisma.usuario.create({
        data: {
          email: 'guia@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[4].id,
          emailVerified: true,
          estaActivo: true,
          preferencias: { tema: 'claro', notificaciones: true },
        },
      }),
    ]);

    // Asignar roles a los usuarios
    await prisma.usuariosRoles.createMany({
      data: [
        { usuarioId: usuarios[0].id, rolId: superAdminRole.id }, // Admin
        { usuarioId: usuarios[1].id, rolId: emprendedorRole.id }, // Juan
        { usuarioId: usuarios[2].id, rolId: userRole.id },        // Carlos
        { usuarioId: usuarios[3].id, rolId: emprendedorRole.id }, // María
        { usuarioId: usuarios[4].id, rolId: guiaRole.id },        // Pedro
      ]
    });

    // 6. Crear tipos de servicio
    const tiposServicio = await Promise.all([
      prisma.tipoServicio.create({
        data: {
          nombre: 'Transporte',
          descripcion: 'Servicios de transporte terrestre y lacustre',
          requiereCupo: true,
        },
      }),
      prisma.tipoServicio.create({
        data: {
          nombre: 'Alojamiento',
          descripcion: 'Servicios de hospedaje y alojamiento',
          requiereCupo: true,
        },
      }),
      prisma.tipoServicio.create({
        data: {
          nombre: 'Guía Turístico',
          descripcion: 'Servicios de guiado turístico',
          requiereCupo: true,
        },
      }),
      prisma.tipoServicio.create({
        data: {
          nombre: 'Alimentación',
          descripcion: 'Servicios de alimentación y restaurantes',
          requiereCupo: true,
        },
      }),
      prisma.tipoServicio.create({
        data: {
          nombre: 'Actividades',
          descripcion: 'Servicios de actividades recreativas',
          requiereCupo: true,
        },
      }),
    ]);

    // 7. Crear tipos de pago
    const tiposPago = await Promise.all([
      prisma.tipoPago.create({
        data: {
          nombre: 'Efectivo',
          descripcion: 'Pago en efectivo',
          requiereVerificacion: false,
          comisionPorcentaje: 0,
          activo: true,
        },
      }),
      prisma.tipoPago.create({
        data: {
          nombre: 'Tarjeta de Crédito',
          descripcion: 'Pago con tarjeta de crédito',
          requiereVerificacion: true,
          comisionPorcentaje: 3.5,
          activo: true,
        },
      }),
      prisma.tipoPago.create({
        data: {
          nombre: 'Transferencia Bancaria',
          descripcion: 'Transferencia bancaria',
          requiereVerificacion: true,
          comisionPorcentaje: 0,
          activo: true,
        },
      }),
      prisma.tipoPago.create({
        data: {
          nombre: 'Yape',
          descripcion: 'Pago mediante Yape',
          requiereVerificacion: true,
          comisionPorcentaje: 0,
          activo: true,
        },
      }),
      prisma.tipoPago.create({
        data: {
          nombre: 'Plin',
          descripcion: 'Pago mediante Plin',
          requiereVerificacion: true,
          comisionPorcentaje: 0,
          activo: true,
        },
      }),
    ]);

    // 8. Crear lugares turísticos
    const lugaresTuristicos = await Promise.all([
      prisma.lugarTuristico.create({
        data: {
          nombre: 'Islas Uros',
          descripcion: 'Islas flotantes hechas de totora en el Lago Titicaca',
          direccion: 'Lago Titicaca, Puno',
          latitud: -15.8200,
          longitud: -70.0200,
          horarioApertura: new Date('2024-01-01T08:00:00'),
          horarioCierre: new Date('2024-01-01T17:00:00'),
          costoEntrada: 10.00,
          recomendaciones: 'Llevar protector solar y agua',
          restricciones: 'No fumar en las islas',
          esDestacado: true,
          estado: 'activo',
        },
      }),
      prisma.lugarTuristico.create({
        data: {
          nombre: 'Taquile',
          descripcion: 'Isla conocida por su cultura textil y tradiciones',
          direccion: 'Lago Titicaca, Puno',
          latitud: -15.7700,
          longitud: -69.6800,
          horarioApertura: new Date('2024-01-01T07:00:00'),
          horarioCierre: new Date('2024-01-01T18:00:00'),
          costoEntrada: 15.00,
          recomendaciones: 'Llevar ropa abrigada',
          restricciones: 'Respetar las costumbres locales',
          esDestacado: true,
          estado: 'activo',
        },
      }),
      prisma.lugarTuristico.create({
        data: {
          nombre: 'Capachica',
          descripcion: 'Península con hermosas playas y miradores naturales',
          direccion: 'Península de Capachica, Puno',
          latitud: -15.6000,
          longitud: -69.9000,
          horarioApertura: new Date('2024-01-01T06:00:00'),
          horarioCierre: new Date('2024-01-01T20:00:00'),
          costoEntrada: 5.00,
          recomendaciones: 'Llevar traje de baño',
          restricciones: 'No contaminar las playas',
          esDestacado: true,
          estado: 'activo',
        },
      }),
      prisma.lugarTuristico.create({
        data: {
          nombre: 'Sillustani',
          descripcion: 'Sitio arqueológico con chullpas pre-incas',
          direccion: 'Carretera Puno-Juliaca, Puno',
          latitud: -15.7200,
          longitud: -70.1500,
          horarioApertura: new Date('2024-01-01T08:00:00'),
          horarioCierre: new Date('2024-01-01T16:00:00'),
          costoEntrada: 20.00,
          recomendaciones: 'Llevar cámara fotográfica',
          restricciones: 'No tocar las estructuras',
          esDestacado: false,
          estado: 'activo',
        },
      }),
      prisma.lugarTuristico.create({
        data: {
          nombre: 'Lago Titicaca',
          descripcion: 'El lago navegable más alto del mundo',
          direccion: 'Puno',
          latitud: -15.8000,
          longitud: -69.4000,
          horarioApertura: new Date('2024-01-01T06:00:00'),
          horarioCierre: new Date('2024-01-01T19:00:00'),
          costoEntrada: 0.00,
          recomendaciones: 'Llevar ropa abrigada',
          restricciones: 'No contaminar el lago',
          esDestacado: true,
          estado: 'activo',
        },
      }),
    ]);

    // 9. Crear emprendimientos
    const emprendimientos = await Promise.all([
      prisma.emprendimiento.create({
        data: {
          nombre: 'Hotel Titicaca',
          descripcion: 'Hotel con vista al lago Titicaca',
          tipo: 'TURISMO',
          direccion: 'Av. Lago Titicaca 123',
          latitud: -15.8200,
          longitud: -70.0200,
          contactoTelefono: '987654321',
          contactoEmail: 'info@hoteltiticaca.com',
          sitioWeb: 'www.hoteltiticaca.com',
          redesSociales: { facebook: 'hoteltiticaca', instagram: 'hoteltiticaca' },
          estado: 'aprobado',
          fechaAprobacion: new Date(),
          usuarioId: usuarios[1].id,
          lugarTuristicoId: lugaresTuristicos[0].id,
        },
      }),
      prisma.emprendimiento.create({
        data: {
          nombre: 'Restaurante Taquile',
          descripcion: 'Restaurante con comida tradicional',
          tipo: 'GASTRONOMIA',
          direccion: 'Av. Taquile 456',
          latitud: -15.7700,
          longitud: -69.6800,
          contactoTelefono: '987654322',
          contactoEmail: 'info@restaurantetaquile.com',
          sitioWeb: 'www.restaurantetaquile.com',
          redesSociales: { facebook: 'restaurantetaquile', instagram: 'restaurantetaquile' },
          estado: 'aprobado',
          fechaAprobacion: new Date(),
          usuarioId: usuarios[3].id,
          lugarTuristicoId: lugaresTuristicos[1].id,
        },
      }),
      prisma.emprendimiento.create({
        data: {
          nombre: 'Agencia de Viajes Capachica',
          descripcion: 'Agencia de viajes y tours',
          tipo: 'TURISMO',
          direccion: 'Av. Capachica 789',
          latitud: -15.6000,
          longitud: -69.9000,
          contactoTelefono: '987654323',
          contactoEmail: 'info@agenciacapachica.com',
          sitioWeb: 'www.agenciacapachica.com',
          redesSociales: { facebook: 'agenciacapachica', instagram: 'agenciacapachica' },
          estado: 'aprobado',
          fechaAprobacion: new Date(),
          usuarioId: usuarios[1].id,
          lugarTuristicoId: lugaresTuristicos[2].id,
        },
      }),
      prisma.emprendimiento.create({
        data: {
          nombre: 'Hostal Sillustani',
          descripcion: 'Hostal cerca de las chullpas',
          tipo: 'TURISMO',
          direccion: 'Av. Sillustani 101',
          latitud: -15.7200,
          longitud: -70.1500,
          contactoTelefono: '987654324',
          contactoEmail: 'info@hostalsillustani.com',
          sitioWeb: 'www.hostalsillustani.com',
          redesSociales: { facebook: 'hostalsillustani', instagram: 'hostalsillustani' },
          estado: 'aprobado',
          fechaAprobacion: new Date(),
          usuarioId: usuarios[3].id,
          lugarTuristicoId: lugaresTuristicos[3].id,
        },
      }),
      prisma.emprendimiento.create({
        data: {
          nombre: 'Tour Operador Titicaca',
          descripcion: 'Operador de tours en el lago',
          tipo: 'TURISMO',
          direccion: 'Av. Titicaca 202',
          latitud: -15.8000,
          longitud: -69.4000,
          contactoTelefono: '987654325',
          contactoEmail: 'info@touroperador.com',
          sitioWeb: 'www.touroperador.com',
          redesSociales: { facebook: 'touroperador', instagram: 'touroperador' },
          estado: 'aprobado',
          fechaAprobacion: new Date(),
          usuarioId: usuarios[1].id,
          lugarTuristicoId: lugaresTuristicos[4].id,
        },
      }),
    ]);

    // 10. Crear servicios
    const servicios = await Promise.all([
      prisma.servicio.create({
        data: {
          tipoServicioId: tiposServicio[0].id,
          nombre: 'Transporte a Islas Uros',
          descripcion: 'Transporte en bote a las islas flotantes',
          latitud: -15.8200,
          longitud: -70.0200,
          precioBase: 50.00,
          moneda: 'PEN',
          estado: 'activo',
          detallesServicio: {
            duracion: '1 hora',
            capacidad: 8,
            tipoBote: 'Motorizado',
          },
        },
      }),
      prisma.servicio.create({
        data: {
          tipoServicioId: tiposServicio[1].id,
          nombre: 'Habitación Doble',
          descripcion: 'Habitación doble con vista al lago',
          latitud: -15.8200,
          longitud: -70.0200,
          precioBase: 120.00,
          moneda: 'PEN',
          estado: 'activo',
          detallesServicio: {
            capacidad: 2,
            comodidades: ['WiFi', 'Desayuno', 'TV'],
          },
        },
      }),
      prisma.servicio.create({
        data: {
          tipoServicioId: tiposServicio[2].id,
          nombre: 'Guía Turístico',
          descripcion: 'Guía turístico profesional',
          latitud: -15.8200,
          longitud: -70.0200,
          precioBase: 80.00,
          moneda: 'PEN',
          estado: 'activo',
          detallesServicio: {
            idiomas: ['Español', 'Inglés'],
            experiencia: '5 años',
          },
        },
      }),
      prisma.servicio.create({
        data: {
          tipoServicioId: tiposServicio[3].id,
          nombre: 'Almuerzo Tradicional',
          descripcion: 'Almuerzo con comida típica',
          latitud: -15.8200,
          longitud: -70.0200,
          precioBase: 30.00,
          moneda: 'PEN',
          estado: 'activo',
          detallesServicio: {
            menu: ['Trucha', 'Quinua', 'Papa'],
            capacidad: 20,
          },
        },
      }),
      prisma.servicio.create({
        data: {
          tipoServicioId: tiposServicio[4].id,
          nombre: 'Tour en Kayak',
          descripcion: 'Tour en kayak por el lago',
          latitud: -15.8200,
          longitud: -70.0200,
          precioBase: 60.00,
          moneda: 'PEN',
          estado: 'activo',
          detallesServicio: {
            duracion: '2 horas',
            nivel: 'Principiante',
            equipamiento: ['Kayak', 'Chaleco salvavidas'],
          },
        },
      }),
    ]);

    // 11. Asignar servicios a emprendimientos
    await Promise.all(servicios.map((servicio, index) =>
      prisma.servicioEmprendedor.create({
        data: {
          servicioId: servicio.id,
          emprendimientoId: emprendimientos[index % emprendimientos.length].id,
        },
      })
    ));

    // 12. Crear disponibilidad de servicios
    await Promise.all(servicios.map(servicio =>
      prisma.servicioDisponibilidad.create({
        data: {
          servicioId: servicio.id,
          fechaInicio: new Date('2024-01-01'),
          fechaFin: new Date('2024-12-31'),
          cuposMaximos: 20,
          cuposDisponibles: 20,
          precioEspecial: null,
          notas: 'Disponible todo el año',
          estado: 'activo',
        },
      })
    ));

    // 13. Crear paquetes turísticos
    const paquetes = await Promise.all([
      prisma.paqueteTuristico.create({
        data: {
          nombre: 'Tour Completo Capachica',
          descripcion: 'Experiencia completa en Capachica',
          precio: 200.00,
          estado: 'activo',
          emprendimientoId: emprendimientos[0].id,
        },
      }),
      prisma.paqueteTuristico.create({
        data: {
          nombre: 'Experiencia Lago Titicaca',
          descripcion: 'Tour por el lago más alto del mundo',
          precio: 150.00,
          estado: 'activo',
          emprendimientoId: emprendimientos[1].id,
        },
      }),
      prisma.paqueteTuristico.create({
        data: {
          nombre: 'Tour Cultural Taquile',
          descripcion: 'Conoce la cultura textil de Taquile',
          precio: 180.00,
          estado: 'activo',
          emprendimientoId: emprendimientos[2].id,
        },
      }),
      prisma.paqueteTuristico.create({
        data: {
          nombre: 'Aventura Sillustani',
          descripcion: 'Explora las chullpas de Sillustani',
          precio: 120.00,
          estado: 'activo',
          emprendimientoId: emprendimientos[3].id,
        },
      }),
      prisma.paqueteTuristico.create({
        data: {
          nombre: 'Tour Gastronómico',
          descripcion: 'Degusta la gastronomía local',
          precio: 100.00,
          estado: 'activo',
          emprendimientoId: emprendimientos[4].id,
        },
      }),
    ]);

    // 14. Asignar servicios a paquetes
    await Promise.all(paquetes.map((paquete, index) =>
      prisma.servicioPaquete.create({
        data: {
          paqueteTuristicoId: paquete.id,
          servicioId: servicios[index % servicios.length].id,
          orden: 1,
        },
      })
    ));

    // 15. Crear disponibilidad de paquetes
    await Promise.all(paquetes.map(paquete =>
      prisma.disponibilidadPaquete.create({
        data: {
          paqueteId: paquete.id,
          fechaInicio: new Date('2024-01-01'),
          fechaFin: new Date('2024-12-31'),
          cuposDisponibles: 10,
          cuposMaximos: 10,
          precioEspecial: null,
          notas: 'Disponible todo el año',
          estado: 'activo',
        },
      })
    ));

    // 16. Crear reservas
    const reservas = await Promise.all([
      prisma.reserva.create({
        data: {
          usuarioId: usuarios[2].id,
          codigoReserva: 'RES001',
          tipoReserva: 'PAQUETE',
          fechaReserva: new Date(),
          fechaInicio: new Date('2024-01-15'),
          fechaFin: new Date('2024-01-16'),
          cantidadPersonas: 2,
          precioTotal: 400.00,
          moneda: 'PEN',
          estado: 'confirmada',
          notas: 'Cliente VIP',
        },
      }),
      prisma.reserva.create({
        data: {
          usuarioId: usuarios[2].id,
          codigoReserva: 'RES002',
          tipoReserva: 'SERVICIO',
          fechaReserva: new Date(),
          fechaInicio: new Date('2024-02-01'),
          fechaFin: new Date('2024-02-01'),
          cantidadPersonas: 1,
          precioTotal: 50.00,
          moneda: 'PEN',
          estado: 'pendiente',
          notas: 'Solicita guía en inglés',
        },
      }),
      prisma.reserva.create({
        data: {
          usuarioId: usuarios[2].id,
          codigoReserva: 'RES003',
          tipoReserva: 'PAQUETE',
          fechaReserva: new Date(),
          fechaInicio: new Date('2024-03-01'),
          fechaFin: new Date('2024-03-02'),
          cantidadPersonas: 4,
          precioTotal: 600.00,
          moneda: 'PEN',
          estado: 'confirmada',
          notas: 'Grupo familiar',
        },
      }),
      prisma.reserva.create({
        data: {
          usuarioId: usuarios[2].id,
          codigoReserva: 'RES004',
          tipoReserva: 'SERVICIO',
          fechaReserva: new Date(),
          fechaInicio: new Date('2024-04-01'),
          fechaFin: new Date('2024-04-01'),
          cantidadPersonas: 2,
          precioTotal: 100.00,
          moneda: 'PEN',
          estado: 'pendiente',
          notas: 'Almuerzo especial',
        },
      }),
      prisma.reserva.create({
        data: {
          usuarioId: usuarios[2].id,
          codigoReserva: 'RES005',
          tipoReserva: 'PAQUETE',
          fechaReserva: new Date(),
          fechaInicio: new Date('2024-05-01'),
          fechaFin: new Date('2024-05-02'),
          cantidadPersonas: 3,
          precioTotal: 450.00,
          moneda: 'PEN',
          estado: 'confirmada',
          notas: 'Grupo de amigos',
        },
      }),
    ]);

    // 17. Crear itinerarios de reserva
    await Promise.all(reservas.map(reserva =>
      prisma.itinerarioReserva.create({
        data: {
          reservaId: reserva.id,
          servicioId: servicios[0].id,
          fechaInicioActividad: new Date('2024-01-15'),
          fechaFinActividad: new Date('2024-01-15'),
          lugarEncuentro: 'Puerto de Puno',
          observaciones: 'Llegar 15 minutos antes',
          tipoEvento: 'TRANSPORTE',
          descripcion: 'Transporte al destino',
        },
      })
    ));

    // 18. Crear pagos
    const pagos = await Promise.all(reservas.map(reserva =>
      prisma.pago.create({
        data: {
          reservaId: reserva.id,
          paymentGateway: 'CULQI',
          transactionId: `TRX${reserva.codigoReserva}`,
          montoTotal: reserva.precioTotal,
          moneda: reserva.moneda,
          estado: reserva.estado === 'confirmada' ? 'completado' : 'pendiente',
          fechaPago: reserva.estado === 'confirmada' ? new Date() : null,
          datosMetodoPago: {
            tipo: 'tarjeta',
            ultimos4: '4242',
          },
          metadata: {
            ip: '127.0.0.1',
            userAgent: 'Mozilla/5.0',
          },
        },
      })
    ));

    // 19. Crear detalles de pago
    await Promise.all(pagos.map(pago =>
      prisma.pagoDetalle.create({
        data: {
          pagoId: pago.id,
          tipoPagoId: tiposPago[1].id,
          concepto: 'Reserva de tour',
          monto: pago.montoTotal,
          porcentajeImpuesto: 18.00,
          cantidad: 1,
          descripcion: 'Pago por reserva de tour',
        },
      })
    ));

    // 20. Crear comprobantes
    await Promise.all(pagos.filter(pago => pago.estado === 'completado').map(pago =>
      prisma.comprobante.create({
        data: {
          pagoId: pago.id,
          tipoComprobante: 'BOLETA',
          serie: 'B001',
          numero: `000${pago.id}`,
          fechaEmision: new Date(),
          rucCliente: '20123456789',
          razonSocial: 'Cliente Ejemplo',
          direccionCliente: 'Av. Ejemplo 123',
          subtotal: pago.montoTotal.toNumber() / 1.18,
          igv: pago.montoTotal.toNumber() - (pago.montoTotal.toNumber() / 1.18),
          total: pago.montoTotal.toNumber(),
          moneda: pago.moneda,
          estado: 'emitido',
          codigoSunat: `SUNAT${pago.id}`,
          codigoHash: `HASH${pago.id}`,
          xmlUrl: `https://example.com/xml/${pago.id}`,
          pdfUrl: `https://example.com/pdf/${pago.id}`,
          qrCodeUrl: `https://example.com/qr/${pago.id}`,
          tokenSunat: `TOKEN${pago.id}`,
        },
      })
    ));

    // 21. Crear reseñas
    await Promise.all(servicios.map((servicio, index) =>
      prisma.resena.create({
        data: {
          servicioId: servicio.id,
          usuarioId: usuarios[2].id,
          calificacion: 4 + (index % 2),
          comentario: `Excelente servicio ${servicio.nombre}`,
          estado: 'visible',
        },
      })
    ));

    // 22. Crear tours
    await Promise.all([
      prisma.tour.create({
        data: {
          name: 'Tour Completo Capachica',
          description: 'Tour completo por Capachica',
          price: 200.00,
          fechaInicio: new Date('2024-01-01'),
          fechaFin: new Date('2024-12-31'),
          guideId: usuarios[4].id,
        },
      }),
      prisma.tour.create({
        data: {
          name: 'Tour Islas Uros',
          description: 'Tour por las islas flotantes',
          price: 150.00,
          fechaInicio: new Date('2024-01-01'),
          fechaFin: new Date('2024-12-31'),
          guideId: usuarios[4].id,
        },
      }),
      prisma.tour.create({
        data: {
          name: 'Tour Taquile',
          description: 'Tour por la isla de Taquile',
          price: 180.00,
          fechaInicio: new Date('2024-01-01'),
          fechaFin: new Date('2024-12-31'),
          guideId: usuarios[4].id,
        },
      }),
      prisma.tour.create({
        data: {
          name: 'Tour Sillustani',
          description: 'Tour por las chullpas de Sillustani',
          price: 120.00,
          fechaInicio: new Date('2024-01-01'),
          fechaFin: new Date('2024-12-31'),
          guideId: usuarios[4].id,
        },
      }),
      prisma.tour.create({
        data: {
          name: 'Tour Gastronómico',
          description: 'Tour por la gastronomía local',
          price: 100.00,
          fechaInicio: new Date('2024-01-01'),
          fechaFin: new Date('2024-12-31'),
          guideId: usuarios[4].id,
        },
      }),
    ]);

    // 23. Crear sliders
    await prisma.slider.createMany({
      data: [
        {
          nombre: 'Bienvenidos a Tour Capachica',
          description: 'Descubre la belleza natural de la península',
          estado: 'activo'
        },
        {
          nombre: 'Islas Uros',
          description: 'Visita las famosas islas flotantes',
          estado: 'activo'
        },
        {
          nombre: 'Taquile',
          description: 'Conoce la cultura textil de la isla',
          estado: 'activo'
        },
        {
          nombre: 'Sillustani',
          description: 'Explora las chullpas pre-incas',
          estado: 'activo'
        },
        {
          nombre: 'Lago Titicaca',
          description: 'El lago navegable más alto del mundo',
          estado: 'activo'
        }
      ]
    });

    // 24. Crear imágenes
    const imagenes = await Promise.all([
      prisma.image.create({
        data: {
          url: 'https://example.com/images/capachica1.jpg',
        },
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/uros1.jpg',
        },
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/taquile1.jpg',
        },
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/sillustani1.jpg',
        },
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/titicaca1.jpg',
        },
      }),
    ]);

    // 25. Asignar imágenes a lugares turísticos
    await Promise.all(lugaresTuristicos.map((lugar, index) =>
      prisma.imageable.create({
        data: {
          image_id: imagenes[index].id,
          imageable_id: lugar.id,
          imageable_type: 'LugarTuristico',
        },
      })
    ));

    console.log('Seed completado exitosamente');
  } catch (error) {
    console.error('Error durante el seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });