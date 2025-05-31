import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { CreatePaqueteTuristicoDto } from '../../../src/paquetes-turisticos/dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from '../../../src/paquetes-turisticos/dto/update-paquete-turistico.dto';
import { Prisma } from '@prisma/client';
import { config } from 'dotenv';
import { getSupabaseClient } from '../../setup';
import * as bcrypt from 'bcryptjs';
import { BadRequestException } from '@nestjs/common';

config({ path: '.env.test' });
const supabase = getSupabaseClient();

if (!process.env.TEST_SUPABASE_DATABASE_URL) {
  throw new Error('¡No se encontró la variable TEST_SUPABASE_DATABASE_URL! Asegúrate de usar .env.test');
}

jest.setTimeout(30000);

describe('PaquetesTuristicos Integration Tests', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  let authToken: string;
  let usuarioId: number;
  let emprendimientoId: number;
  let servicioId: number;

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
    await prismaService.resena.deleteMany();
    await prismaService.favoritoPaqueteTuristico.deleteMany();
    await prismaService.servicioPaquete.deleteMany();
    await prismaService.servicio.deleteMany();
    await prismaService.paqueteTuristico.deleteMany();
    await prismaService.tipoServicio.deleteMany();
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

    // Crear lugar turístico de prueba
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

    // Crear emprendimiento de prueba
    const emprendimiento = await prismaService.emprendimiento.create({
      data: {
        nombre: `Emprendimiento Test ${Date.now()}`,
        tipo: 'Turismo',
        usuarioId: user.id,
        lugarTuristicoId: lugar.id,
      },
    });
    emprendimientoId = emprendimiento.id;

    // Crear tipo de servicio de prueba
    const tipoServicio = await prismaService.tipoServicio.create({
      data: {
        nombre: `Tipo Servicio Test ${Date.now()}`,
        descripcion: 'Descripción del tipo de servicio',
        requiereCupo: true,
      },
    });

    // Crear servicio de prueba
    const servicio = await prismaService.servicio.create({
      data: {
        nombre: `Servicio Test ${Date.now()}`,
        descripcion: 'Descripción del servicio',
        latitud: 1,
        longitud: 1,
        precioBase: 100,
        moneda: 'PEN',
        estado: 'ACTIVO',
        detallesServicio: {},
        tipoServicioId: tipoServicio.id,
      },
    });
    servicioId = servicio.id;

    // Obtener token de autenticación
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'admin@tourcapachica.com',
        password: 'password123',
      });
    authToken = loginResponse.body.access_token;
  });

  afterAll(async () => {
    await prismaService.pagoDetalle.deleteMany();
    await prismaService.comprobante.deleteMany();
    await prismaService.pago.deleteMany();
    await prismaService.itinerarioReserva.deleteMany();
    await prismaService.reserva.deleteMany();
    await prismaService.tour.deleteMany();
    await prismaService.resena.deleteMany();
    await prismaService.favoritoPaqueteTuristico.deleteMany();
    await prismaService.servicioPaquete.deleteMany();
    await prismaService.servicio.deleteMany();
    await prismaService.paqueteTuristico.deleteMany();
    await prismaService.tipoServicio.deleteMany();
    await prismaService.emprendimiento.deleteMany();
    await prismaService.lugarTuristico.deleteMany();
    await prismaService.usuariosRoles.deleteMany();
    await prismaService.usuario.deleteMany();
    await prismaService.persona.deleteMany();
    await prismaService.subdivision.deleteMany();
    await prismaService.country.deleteMany();
    await app.close();
  });

  describe('POST /paquetes-turisticos', () => {
    it('should create a new paquete turistico', async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        emprendimientoId,
        nombre: `Paquete Test ${Date.now()}`,
        descripcion: 'Descripción del paquete turístico',
        precio: 150,
        estado: 'activo',
        servicios: [servicioId],
        imagenes: ['https://example.com/image1.jpg'],
      };

      const response = await request(app.getHttpServer())
        .post('/paquetes-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.nombre).toBe(createDto.nombre);
      expect(response.body.precio).toBe(createDto.precio);
    });

    it('should fail to create without authentication', async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        emprendimientoId,
        nombre: `Paquete Test ${Date.now()}`,
        descripcion: 'Descripción del paquete turístico',
        precio: 150,
        estado: 'activo',
        servicios: [servicioId],
        imagenes: ['https://example.com/image1.jpg'],
      };

      await request(app.getHttpServer())
        .post('/paquetes-turisticos')
        .send(createDto)
        .expect(401);
    });
  });

  describe('GET /paquetes-turisticos', () => {
    it('should return all paquetes turisticos', async () => {
      const response = await request(app.getHttpServer())
        .get('/paquetes-turisticos')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /paquetes-turisticos/:id', () => {
    let createdId: number;
    let createdName: string;

    beforeEach(async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        emprendimientoId,
        nombre: `Paquete Get ${Date.now()}`,
        descripcion: 'Descripción del paquete turístico',
        precio: 150,
        estado: 'activo',
        servicios: [servicioId],
        imagenes: ['https://example.com/image1.jpg'],
      };

      const response = await request(app.getHttpServer())
        .post('/paquetes-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;
      createdName = response.body.nombre;
    });

    it('should return a paquete turistico by id', async () => {
      const response = await request(app.getHttpServer())
        .get(`/paquetes-turisticos/${createdId}`)
        .expect(200);

      expect(response.body).toHaveProperty('id', createdId);
      expect(response.body.nombre).toBe(createdName);
    });

    it('should return 404 for non-existent paquete turistico', async () => {
      await request(app.getHttpServer())
        .get('/paquetes-turisticos/99999')
        .expect(404);
    });
  });

  describe('GET /paquetes-turisticos/emprendimiento/:emprendimientoId', () => {
    it('should return paquetes turisticos by emprendimiento', async () => {
      const response = await request(app.getHttpServer())
        .get(`/paquetes-turisticos/emprendimiento/${emprendimientoId}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('PATCH /paquetes-turisticos/:id', () => {
    let createdId: number;

    beforeEach(async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        emprendimientoId,
        nombre: `Paquete Update ${Date.now()}`,
        descripcion: 'Descripción del paquete turístico',
        precio: 150,
        estado: 'activo',
        servicios: [servicioId],
        imagenes: ['https://example.com/image1.jpg'],
      };

      const response = await request(app.getHttpServer())
        .post('/paquetes-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;
    });

    it('should update a paquete turistico', async () => {
      const updateDto: UpdatePaqueteTuristicoDto = {
        nombre: `Paquete Updated ${Date.now()}`,
        descripcion: 'Descripción actualizada',
        precio: 200,
      };

      const response = await request(app.getHttpServer())
        .patch(`/paquetes-turisticos/${createdId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateDto)
        .expect(200);

      expect(response.body.nombre).toBe(updateDto.nombre);
      expect(response.body.descripcion).toBe(updateDto.descripcion);
      expect(response.body.precio).toBe(updateDto.precio);
    });

    it('should fail to update without authentication', async () => {
      const updateDto: UpdatePaqueteTuristicoDto = {
        nombre: `Paquete Updated ${Date.now()}`,
        descripcion: 'Descripción actualizada',
      };

      await request(app.getHttpServer())
        .patch(`/paquetes-turisticos/${createdId}`)
        .send(updateDto)
        .expect(401);
    });
  });

  describe('DELETE /paquetes-turisticos/:id', () => {
    let createdId: number;

    beforeEach(async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        emprendimientoId,
        nombre: `Paquete Delete ${Date.now()}`,
        descripcion: 'Descripción del paquete turístico',
        precio: 150,
        estado: 'activo',
        servicios: [servicioId],
        imagenes: ['https://example.com/image1.jpg'],
      };

      const response = await request(app.getHttpServer())
        .post('/paquetes-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;
    });

    it('should delete a paquete turistico', async () => {
      await request(app.getHttpServer())
        .delete(`/paquetes-turisticos/${createdId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      await request(app.getHttpServer())
        .get(`/paquetes-turisticos/${createdId}`)
        .expect(404);
    });

    it('should fail to delete without authentication', async () => {
      await request(app.getHttpServer())
        .delete(`/paquetes-turisticos/${createdId}`)
        .expect(401);
    });
  });

  describe('POST /paquetes-turisticos/:id/favoritosPaquetes', () => {
    let createdId: number;

    beforeEach(async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        emprendimientoId,
        nombre: `Paquete Favorito ${Date.now()}`,
        descripcion: 'Descripción del paquete turístico',
        precio: 150,
        estado: 'activo',
        servicios: [servicioId],
        imagenes: ['https://example.com/image1.jpg'],
      };

      const response = await request(app.getHttpServer())
        .post('/paquetes-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;
    });

    it('should add paquete turistico to favorites', async () => {
      await request(app.getHttpServer())
        .post(`/paquetes-turisticos/${createdId}/favoritosPaquetes`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(201);
    });

    it('should fail to add to favorites without authentication', async () => {
      await request(app.getHttpServer())
        .post(`/paquetes-turisticos/${createdId}/favoritosPaquetes`)
        .expect(401);
    });
  });

  describe('DELETE /paquetes-turisticos/:id/favoritosPaquetes', () => {
    let createdId: number;

    beforeEach(async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        emprendimientoId,
        nombre: `Paquete Favorito Delete ${Date.now()}`,
        descripcion: 'Descripción del paquete turístico',
        precio: 150,
        estado: 'activo',
        servicios: [servicioId],
        imagenes: ['https://example.com/image1.jpg'],
      };

      const response = await request(app.getHttpServer())
        .post('/paquetes-turisticos')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;

      // Add to favorites first
      await request(app.getHttpServer())
        .post(`/paquetes-turisticos/${createdId}/favoritosPaquetes`)
        .set('Authorization', `Bearer ${authToken}`);
    });

    it('should remove paquete turistico from favorites', async () => {
      await request(app.getHttpServer())
        .delete(`/paquetes-turisticos/${createdId}/favoritosPaquetes`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);
    });

    it('should fail to remove from favorites without authentication', async () => {
      await request(app.getHttpServer())
        .delete(`/paquetes-turisticos/${createdId}/favoritosPaquetes`)
        .expect(401);
    });
  });
}); 