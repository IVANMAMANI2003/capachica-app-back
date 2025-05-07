import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    // Limpiar la base de datos
    await prisma.$transaction([
      prisma.rolesPermisos.deleteMany(),
      prisma.role.deleteMany(),
      prisma.permiso.deleteMany(),
      prisma.turista.deleteMany(),
      prisma.usuario.deleteMany(),
      prisma.persona.deleteMany(),
      prisma.subdivision.deleteMany(),
      prisma.country.deleteMany(),
      prisma.imageable.deleteMany(),
      prisma.image.deleteMany(),
      prisma.slider.deleteMany(),
      prisma.lugarTuristico.deleteMany(),
      prisma.emprendimiento.deleteMany(),
      prisma.servicio.deleteMany(),
      prisma.paqueteTuristico.deleteMany(),
      prisma.reserva.deleteMany(),
      prisma.pago.deleteMany(),
      prisma.tipoServicio.deleteMany(),
      prisma.tipoPago.deleteMany(),
      prisma.tour.deleteMany(),
    ]);

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

    // 2. Crear permisos
    const permisos = await prisma.permiso.createMany({
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

    // 3. Asignar permisos a roles
    await prisma.rolesPermisos.createMany({
      data: [
        { rolId: superAdminRole.id, permisoId: 1 },
        { rolId: superAdminRole.id, permisoId: 2 },
        { rolId: superAdminRole.id, permisoId: 3 },
        { rolId: superAdminRole.id, permisoId: 4 },
        { rolId: superAdminRole.id, permisoId: 5 },
        { rolId: superAdminRole.id, permisoId: 6 },
        { rolId: superAdminRole.id, permisoId: 7 },
        { rolId: superAdminRole.id, permisoId: 8 },
        { rolId: superAdminRole.id, permisoId: 9 },
        { rolId: superAdminRole.id, permisoId: 10 },
      ],
    });

    await prisma.rolesPermisos.createMany({
      data: [
        { rolId: emprendedorRole.id, permisoId: 2 },
        { rolId: emprendedorRole.id, permisoId: 3 },
        { rolId: emprendedorRole.id, permisoId: 4 },
        { rolId: emprendedorRole.id, permisoId: 5 },
        { rolId: emprendedorRole.id, permisoId: 6 },
        { rolId: emprendedorRole.id, permisoId: 7 },
        { rolId: emprendedorRole.id, permisoId: 8 },
        { rolId: emprendedorRole.id, permisoId: 9 },
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

    // 4. Crear países y subdivisiones
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
            { name: 'Tacna' },
            { name: 'Moquegua' },
          ],
        },
      },
    });

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
    ]);

    // 7. Crear tipos de pago
    const tiposPago = await Promise.all([
      prisma.tipoPago.create({
        data: {
          nombre: 'Efectivo',
          descripcion: 'Pago en efectivo',
          requiereVerificacion: false,
          comisionPorcentaje: 0,
        },
      }),
      prisma.tipoPago.create({
        data: {
          nombre: 'Tarjeta de Crédito',
          descripcion: 'Pago con tarjeta de crédito',
          requiereVerificacion: true,
          comisionPorcentaje: 3.5,
        },
      }),
      prisma.tipoPago.create({
        data: {
          nombre: 'Transferencia Bancaria',
          descripcion: 'Transferencia bancaria',
          requiereVerificacion: true,
          comisionPorcentaje: 0,
        },
      }),
    ]);

    // 8. Crear lugares turísticos
    const lugaresTuristicos = await prisma.lugarTuristico.createMany({
      data: [
        {
          nombre: 'Islas Uros',
          descripcion: 'Islas flotantes hechas de totora en el Lago Titicaca',
          direccion: 'Lago Titicaca, Puno',
          coordenadas: '-15.8200,-70.0200',
          estado: 'activo',
          esDestacado: true,
        },
        {
          nombre: 'Taquile',
          descripcion: 'Isla conocida por su cultura textil y tradiciones',
          direccion: 'Lago Titicaca, Puno',
          coordenadas: '-15.7700,-69.6800',
          estado: 'activo',
          esDestacado: true,
        },
        {
          nombre: 'Capachica',
          descripcion: 'Península con hermosas playas y miradores naturales',
          direccion: 'Península de Capachica, Puno',
          coordenadas: '-15.6000,-69.9000',
          estado: 'activo',
          esDestacado: true,
        },
        {
          nombre: 'Sillustani',
          descripcion: 'Sitio arqueológico con chullpas pre-incas',
          direccion: 'Carretera Puno-Juliaca, Puno',
          coordenadas: '-15.7200,-70.1500',
          estado: 'activo',
        },
        {
          nombre: 'Lago Titicaca',
          descripcion: 'El lago navegable más alto del mundo',
          direccion: 'Puno',
          coordenadas: '-15.8000,-69.4000',
          estado: 'activo',
          esDestacado: true,
        }
      ],
    });

    // 9. Crear usuarios con fotos de perfil
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Crear personas
    const personas = await Promise.all([
      prisma.persona.create({
        data: {
          nombre: 'Admin',
          apellidos: 'Sistema',
          telefono: '999999999',
          direccion: 'Av. Principal 123',
          subdivisionId: lima.id,
          fotoPerfilUrl: 'https://example.com/images/admin-profile.jpg'
        },
      }),
      prisma.persona.create({
        data: {
          nombre: 'Juan',
          apellidos: 'Emprendedor',
          telefono: '987654321',
          direccion: 'Av. Comercial 456',
          subdivisionId: puno.id,
          fotoPerfilUrl: 'https://example.com/images/emprendedor-profile.jpg'
        },
      }),
      prisma.persona.create({
        data: {
          nombre: 'Carlos',
          apellidos: 'Usuario',
          telefono: '987123456',
          direccion: 'Av. Usuario 789',
          subdivisionId: lima.id,
          fotoPerfilUrl: 'https://example.com/images/user-profile.jpg'
        },
      }),
      prisma.persona.create({
        data: {
          nombre: 'María',
          apellidos: 'Emprendedora',
          telefono: '987654322',
          direccion: 'Av. Turismo 101',
          subdivisionId: puno.id,
          fotoPerfilUrl: 'https://example.com/images/emprendedora-profile.jpg'
        },
      })
    ]);

    // Crear usuarios
    const usuarios = await Promise.all([
      prisma.usuario.create({
        data: {
          email: 'admin@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[0].id,
          emailVerified: true,
          estaActivo: true,
        },
      }),
      prisma.usuario.create({
        data: {
          email: 'emprendedor@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[1].id,
          emailVerified: true,
          estaActivo: true,
        },
      }),
      prisma.usuario.create({
        data: {
          email: 'usuario@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[2].id,
          emailVerified: true,
          estaActivo: true,
        },
      }),
      prisma.usuario.create({
        data: {
          email: 'maria@tourcapachica.com',
          passwordHash: hashedPassword,
          personaId: personas[3].id,
          emailVerified: true,
          estaActivo: true,
        },
      })
    ]);

    // Crear turista para el usuario regular
    await prisma.turista.create({
      data: {
        usuarioId: usuarios[2].id,
        // otros campos necesarios
      },
    });

    // 10. Asignar roles a usuarios
    await Promise.all([
      prisma.usuariosRoles.create({
        data: {
          usuarioId: usuarios[0].id,
          rolId: superAdminRole.id,
        },
      }),
      prisma.usuariosRoles.create({
        data: {
          usuarioId: usuarios[1].id,
          rolId: emprendedorRole.id,
        },
      }),
      prisma.usuariosRoles.create({
        data: {
          usuarioId: usuarios[2].id,
          rolId: userRole.id,
        },
      }),
      prisma.usuariosRoles.create({
        data: {
          usuarioId: usuarios[3].id,
          rolId: emprendedorRole.id,
        },
      })
    ]);

    // 11. Crear emprendimientos
    const emprendimientos = await Promise.all([
      prisma.emprendimiento.create({
        data: {
          nombre: 'Tour Capachica',
          descripcion: 'Empresa de turismo en Capachica',
          tipo: 'TURISMO',
          direccion: 'Capachica, Puno',
          usuarioId: usuarios[1].id,
          estado: 'aprobado',
          fechaAprobacion: new Date(),
        },
      }),
      prisma.emprendimiento.create({
        data: {
          nombre: 'Hostal Lago Azul',
          descripcion: 'Hospedaje con vista al lago',
          tipo: 'HOSPEDAJE',
          direccion: 'Capachica, Puno',
          usuarioId: usuarios[3].id,
          estado: 'aprobado',
          fechaAprobacion: new Date(),
        },
      }),
    ]);

    // 12. Crear servicios
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

    // 13. Asignar servicios a emprendimientos
    await Promise.all([
      prisma.servicioEmprendedor.create({
        data: {
          servicioId: servicios[0].id,
          emprendimientoId: emprendimientos[0].id,
        },
      }),
      prisma.servicioEmprendedor.create({
        data: {
          servicioId: servicios[2].id,
          emprendimientoId: emprendimientos[0].id,
        },
      }),
      prisma.servicioEmprendedor.create({
        data: {
          servicioId: servicios[1].id,
          emprendimientoId: emprendimientos[1].id,
        },
      }),
    ]);

    // 14. Crear paquetes turísticos
    const paquetes = await Promise.all([
      prisma.paqueteTuristico.create({
        data: {
          nombre: 'Tour Completo Capachica',
          descripcion: 'Experiencia completa en Capachica',
          precio: 200.00,
          estado: 'activo',
          emprendimientoId: emprendimientos[0].id,
          servicios: {
            create: [
              {
                servicioId: servicios[0].id,
                orden: 1,
              },
              {
                servicioId: servicios[2].id,
                orden: 2,
              },
            ],
          },
        },
      }),
      prisma.paqueteTuristico.create({
        data: {
          nombre: 'Experiencia Lago Titicaca',
          descripcion: 'Tour por el lago más alto del mundo',
          precio: 150.00,
          estado: 'activo',
          emprendimientoId: emprendimientos[0].id,
          servicios: {
            create: [
              {
                servicioId: servicios[0].id,
                orden: 1,
              },
              {
                servicioId: servicios[2].id,
                orden: 2,
              },
            ],
          },
        },
      }),
    ]);

    // Crear turista para el usuario regular
    // (Eliminado duplicado para evitar error de unicidad)
    await prisma.turista.create({
      data: {
        usuarioId: usuarios[2].id,
      },
    });

    // Poblar la tabla reseña con datos de ejemplo
    await prisma.resena.createMany({
      data: [
        {
          usuarioId: usuarios[2].id,
          servicioId: servicios[0].id,
          calificacion: 5,
          comentario: 'Excelente servicio, muy recomendado!',
        },
        {
          usuarioId: usuarios[3].id,
          servicioId: servicios[1].id,
          calificacion: 4,
          comentario: 'Buena experiencia, pero se puede mejorar.',
        },
        {
          usuarioId: usuarios[1].id,
          servicioId: servicios[2].id,
          calificacion: 3,
          comentario: 'Servicio aceptable, pero esperaba más.',
        },
      ],
    });

    // 16. Crear sliders
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
        }
      ]
    });

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