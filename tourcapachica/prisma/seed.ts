import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    // Limpiar la base de datos
    await prisma.$transaction([
      prisma.rolesPermisos.deleteMany(),
      prisma.usuariosRoles.deleteMany(),
      prisma.permiso.deleteMany(),
      prisma.role.deleteMany(),
      prisma.usuario.deleteMany(),
      prisma.persona.deleteMany(),
      prisma.subdivision.deleteMany(),
      prisma.country.deleteMany(),
      prisma.image.deleteMany(),
      prisma.servicioPaquete.deleteMany(),
      prisma.paqueteTuristico.deleteMany(),
      prisma.servicio.deleteMany(),
      prisma.lugarTuristico.deleteMany(),
      prisma.emprendimiento.deleteMany(),
      prisma.slider.deleteMany(),
      prisma.tipoServicio.deleteMany(),
    ]);

    // Crear roles
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

    // Crear permisos
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
      ],
    });

    // Asignar permisos a roles
    await prisma.rolesPermisos.createMany({
      data: [
        { rolId: superAdminRole.id, permisoId: 1 },
        { rolId: superAdminRole.id, permisoId: 2 },
        { rolId: superAdminRole.id, permisoId: 3 },
        { rolId: superAdminRole.id, permisoId: 4 },
        { rolId: superAdminRole.id, permisoId: 5 },
        { rolId: superAdminRole.id, permisoId: 6 },
      ],
    });

     await prisma.rolesPermisos.createMany({
      data: [
        { rolId: emprendedorRole.id, permisoId: 2 },
        { rolId: emprendedorRole.id, permisoId: 3 },
        { rolId: emprendedorRole.id, permisoId: 4 },
        { rolId: emprendedorRole.id, permisoId: 5 },
        { rolId: emprendedorRole.id, permisoId: 6 },
      ],
    });

     await prisma.rolesPermisos.createMany({
      data: [
        { rolId: userRole.id, permisoId: 7 },
        { rolId: userRole.id, permisoId: 8 },
        { rolId: userRole.id, permisoId: 9 },
        { rolId: userRole.id, permisoId: 10 },
      ],
    });

    // Crear país y subdivisiones
    const peru = await prisma.country.create({
      data: {
        name: 'Perú',
        codeIso: 'PER',
        subdivisions: {
          create: [
            { name: 'Lima' },
            { name: 'Arequipa' },
            { name: 'Cusco' },
            { name: 'Puno' },
          ],
        },
      },
    });

    // Obtener la primera subdivisión (Lima)
    const lima = await prisma.subdivision.findFirst({
      where: { countryId: peru.id },
    });

    if (!lima) {
      throw new Error('No se pudo encontrar la subdivisión de Lima');
    }

    // Crear usuarios
    const hashedPassword = await bcrypt.hash('password123', 10);

    const superAdminPersona = await prisma.persona.create({
      data: {
        nombre: 'Admin',
        apellidos: 'Sistema',
        telefono: '999999999',
        direccion: 'Av. Principal 123',
        subdivisionId: lima.id,
      },
    });

    const emprendedorPersona = await prisma.persona.create({
      data: {
        nombre: 'Juan',
        apellidos: 'Emprendedor',
        telefono: '987654321',
        direccion: 'Av. Comercial 456',
        subdivisionId: lima.id,
      },
    });

    const userPersona = await prisma.persona.create({
      data: {
        nombre: 'Carlos',
        apellidos: 'Usuario',
        telefono: '987123456',
        direccion: 'Av. Usuario 789',
        subdivisionId: lima.id,
      },
    });

    const superAdmin = await prisma.usuario.create({
      data: {
        email: 'admin@tourcapachica.com',
        passwordHash: hashedPassword,
        personaId: superAdminPersona.id,
        emailVerified: true,
        estaActivo: true,
      },
    });

    const emprendedor = await prisma.usuario.create({
      data: {
        email: 'emprendedor@tourcapachica.com',
        passwordHash: hashedPassword,
        personaId: emprendedorPersona.id,
        emailVerified: true,
        estaActivo: true,
      },
    });

    const user = await prisma.usuario.create({
      data: {
        email: 'usuario@tourcapachica.com',
        passwordHash: hashedPassword,
        personaId: userPersona.id,
        emailVerified: true,
        estaActivo: true,
      },
    });

    // Asignar roles a usuarios
    await Promise.all([
      prisma.usuariosRoles.create({
        data: {
          usuarioId: superAdmin.id,
          rolId: superAdminRole.id,
        },
      }),
      prisma.usuariosRoles.create({
        data: {
          usuarioId: emprendedor.id,
          rolId: emprendedorRole.id,
        },
      }),
      prisma.usuariosRoles.create({
        data: {
          usuarioId: user.id,
          rolId: userRole.id,
        },
      }),
    ]);

    // Crear tipos de servicio
    const tiposServicio = await Promise.all([
      prisma.tipoServicio.create({
        data: {
          nombre: 'Transporte',
          descripcion: 'Servicios de transporte',
          imagenUrl: 'https://example.com/transporte.jpg',
          requiereCupo: true,
        },
      }),
      prisma.tipoServicio.create({
        data: {
          nombre: 'Alojamiento',
          descripcion: 'Servicios de alojamiento',
          imagenUrl: 'https://example.com/alojamiento.jpg',
          requiereCupo: true,
        },
      }),
      prisma.tipoServicio.create({
        data: {
          nombre: 'Guía',
          descripcion: 'Servicios de guía turístico',
          imagenUrl: 'https://example.com/guia.jpg',
          requiereCupo: false,
        },
      }),
    ]);

    // Crear tipos de pago
    await prisma.tipoPago.createMany({
      data: [
        { nombre: 'Efectivo', descripcion: 'Pago en efectivo', requiereVerificacion: false, comisionPorcentaje: 0 },
        { nombre: 'Tarjeta de Crédito', descripcion: 'Pago con tarjeta de crédito', requiereVerificacion: true, comisionPorcentaje: 3.5 },
        { nombre: 'Transferencia Bancaria', descripcion: 'Transferencia bancaria', requiereVerificacion: true, comisionPorcentaje: 0 },
        { nombre: 'Yape', descripcion: 'Pago con Yape', requiereVerificacion: true, comisionPorcentaje: 0 },
      ],
    });

    // Crear emprendimiento
    const emprendimiento = await prisma.emprendimiento.create({
      data: {
        nombre: 'Tour Capachica',
        descripcion: 'Empresa de turismo en Capachica',
        tipo: 'TURISMO',
        direccion: 'Capachica, Puno',
        usuarioId: emprendedor.id,
        estado: 'aprobado',
        fechaAprobacion: new Date(),
      },
    });

    // Crear servicios
    const servicios = await Promise.all([
      prisma.servicio.create({
        data: {
          tipoServicioId: tiposServicio[0].id,
          nombre: 'Transporte a Islas Uros',
          descripcion: 'Transporte en bote a las Islas Uros',
          precioBase: 50.00,
          moneda: 'PEN',
          estado: 'activo',
          detallesServicio: {
            duracion: '2 horas',
            capacidad: 10,
          },
        },
      }),
      prisma.servicio.create({
        data: {
          tipoServicioId: tiposServicio[1].id,
          nombre: 'Hospedaje en Capachica',
          descripcion: 'Hospedaje en cabañas tradicionales',
          precioBase: 100.00,
          moneda: 'PEN',
          estado: 'activo',
          detallesServicio: {
            capacidad: 4,
            comodidades: ['WiFi', 'Desayuno'],
          },
        },
      }),
      prisma.servicio.create({
        data: {
          tipoServicioId: tiposServicio[2].id,
          nombre: 'Guía Turístico',
          descripcion: 'Guía especializado en la zona',
          precioBase: 80.00,
          moneda: 'PEN',
          estado: 'activo',
          detallesServicio: {
            idiomas: ['Español', 'Inglés'],
            experiencia: '5 años',
          },
        },
      }),
    ]);

    // Crear paquete turístico
    const paquete = await prisma.paqueteTuristico.create({
      data: {
        nombre: 'Tour Completo Capachica',
        descripcion: 'Experiencia completa en Capachica',
        precio: 200.00,
        estado: 'activo',
        emprendimientoId: emprendimiento.id,
        servicios: {
          create: [
            {
              servicioId: servicios[0].id,
              orden: 1,
            },
            {
              servicioId: servicios[1].id,
              orden: 2,
            },
            {
              servicioId: servicios[2].id,
              orden: 3,
            },
          ],
        },
      },
    });

    // Crear disponibilidades
    await Promise.all([
      prisma.disponibilidadPaquete.create({
        data: {
          paqueteId: paquete.id,
          fechaInicio: new Date('2024-06-01'),
          fechaFin: new Date('2024-06-30'),
          cuposDisponibles: 20,
          cuposMaximos: 20,
          precioEspecial: 180.00,
          estado: 'activo',
        },
      }),
      prisma.disponibilidadPaquete.create({
        data: {
          paqueteId: paquete.id,
          fechaInicio: new Date('2024-07-01'),
          fechaFin: new Date('2024-07-31'),
          cuposDisponibles: 20,
          cuposMaximos: 20,
          precioEspecial: 190.00,
          estado: 'activo',
        },
      }),
    ]);

    // Crear turista
    const turistaEntity = await prisma.turista.create({
      data: {
        usuario: {
          connect: {
            id: user.id
          }
        }
      },
    });

    // Crear reseñas
    await Promise.all([
      prisma.resena.create({
        data: {
          usuarioId: user.id,
          tipoObjeto: 'PAQUETE_TURISTICO',
          calificacion: 5,
          comentario: 'Excelente experiencia, muy recomendado',
          estado: 'aprobado',
        },
      }),
      prisma.resena.create({
        data: {
          usuarioId: user.id,
          tipoObjeto: 'SERVICIO',
          calificacion: 4,
          comentario: 'Buen servicio de transporte',
          estado: 'aprobado',
        },
      }),
    ]);

    // Crear reserva
    await prisma.reserva.create({
      data: {
        turistaId: turistaEntity.id,
        codigoReserva: 'RES-001',
        tipoReserva: 'PAQUETE',
        fechaReserva: new Date(),
        fechaInicio: new Date('2024-06-15'),
        hora: '08:00',
        fechaFin: new Date('2024-06-16'),
        cantidadPersonas: 2,
        estado: 'confirmada',
        precioTotal: 360.00,
        moneda: 'PEN',
        metodoPago: 'TARJETA',
        itinerarios: {
          create: [
            {
              fecha: new Date('2024-06-15'),
              hora: new Date('2024-06-15T08:00:00'),
              tipoEvento: 'TRANSPORTE',
              descripcion: 'Transporte a Islas Uros',
              servicioId: servicios[0].id,
            },
            {
              fecha: new Date('2024-06-15'),
              hora: new Date('2024-06-15T14:00:00'),
              tipoEvento: 'ALOJAMIENTO',
              descripcion: 'Check-in en cabañas',
              servicioId: servicios[1].id,
            },
            {
              fecha: new Date('2024-06-16'),
              hora: new Date('2024-06-16T09:00:00'),
              tipoEvento: 'GUIA',
              descripcion: 'Tour guiado por Capachica',
              servicioId: servicios[2].id,
            },
          ],
        },
      },
    });

    console.log('Seed completado exitosamente');
  } catch (error) {
    console.error('Error en el seed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 