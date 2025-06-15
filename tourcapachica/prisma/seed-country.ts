import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

interface CountryData {
  name: string;
  codeIso: string;
  subdivisions: string[];
}

async function main() {
  try {
    // Vaciar tablas respetando claves foráneas
    await prisma.usuariosRoles.deleteMany({});
    await prisma.usuario.deleteMany({});
    await prisma.persona.deleteMany({});
    await prisma.subdivision.deleteMany({});
    await prisma.country.deleteMany({});

    // Read the JSON file
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

    // Obtener subdivisiones Lima y Puno para las personas
    const lima = await prisma.subdivision.findFirst({
      where: { name: 'Lima' }
    });
    const puno = await prisma.subdivision.findFirst({
      where: { name: 'Puno' }
    });

    if (!lima || !puno) {
      throw new Error('No se encontraron las subdivisiones Lima o Puno');
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

    // Obtener roles
    const superAdminRole = await prisma.role.findFirst({ where: { nombre: 'SUPER_ADMIN' } });
    const emprendedorRole = await prisma.role.findFirst({ where: { nombre: 'EMPRENDEDOR' } });
    const userRole = await prisma.role.findFirst({ where: { nombre: 'USER' } });
    const guiaRole = await prisma.role.findFirst({ where: { nombre: 'GUIA' } });

    if (!superAdminRole || !emprendedorRole || !userRole || !guiaRole) {
      throw new Error('No se encontraron todos los roles necesarios');
    }

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

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
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