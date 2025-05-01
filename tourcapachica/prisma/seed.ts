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
    const tipoServicio1 = await prisma.tipoServicio.create({
      data: {
        nombre: 'Transporte',
        descripcion: 'Servicios de transporte',
        imagenUrl: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/tipo-servicio/transporte.jpg',
      },
    });

    const tipoServicio2 = await prisma.tipoServicio.create({
      data: {
        nombre: 'Alojamiento',
        descripcion: 'Servicios de alojamiento',
        imagenUrl: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/tipo-servicio/alojamiento.jpg',
      },
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
    const emprendimiento1 = await prisma.emprendimiento.create({
      data: {
        usuarioId: emprendedor.id,
        nombre: 'Restaurante La Casona',
        descripcion: 'Restaurante tradicional con vista al lago',
        tipo: 'restaurante',
        direccion: 'Av. Principal 123',
        coordenadas: '-15.7667, -69.6833',
        contactoTelefono: '+51987654321',
        contactoEmail: 'contacto@lacasona.com',
        sitioWeb: 'https://lacasona.com',
        redesSociales: {
          facebook: 'lacasona',
          instagram: 'lacasona_restaurant',
        },
        estado: 'aprobado',
      },
    });

    const emprendimiento2 = await prisma.emprendimiento.create({
      data: {
        usuarioId: emprendedor.id,
        nombre: 'Hotel Titicaca',
        descripcion: 'Hotel con vista al lago Titicaca',
        tipo: 'hotel',
        direccion: 'Calle Principal 456',
        coordenadas: '-15.7667, -69.6833',
        contactoTelefono: '+51987654322',
        contactoEmail: 'contacto@hoteltiticaca.com',
        sitioWeb: 'https://hoteltiticaca.com',
        redesSociales: {
          facebook: 'hoteltiticaca',
          instagram: 'hotel_titicaca',
        },
        estado: 'aprobado',
      },
    });

    // Crear imágenes para emprendimientos
    await prisma.image.createMany({
      data: [
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/emprendimiento/1/restaurante1.jpg',
          imageableId: emprendimiento1.id,
          imageableType: 'Emprendimiento',
        },
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/emprendimiento/1/restaurante2.jpg',
          imageableId: emprendimiento1.id,
          imageableType: 'Emprendimiento',
        },
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/emprendimiento/2/hotel1.jpg',
          imageableId: emprendimiento2.id,
          imageableType: 'Emprendimiento',
        },
      ],
    });

    // Crear lugares turísticos
    const lugar1 = await prisma.lugarTuristico.create({
      data: {
        nombre: 'Isla Taquile',
        descripcion: 'Isla ubicada en el lago Titicaca, conocida por sus tejidos tradicionales',
        direccion: 'Isla Taquile, Lago Titicaca',
        coordenadas: '-15.7667, -69.6833',
        esDestacado: true,
        estado: 'activo',
        horarioApertura: new Date('2024-01-01T08:00:00Z'),
        horarioCierre: new Date('2024-01-01T17:00:00Z'),
        costoEntrada: 20,
        recomendaciones: 'Llevar protector solar y agua',
        restricciones: 'No se permite el ingreso de mascotas',
      },
    });

    const lugar2 = await prisma.lugarTuristico.create({
      data: {
        nombre: 'Isla Amantaní',
        descripcion: 'Isla con hermosas vistas y tradiciones ancestrales',
        direccion: 'Isla Amantaní, Lago Titicaca',
        coordenadas: '-15.6667, -69.7833',
        esDestacado: true,
        estado: 'activo',
        horarioApertura: new Date('2024-01-01T08:00:00Z'),
        horarioCierre: new Date('2024-01-01T17:00:00Z'),
        costoEntrada: 15,
        recomendaciones: 'Llevar ropa abrigada',
        restricciones: 'Respetar las costumbres locales',
      },
    });

    // Crear imágenes para lugares turísticos
    await prisma.image.createMany({
      data: [
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/lugar-turistico/1/taquile1.jpg',
          imageableId: lugar1.id,
          imageableType: 'LugarTuristico',
        },
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/lugar-turistico/2/amantani1.jpg',
          imageableId: lugar2.id,
          imageableType: 'LugarTuristico',
        },
      ],
    });

    // Crear servicios
    const servicio1 = await prisma.servicio.create({
      data: {
        tipoServicioId: tipoServicio1.id,
        nombre: 'Tour en bote',
        descripcion: 'Tour en bote por el lago Titicaca',
        precioBase: 50,
        moneda: 'PEN',
        estado: 'activo',
        detallesServicio: {
          duracion: '2 horas',
          incluye: ['Guía', 'Equipo de seguridad'],
        },
      },
    });

    const servicio2 = await prisma.servicio.create({
      data: {
        tipoServicioId: tipoServicio2.id,
        nombre: 'Habitación Doble',
        descripcion: 'Habitación con vista al lago',
        precioBase: 150,
        moneda: 'PEN',
        estado: 'activo',
        detallesServicio: {
          capacidad: '2 personas',
          incluye: ['Desayuno', 'WiFi'],
        },
      },
    });

    // Crear imágenes para servicios
    await prisma.image.createMany({
      data: [
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/servicio/1/bote1.jpg',
          imageableId: servicio1.id,
          imageableType: 'Servicio',
        },
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/servicio/2/habitacion1.jpg',
          imageableId: servicio2.id,
          imageableType: 'Servicio',
        },
      ],
    });

    // Crear paquetes turísticos
    const paquete1 = await prisma.paqueteTuristico.create({
      data: {
        nombre: 'Tour Completo Taquile',
        descripcion: 'Tour completo a la isla Taquile incluyendo transporte y almuerzo',
        precio: 200,
        estado: 'activo',
        emprendimientoId: emprendimiento1.id,
      },
    });

    const paquete2 = await prisma.paqueteTuristico.create({
      data: {
        nombre: 'Tour Amantaní + Alojamiento',
        descripcion: 'Tour a Amantaní con noche de alojamiento incluido',
        precio: 350,
        estado: 'activo',
        emprendimientoId: emprendimiento2.id,
      },
    });

    // Crear imágenes para paquetes turísticos
    await prisma.image.createMany({
      data: [
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/paquete-turistico/1/paquete1.jpg',
          imageableId: paquete1.id,
          imageableType: 'PaqueteTuristico',
        },
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/paquete-turistico/2/paquete2.jpg',
          imageableId: paquete2.id,
          imageableType: 'PaqueteTuristico',
        },
      ],
    });

    // Asociar servicios a paquetes
    await prisma.servicioPaquete.createMany({
      data: [
        {
          servicioId: servicio1.id,
          paqueteTuristicoId: paquete1.id,
        },
        {
          servicioId: servicio2.id,
          paqueteTuristicoId: paquete2.id,
        },
      ],
    });

    // Crear sliders
    const slider1 = await prisma.slider.create({
      data: {
        nombre: 'Descubre Taquile',
        descripcion: 'Conoce la isla de los tejidos tradicionales',
        estado: 'activo',
      },
    });

    const slider2 = await prisma.slider.create({
      data: {
        nombre: 'Vive Amantaní',
        descripcion: 'Experiencia única en el lago Titicaca',
        estado: 'activo',
      },
    });

    // Crear imágenes para sliders
    await prisma.image.createMany({
      data: [
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/slider/taquile.jpg',
          imageableId: slider1.id,
          imageableType: 'Slider',
        },
        {
          url: 'https://twsevdzjdnwjhdysvecm.supabase.co/storage/v1/object/public/images/slider/amantani.jpg',
          imageableId: slider2.id,
          imageableType: 'Slider',
        },
      ],
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