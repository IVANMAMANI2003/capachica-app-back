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
      prisma.usuario.deleteMany(),
      prisma.persona.deleteMany(),
      prisma.subdivision.deleteMany(),
      prisma.country.deleteMany(),
      prisma.imageable.deleteMany(),
      prisma.image.deleteMany(),
      prisma.slider.deleteMany(),
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

    // Obtener la subdivisión de Puno
    const puno = await prisma.subdivision.findFirst({
      where: { name: 'Puno' },
    });

    if (!puno) {
      throw new Error('No se pudo encontrar la subdivisión de Puno');
    }

    // Crear lugares turísticos
    await prisma.lugarTuristico.createMany({
      data: [
        {
          nombre: 'Islas Uros',
          descripcion: 'Islas flotantes hechas de totora en el Lago Titicaca',
          direccion: 'Lago Titicaca, Puno',
          coordenadas: '-15.8200,-70.0200',
          estado: 'activo',
        },
        {
          nombre: 'Taquile',
          descripcion: 'Isla conocida por su cultura textil y tradiciones',
          direccion: 'Lago Titicaca, Puno',
          coordenadas: '-15.7700,-69.6800',
          estado: 'activo',
        },
        {
          nombre: 'Capachica',
          descripcion: 'Península con hermosas playas y miradores naturales',
          direccion: 'Península de Capachica, Puno',
          coordenadas: '-15.6000,-69.9000',
          estado: 'activo',
        }
      ],
    });

    // Obtener la primera subdivisión (Lima)
    const lima = await prisma.subdivision.findFirst({
      where: { name: 'Lima' },
    });

    if (!lima) {
      throw new Error('No se pudo encontrar la subdivisión de Lima');
    }

    // Crear usuarios con fotos de perfil
    const hashedPassword = await bcrypt.hash('password123', 10);

    const superAdminPersona = await prisma.persona.create({
      data: {
        nombre: 'Admin',
        apellidos: 'Sistema',
        telefono: '999999999',
        direccion: 'Av. Principal 123',
        subdivisionId: lima.id,
        fotoPerfilUrl: 'https://example.com/images/admin-profile.jpg'
      },
    });

    const emprendedorPersona = await prisma.persona.create({
      data: {
        nombre: 'Juan',
        apellidos: 'Emprendedor',
        telefono: '987654321',
        direccion: 'Av. Comercial 456',
        subdivisionId: lima.id,
        fotoPerfilUrl: 'https://example.com/images/emprendedor-profile.jpg'
      },
    });

    const userPersona = await prisma.persona.create({
      data: {
        nombre: 'Carlos',
        apellidos: 'Usuario',
        telefono: '987123456',
        direccion: 'Av. Usuario 789',
        subdivisionId: lima.id,
        fotoPerfilUrl: 'https://example.com/images/user-profile.jpg'
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

    // Crear imágenes para los usuarios
    const userImages = await Promise.all([
      prisma.image.create({
        data: {
          url: 'https://example.com/images/admin-profile.jpg'
        }
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/emprendedor-profile.jpg'
        }
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/user-profile.jpg'
        }
      })
    ]);

    // Crear relaciones imageables para los usuarios
    await Promise.all([
      prisma.imageable.create({
        data: {
          image_id: userImages[0].id,
          imageable_id: superAdmin.id,
          imageable_type: 'Usuario'
        }
      }),
      prisma.imageable.create({
        data: {
          image_id: userImages[1].id,
          imageable_id: emprendedor.id,
          imageable_type: 'Usuario'
        }
      }),
      prisma.imageable.create({
        data: {
          image_id: userImages[2].id,
          imageable_id: user.id,
          imageable_type: 'Usuario'
        }
      })
    ]);

    // Crear tipos de servicio
    const [transporteServicio, alojamientoServicio, guiaServicio] = await Promise.all([
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

    // Crear servicios con imágenes
    const servicios = await Promise.all([
      prisma.servicio.create({
        data: {
          tipoServicioId: transporteServicio.id,
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
          tipoServicioId: alojamientoServicio.id,
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
          tipoServicioId: guiaServicio.id,
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

    // Crear imágenes para los servicios
    const servicioImages = await Promise.all([
      prisma.image.create({
        data: {
          url: 'https://example.com/images/transporte-islas-uros.jpg'
        }
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/hospedaje-capachica.jpg'
        }
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/guia-turistico.jpg'
        }
      })
    ]);

    // Crear relaciones imageables para los servicios
    await Promise.all([
      prisma.imageable.create({
        data: {
          image_id: servicioImages[0].id,
          imageable_id: servicios[0].id,
          imageable_type: 'Servicio'
        }
      }),
      prisma.imageable.create({
        data: {
          image_id: servicioImages[1].id,
          imageable_id: servicios[1].id,
          imageable_type: 'Servicio'
        }
      }),
      prisma.imageable.create({
        data: {
          image_id: servicioImages[2].id,
          imageable_id: servicios[2].id,
          imageable_type: 'Servicio'
        }
      })
    ]);

    // Crear paquete turístico con imágenes
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

    // Crear imágenes para el paquete turístico
    const paqueteImages = await Promise.all([
      prisma.image.create({
        data: {
          url: 'https://example.com/images/tour-capachica-1.jpg'
        }
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/tour-capachica-2.jpg'
        }
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/tour-capachica-3.jpg'
        }
      })
    ]);

    // Crear relaciones imageables para el paquete
    await Promise.all(
      paqueteImages.map(image =>
        prisma.imageable.create({
          data: {
            image_id: image.id,
            imageable_id: paquete.id,
            imageable_type: 'PaqueteTuristico'
          }
        })
      )
    );

    // Crear imágenes de ejemplo para lugares turísticos
    const lugares = await prisma.lugarTuristico.findMany();
    for (const lugar of lugares) {
      const imagenes = await Promise.all([
        prisma.image.create({
          data: {
            url: `https://example.com/images/${lugar.nombre.toLowerCase().replace(/\s+/g, '-')}-1.jpg`
          }
        }),
        prisma.image.create({
          data: {
            url: `https://example.com/images/${lugar.nombre.toLowerCase().replace(/\s+/g, '-')}-2.jpg`
          }
        }),
        prisma.image.create({
          data: {
            url: `https://example.com/images/${lugar.nombre.toLowerCase().replace(/\s+/g, '-')}-3.jpg`
          }
        })
      ]);

      await Promise.all(
        imagenes.map(imagen =>
          prisma.imageable.create({
            data: {
              image_id: imagen.id,
              imageable_id: lugar.id,
              imageable_type: 'LugarTuristico'
            }
          })
        )
      );
    }

    // Crear slider de ejemplo con múltiples imágenes
    const slider = await prisma.slider.create({
      data: {
        nombre: 'Banner Principal',
        description: 'Banner promocional para la temporada de verano',
        estado: 'activo'
      }
    });

    // Crear múltiples imágenes para el slider
    const sliderImages = await Promise.all([
      prisma.image.create({
        data: {
          url: 'https://example.com/images/banner-principal-1.jpg'
        }
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/banner-principal-2.jpg'
        }
      }),
      prisma.image.create({
        data: {
          url: 'https://example.com/images/banner-principal-3.jpg'
        }
      })
    ]);

    // Crear relaciones imageables para el slider
    await Promise.all(
      sliderImages.map(image =>
        prisma.imageable.create({
          data: {
            image_id: image.id,
            imageable_id: slider.id,
            imageable_type: 'Slider'
          }
        })
      )
    );

    console.log('Seed completado exitosamente');
  } catch (error) {
    console.error('Error en el seed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
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