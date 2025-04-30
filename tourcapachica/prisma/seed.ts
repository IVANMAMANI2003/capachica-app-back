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

    // Asignar permisos a roles
    const superAdminPermisos = await prisma.rolesPermisos.createMany({
      data: [
        { rolId: superAdminRole.id, permisoId: 1 },
        { rolId: superAdminRole.id, permisoId: 2 },
        { rolId: superAdminRole.id, permisoId: 3 },
        { rolId: superAdminRole.id, permisoId: 4 },
        { rolId: superAdminRole.id, permisoId: 5 },
        { rolId: superAdminRole.id, permisoId: 6 },
      ],
    });

    const emprendedorPermisos = await prisma.rolesPermisos.createMany({
      data: [
        { rolId: emprendedorRole.id, permisoId: 2 },
        { rolId: emprendedorRole.id, permisoId: 3 },
        { rolId: emprendedorRole.id, permisoId: 4 },
        { rolId: emprendedorRole.id, permisoId: 5 },
        { rolId: emprendedorRole.id, permisoId: 6 },
      ],
    });

    const userPermisos = await prisma.rolesPermisos.createMany({
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

    // Crear tipos de servicio
    const tiposServicio = await prisma.tipoServicio.createMany({
      data: [
        { nombre: 'Alojamiento', descripcion: 'Servicios de hospedaje', imagenUrl: 'https://example.com/alojamiento.jpg', requiereCupo: true },
        { nombre: 'Transporte', descripcion: 'Servicios de transporte', imagenUrl: 'https://example.com/transporte.jpg', requiereCupo: true },
        { nombre: 'Guía', descripcion: 'Servicios de guía turístico', imagenUrl: 'https://example.com/guia.jpg', requiereCupo: true },
        { nombre: 'Alimentación', descripcion: 'Servicios de alimentación', imagenUrl: 'https://example.com/alimentacion.jpg', requiereCupo: true },
      ],
    });

    // Crear tipos de pago
    const tiposPago = await prisma.tipoPago.createMany({
      data: [
        { nombre: 'Efectivo', descripcion: 'Pago en efectivo', requiereVerificacion: false, comisionPorcentaje: 0 },
        { nombre: 'Tarjeta de Crédito', descripcion: 'Pago con tarjeta de crédito', requiereVerificacion: true, comisionPorcentaje: 3.5 },
        { nombre: 'Transferencia Bancaria', descripcion: 'Transferencia bancaria', requiereVerificacion: true, comisionPorcentaje: 0 },
        { nombre: 'Yape', descripcion: 'Pago con Yape', requiereVerificacion: true, comisionPorcentaje: 0 },
      ],
    });

    // Crear usuarios de ejemplo
    const passwordHash = await bcrypt.hash('password123', 10);

    const superAdminPersona = await prisma.persona.create({
      data: {
        nombre: 'Admin',
        apellidos: 'Sistema',
        telefono: '999999999',
        direccion: 'Av. Principal 123',
        subdivisionId: 1,
      },
    });

    const superAdmin = await prisma.usuario.create({
      data: {
        personaId: superAdminPersona.id,
        email: 'admin@tourcapachica.com',
        passwordHash,
        emailVerified: true,
        estaActivo: true,
        usuariosRoles: {
          create: {
            rolId: superAdminRole.id,
          },
        },
      },
    });

    const emprendedorPersona = await prisma.persona.create({
      data: {
        nombre: 'Juan',
        apellidos: 'Emprendedor',
        telefono: '987654321',
        direccion: 'Av. Comercial 456',
        subdivisionId: 1,
      },
    });

    const emprendedor = await prisma.usuario.create({
      data: {
        personaId: emprendedorPersona.id,
        email: 'emprendedor@tourcapachica.com',
        passwordHash,
        emailVerified: true,
        estaActivo: true,
        usuariosRoles: {
          create: {
            rolId: emprendedorRole.id,
          },
        },
      },
    });

    const userPersona = await prisma.persona.create({
      data: {
        nombre: 'Carlos',
        apellidos: 'Usuario',
        telefono: '987123456',
        direccion: 'Av. Usuario 789',
        subdivisionId: 1,
      },
    });

    const user = await prisma.usuario.create({
      data: {
        personaId: userPersona.id,
        email: 'usuario@tourcapachica.com',
        passwordHash,
        emailVerified: true,
        estaActivo: true,
        usuariosRoles: {
          create: {
            rolId: userRole.id,
          },
        },
      },
    });

    // Crear turista para el usuario regular
    const turista = await prisma.turista.create({
      data: {
        usuarioId: user.id,
      },
    });

    // Crear emprendimiento para el emprendedor
    const emprendimiento = await prisma.emprendimiento.create({
      data: {
        usuarioId: emprendedor.id,
        nombre: 'Hotel Capachica',
        descripcion: 'Hotel con vista al lago Titicaca',
        tipo: 'Hospedaje',
        direccion: 'Av. Lago Titicaca 123',
        coordenadas: '-15.6394, -69.8328',
        contactoTelefono: '987654321',
        contactoEmail: 'hotel@capachica.com',
        estado: 'aprobado',
        fechaAprobacion: new Date(),
      },
    });

    // Crear servicios
    const servicios = await prisma.servicio.createMany({
      data: [
        {
          tipoServicioId: 1,
          nombre: 'Habitación Doble',
          descripcion: 'Habitación con vista al lago',
          precioBase: 150,
          moneda: 'PEN',
          estado: 'activo',
          imagenUrl: 'https://example.com/habitacion.jpg',
          detallesServicio: {
            capacidad: 2,
            comodidades: ['TV', 'WiFi', 'Baño privado'],
          },
        },
        {
          tipoServicioId: 1,
          nombre: 'Habitación Familiar',
          descripcion: 'Habitación para 4 personas',
          precioBase: 250,
          moneda: 'PEN',
          estado: 'activo',
          imagenUrl: 'https://example.com/habitacion-familiar.jpg',
          detallesServicio: {
            capacidad: 4,
            comodidades: ['TV', 'WiFi', 'Baño privado', 'Cocina'],
          },
        },
      ],
    });

    // Asociar servicios al emprendimiento
    const serviciosEmprendedor = await prisma.servicioEmprendedor.createMany({
      data: [
        { servicioId: 1, emprendimientoId: emprendimiento.id },
        { servicioId: 2, emprendimientoId: emprendimiento.id },
      ],
    });

    // Crear paquete turístico
    const paquete = await prisma.paqueteTuristico.create({
      data: {
        nombre: 'Tour Completo Capachica',
        descripcion: 'Tour de 2 días por los principales atractivos de Capachica',
        precio: 500,
        duracion: 48,
        imagenUrl: 'https://example.com/tour-capachica.jpg',
        activo: true,
        emprendimientoId: emprendimiento.id,
        servicios: {
          create: [
            { servicioId: 1, orden: 1 },
            { servicioId: 2, orden: 2 },
          ],
        },
        disponibilidad: {
          create: {
            fechaInicio: new Date('2024-05-01'),
            fechaFin: new Date('2024-12-31'),
            cuposDisponibles: 20,
            cuposMaximos: 20,
            estado: 'activo',
          },
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