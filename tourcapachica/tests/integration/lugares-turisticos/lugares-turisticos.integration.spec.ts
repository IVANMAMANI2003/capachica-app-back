import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { CreateLugarTuristicoDto } from '../../../src/lugares-turisticos/dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from '../../../src/lugares-turisticos/dto/update-lugar-turistico.dto';
import { Prisma } from '@prisma/client';
import { config } from 'dotenv';
import { getSupabaseClient } from '../../setup';
import * as bcrypt from 'bcrypt';

// Cargar variables de entorno de prueba
config({ path: '.env.test' });
const supabase = getSupabaseClient();

if (!process.env.TEST_SUPABASE_DATABASE_URL) {
  throw new Error('¡No se encontró la variable TEST_SUPABASE_DATABASE_URL! Asegúrate de usar .env.test');
}

jest.setTimeout(30000); // 30 segundos, puedes ajustar según lo que tarde tu entorno

describe('LugaresTuristicos Integration Tests', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  let authToken: string;
  let usuarioId: number;
  let lugarTuristicoId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaService = moduleFixture.get<PrismaService>(PrismaService);
    await app.init();

    // Limpiar la base de datos antes de las pruebas
    await prismaService.pagoDetalle.deleteMany();
    await prismaService.comprobante.deleteMany();
    await prismaService.pago.deleteMany();
    await prismaService.itinerarioReserva.deleteMany();
    await prismaService.reserva.deleteMany();
    await prismaService.tour.deleteMany();
    await prismaService.emprendimiento.deleteMany();
    await prismaService.lugarTuristico.deleteMany();
    await prismaService.usuariosRoles.deleteMany();
    await prismaService.usuario.deleteMany();
    await prismaService.persona.deleteMany();
    await prismaService.subdivision.deleteMany();
    await prismaService.country.deleteMany();

    // Crear Country de prueba
    const country = await prismaService.country.create({
      data: {
        name: 'Peru',
        codeIso: 'PER',
      },
    });
    // Crear Subdivision de prueba
    const subdivision = await prismaService.subdivision.create({
      data: {
        name: 'Puno',
        countryId: country.id,
      },
    });
    // Crear Persona de prueba
    const persona = await prismaService.persona.create({
      data: {
        nombre: 'Admin',
        apellidos: 'Test',
        direccion: 'Dir test',
        subdivisionId: subdivision.id,
      },
    });
    // Crear usuario de prueba (admin)
    const passwordHash = await bcrypt.hash('password123', 10);
    const user = await prismaService.usuario.create({
      data: {
        personaId: persona.id,
        email: 'admin@tourcapachica.com',
        passwordHash,
        estaActivo: true,
        emailVerified: true,
      },
    });
    usuarioId = user.id;

    // Asignar rol Emprendedor al usuario de prueba
    const rolEmprendedor = await prismaService.role.findFirst({ where: { nombre: 'Emprendedor' } });
    if (rolEmprendedor) {
      await prismaService.usuariosRoles.create({
        data: {
          usuarioId: user.id,
          rolId: rolEmprendedor.id,
        },
      });
    }

    // Obtener token de autenticación
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'admin@tourcapachica.com',
        password: 'password123',
      });
    authToken = loginResponse.body.access_token;

    // Crear lugar turístico destacado de prueba
    const lugar = await prismaService.lugarTuristico.create({
      data: {
        nombre: `Lugar Destacado Test ${Date.now()}`,
        descripcion: 'Desc test',
        direccion: 'Dir test',
        latitud: 1,
        longitud: 1,
        horarioApertura: new Date('2024-01-01T09:00:00'),
        horarioCierre: new Date('2024-01-01T18:00:00'),
        costoEntrada: new Prisma.Decimal(10),
        recomendaciones: 'Rec test',
        restricciones: 'Rest test',
        esDestacado: true,
        estado: 'ACTIVO',
      },
    });
    lugarTuristicoId = lugar.id;
  });

  afterAll(async () => {
    await prismaService.pagoDetalle.deleteMany();
    await prismaService.comprobante.deleteMany();
    await prismaService.pago.deleteMany();
    await prismaService.itinerarioReserva.deleteMany();
    await prismaService.reserva.deleteMany();
    await prismaService.tour.deleteMany();
    await prismaService.emprendimiento.deleteMany();
    await prismaService.lugarTuristico.deleteMany();
    await prismaService.usuariosRoles.deleteMany();
    await prismaService.usuario.deleteMany();
    await prismaService.persona.deleteMany();
    await prismaService.subdivision.deleteMany();
    await prismaService.country.deleteMany();
    await app.close();
  });

  describe('POST /lugares-turisticos', () => {
    it('should create a new tourist place', async () => {
      const createDto: CreateLugarTuristicoDto = {
        nombre: `Test Place ${Date.now()}`,
        descripcion: 'Test Description',
        direccion: 'Test Address',
        latitud: 123.456,
        longitud: 789.012,
        horarioApertura: new Date('2024-01-01T09:00:00'),
        horarioCierre: new Date('2024-01-01T18:00:00'),
        costoEntrada: new Prisma.Decimal(10),
        recomendaciones: 'Test Recommendation',
        restricciones: 'Test Restriction',
        esDestacado: true,
        estado: 'ACTIVO',
        imagenes: [],
      };

      const response = await request(app.getHttpServer())
        .post('/lugares-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.nombre).toBe(createDto.nombre);
      expect(response.body.descripcion).toBe(createDto.descripcion);
    });

    it('should fail to create a tourist place without authentication', async () => {
      const createDto: CreateLugarTuristicoDto = {
        nombre: `Test Place ${Date.now()}`,
        descripcion: 'Test Description',
        direccion: 'Test Address',
        latitud: 123.456,
        longitud: 789.012,
        horarioApertura: new Date('2024-01-01T09:00:00'),
        horarioCierre: new Date('2024-01-01T18:00:00'),
        costoEntrada: new Prisma.Decimal(10),
        recomendaciones: 'Test Recommendation',
        restricciones: 'Test Restriction',
        esDestacado: true,
        estado: 'ACTIVO',
        imagenes: [],
      };

      await request(app.getHttpServer())
        .post('/lugares-turisticos')
        .send(createDto)
        .expect(401);
    });
  });

  describe('GET /lugares-turisticos', () => {
    it('should return all tourist places', async () => {
      const response = await request(app.getHttpServer())
        .get('/lugares-turisticos')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /lugares-turisticos/:id', () => {
    let createdPlaceId: number;
    let createdPlaceName: string;

    beforeEach(async () => {
      // Crear un lugar turístico para las pruebas
      const createDto: CreateLugarTuristicoDto = {
        nombre: `Test Place for Get ${Date.now()}`,
        descripcion: 'Test Description',
        direccion: 'Test Address',
        latitud: 123.456,
        longitud: 789.012,
        horarioApertura: new Date('2024-01-01T09:00:00'),
        horarioCierre: new Date('2024-01-01T18:00:00'),
        costoEntrada: new Prisma.Decimal(10),
        recomendaciones: 'Test Recommendation',
        restricciones: 'Test Restriction',
        esDestacado: true,
        estado: 'ACTIVO',
        imagenes: [],
      };

      const response = await request(app.getHttpServer())
        .post('/lugares-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdPlaceId = response.body.id;
      createdPlaceName = response.body.nombre;
    });

    it('should return a tourist place by id', async () => {
      const response = await request(app.getHttpServer())
        .get(`/lugares-turisticos/${createdPlaceId}`)
        .expect(200);

      expect(response.body).toHaveProperty('id', createdPlaceId);
      expect(response.body.nombre).toBe(createdPlaceName);
    });

    it('should return 404 for non-existent place', async () => {
      await request(app.getHttpServer())
        .get('/lugares-turisticos/99999')
        .expect(404);
    });
  });

  describe('PATCH /lugares-turisticos/:id', () => {
    let createdPlaceId: number;

    beforeEach(async () => {
      // Crear un lugar turístico para las pruebas
      const createDto: CreateLugarTuristicoDto = {
        nombre: `Test Place for Update ${Date.now()}`,
        descripcion: 'Test Description',
        direccion: 'Test Address',
        latitud: 123.456,
        longitud: 789.012,
        horarioApertura: new Date('2024-01-01T09:00:00'),
        horarioCierre: new Date('2024-01-01T18:00:00'),
        costoEntrada: new Prisma.Decimal(10),
        recomendaciones: 'Test Recommendation',
        restricciones: 'Test Restriction',
        esDestacado: true,
        estado: 'ACTIVO',
        imagenes: [],
      };

      const response = await request(app.getHttpServer())
        .post('/lugares-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdPlaceId = response.body.id;
    });

    it('should update a tourist place', async () => {
      const updateDto: UpdateLugarTuristicoDto = {
        nombre: 'Updated Place',
        descripcion: 'Updated Description',
      };

      const response = await request(app.getHttpServer())
        .patch(`/lugares-turisticos/${createdPlaceId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateDto)
        .expect(200);

      expect(response.body.nombre).toBe(updateDto.nombre);
      expect(response.body.descripcion).toBe(updateDto.descripcion);
    });

    it('should fail to update without authentication', async () => {
      const updateDto: UpdateLugarTuristicoDto = {
        nombre: 'Updated Place',
        descripcion: 'Updated Description',
      };

      await request(app.getHttpServer())
        .patch(`/lugares-turisticos/${createdPlaceId}`)
        .send(updateDto)
        .expect(401);
    });
  });

  describe('DELETE /lugares-turisticos/:id', () => {
    let createdPlaceId: number;

    beforeEach(async () => {
      // Crear un lugar turístico para las pruebas
      const createDto: CreateLugarTuristicoDto = {
        nombre: `Test Place for Delete ${Date.now()}`,
        descripcion: 'Test Description',
        direccion: 'Test Address',
        latitud: 123.456,
        longitud: 789.012,
        horarioApertura: new Date('2024-01-01T09:00:00'),
        horarioCierre: new Date('2024-01-01T18:00:00'),
        costoEntrada: new Prisma.Decimal(10),
        recomendaciones: 'Test Recommendation',
        restricciones: 'Test Restriction',
        esDestacado: true,
        estado: 'ACTIVO',
        imagenes: [],
      };

      const response = await request(app.getHttpServer())
        .post('/lugares-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdPlaceId = response.body.id;
    });

    it('should delete a tourist place', async () => {
      await request(app.getHttpServer())
        .delete(`/lugares-turisticos/${createdPlaceId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      // Verificar que el lugar fue eliminado
      await request(app.getHttpServer())
        .get(`/lugares-turisticos/${createdPlaceId}`)
        .expect(404);
    });

    it('should fail to delete without authentication', async () => {
      await request(app.getHttpServer())
        .delete(`/lugares-turisticos/${createdPlaceId}`)
        .expect(401);
    });
  });

  describe('GET /lugares-turisticos/destacados', () => {
    beforeEach(async () => {
      // Crear lugares turísticos destacados para las pruebas
      const createDto: CreateLugarTuristicoDto = {
        nombre: `Test Destacado ${Date.now()}`,
        descripcion: 'Test Description',
        direccion: 'Test Address',
        latitud: 123.456,
        longitud: 789.012,
        horarioApertura: new Date('2024-01-01T09:00:00'),
        horarioCierre: new Date('2024-01-01T18:00:00'),
        costoEntrada: new Prisma.Decimal(10),
        recomendaciones: 'Test Recommendation',
        restricciones: 'Test Restriction',
        esDestacado: true,
        estado: 'ACTIVO',
        imagenes: [],
      };

      await request(app.getHttpServer())
        .post('/lugares-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);
    });

    it('should return highlighted tourist places', async () => {
      const response = await request(app.getHttpServer())
        .get('/lugares-turisticos/destacados')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body[0].esDestacado).toBe(true);
    });
  });
}); 