import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { CreateEmprendimientoDto } from '../../../src/emprendimientos/dto/create-emprendimiento.dto';
import { UpdateEmprendimientoDto } from '../../../src/emprendimientos/dto/update-emprendimiento.dto';
import { CreateLugarTuristicoDto } from '../../../src/lugares-turisticos/dto/create-lugar-turistico.dto';
import { Prisma } from '@prisma/client';
import { config } from 'dotenv';
import { getSupabaseClient } from '../../setup';
import * as bcrypt from 'bcryptjs';

config({ path: '.env.test' });
const supabase = getSupabaseClient();

if (!process.env.TEST_SUPABASE_DATABASE_URL) {
  throw new Error('¡No se encontró la variable TEST_SUPABASE_DATABASE_URL! Asegúrate de usar .env.test');
}

jest.setTimeout(30000);

describe('Emprendimientos Integration Tests', () => {
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

    // Crear lugar turístico de prueba para los emprendimientos
    const lugar = await prismaService.lugarTuristico.create({
      data: {
        nombre: `Lugar Test ${Date.now()}`,
        descripcion: 'Desc test',
        direccion: 'Dir test',
        latitud: 1,
        longitud: 1,
        horarioApertura: new Date('2024-01-01T09:00:00'),
        horarioCierre: new Date('2024-01-01T18:00:00'),
        costoEntrada: new Prisma.Decimal(10),
        recomendaciones: 'Rec test',
        restricciones: 'Rest test',
        esDestacado: false,
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

  describe('POST /emprendimientos', () => {
    it('should create a new emprendimiento', async () => {
      const createDto: CreateEmprendimientoDto = {
        usuarioId,
        lugarTuristicoId,
        nombre: `Emprendimiento Test ${Date.now()}`,
        tipo: 'Turismo',
      };
      const response = await request(app.getHttpServer())
        .post('/emprendimientos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto)
        .expect(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.nombre).toBe(createDto.nombre);
    });
    it('should fail to create without authentication', async () => {
      const createDto: CreateEmprendimientoDto = {
        usuarioId,
        lugarTuristicoId,
        nombre: `Emprendimiento Test ${Date.now()}`,
        tipo: 'Turismo',
      };
      await request(app.getHttpServer())
        .post('/emprendimientos')
        .send(createDto)
        .expect(401);
    });
  });

  describe('GET /emprendimientos', () => {
    it('should return all emprendimientos', async () => {
      const response = await request(app.getHttpServer())
        .get('/emprendimientos')
        .expect(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /emprendimientos/:id', () => {
    let createdId: number;
    let createdName: string;
    beforeEach(async () => {
      const createDto: CreateEmprendimientoDto = {
        usuarioId,
        lugarTuristicoId,
        nombre: `Emprendimiento Get ${Date.now()}`,
        tipo: 'Turismo',
      };
      const response = await request(app.getHttpServer())
        .post('/emprendimientos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);
      createdId = response.body.id;
      createdName = response.body.nombre;
    });
    it('should return an emprendimiento by id', async () => {
      const response = await request(app.getHttpServer())
        .get(`/emprendimientos/${createdId}`)
        .expect(200);
      expect(response.body).toHaveProperty('id', createdId);
      expect(response.body.nombre).toBe(createdName);
    });
    it('should return 404 for non-existent emprendimiento', async () => {
      await request(app.getHttpServer())
        .get('/emprendimientos/99999')
        .expect(404);
    });
  });

  describe('PATCH /emprendimientos/:id', () => {
    let createdId: number;
    beforeEach(async () => {
      const createDto: CreateEmprendimientoDto = {
        usuarioId,
        lugarTuristicoId,
        nombre: `Emprendimiento Update ${Date.now()}`,
        tipo: 'Turismo',
      };
      const response = await request(app.getHttpServer())
        .post('/emprendimientos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);
      createdId = response.body.id;
    });
    it('should update an emprendimiento', async () => {
      const updateDto: UpdateEmprendimientoDto = {
        nombre: `Emprendimiento Updated ${Date.now()}`,
        descripcion: 'Actualizado',
      };
      const response = await request(app.getHttpServer())
        .patch(`/emprendimientos/${createdId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateDto)
        .expect(200);
      expect(response.body.nombre).toBe(updateDto.nombre);
      expect(response.body.descripcion).toBe(updateDto.descripcion);
    });
    it('should fail to update without authentication', async () => {
      const updateDto: UpdateEmprendimientoDto = {
        nombre: `Emprendimiento Updated ${Date.now()}`,
        descripcion: 'Actualizado',
      };
      await request(app.getHttpServer())
        .patch(`/emprendimientos/${createdId}`)
        .send(updateDto)
        .expect(401);
    });
  });

  describe('DELETE /emprendimientos/:id', () => {
    let createdId: number;
    beforeEach(async () => {
      const createDto: CreateEmprendimientoDto = {
        usuarioId,
        lugarTuristicoId,
        nombre: `Emprendimiento Delete ${Date.now()}`,
        tipo: 'Turismo',
      };
      const response = await request(app.getHttpServer())
        .post('/emprendimientos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);
      createdId = response.body.id;
    });
    it('should delete an emprendimiento', async () => {
      await request(app.getHttpServer())
        .delete(`/emprendimientos/${createdId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);
      await request(app.getHttpServer())
        .get(`/emprendimientos/${createdId}`)
        .expect(404);
    });
    it('should fail to delete without authentication', async () => {
      await request(app.getHttpServer())
        .delete(`/emprendimientos/${createdId}`)
        .expect(401);
    });
  });
}); 