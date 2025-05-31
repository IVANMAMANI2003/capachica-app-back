import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { CreateServicioDto, CreateServicioPayloadDto } from '../../../src/servicios/dto/create-servicio.dto';
import { UpdateServicioDto } from '../../../src/servicios/dto/update-servicio.dto';
import { UpdateEstadoDto } from '../../../src/servicios/dto/update-estado.dto';
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

describe('Servicios Integration Tests', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  let authToken: string;
  let usuarioId: number;
  let emprendimientoId: number;
  let tipoServicioId: number;

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
    await prismaService.servicio.deleteMany();
    await prismaService.tipoServicio.deleteMany();
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
    tipoServicioId = tipoServicio.id;

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
    await prismaService.servicio.deleteMany();
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

  describe('POST /servicios', () => {
    it('should create a new servicio', async () => {
      const createDto: CreateServicioPayloadDto = {
        servicio: {
          tipoServicioId,
          nombre: `Servicio Test ${Date.now()}`,
          descripcion: 'Descripción del servicio',
          latitud: 1,
          longitud: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {},
          imagenes: [],
        },
        emprendimientoId
      };

      const response = await request(app.getHttpServer())
        .post('/servicios')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.nombre).toBe(createDto.servicio.nombre);
    });

    it('should fail to create without authentication', async () => {
      const createDto: CreateServicioPayloadDto = {
        servicio: {
          tipoServicioId,
          nombre: `Servicio Test ${Date.now()}`,
          descripcion: 'Descripción del servicio',
          latitud: 1,
          longitud: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {},
          imagenes: [],
        },
        emprendimientoId
      };

      await request(app.getHttpServer())
        .post('/servicios')
        .send(createDto)
        .expect(401);
    });
  });

  describe('GET /servicios', () => {
    it('should return all servicios', async () => {
      const response = await request(app.getHttpServer())
        .get('/servicios')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /servicios/:id', () => {
    let createdId: number;
    let createdName: string;

    beforeEach(async () => {
      const createDto: CreateServicioPayloadDto = {
        servicio: {
          tipoServicioId,
          nombre: `Servicio Get ${Date.now()}`,
          descripcion: 'Descripción del servicio',
          latitud: 1,
          longitud: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {},
          imagenes: [],
        },
        emprendimientoId
      };

      const response = await request(app.getHttpServer())
        .post('/servicios')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;
      createdName = response.body.nombre;
    });

    it('should return a servicio by id', async () => {
      const response = await request(app.getHttpServer())
        .get(`/servicios/${createdId}`)
        .expect(200);

      expect(response.body).toHaveProperty('id', createdId);
      expect(response.body.nombre).toBe(createdName);
    });

    it('should return 404 for non-existent servicio', async () => {
      await request(app.getHttpServer())
        .get('/servicios/99999')
        .expect(404);
    });
  });

  describe('PATCH /servicios/:id', () => {
    let createdId: number;

    beforeEach(async () => {
      const createDto: CreateServicioPayloadDto = {
        servicio: {
          tipoServicioId,
          nombre: `Servicio Update ${Date.now()}`,
          descripcion: 'Descripción del servicio',
          latitud: 1,
          longitud: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {},
          imagenes: [],
        },
        emprendimientoId
      };

      const response = await request(app.getHttpServer())
        .post('/servicios')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;
    });

    it('should update a servicio', async () => {
      const updateDto = {
        servicio: {
          nombre: `Servicio Updated ${Date.now()}`,
          descripcion: 'Descripción actualizada',
          imagenes: [],
        },
        emprendimientoId
      };

      const response = await request(app.getHttpServer())
        .patch(`/servicios/${createdId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateDto)
        .expect(200);

      expect(response.body.nombre).toBe(updateDto.servicio.nombre);
      expect(response.body.descripcion).toBe(updateDto.servicio.descripcion);
    });

    it('should fail to update without authentication', async () => {
      const updateDto: UpdateServicioDto = {
        nombre: `Servicio Updated ${Date.now()}`,
        descripcion: 'Descripción actualizada',
      };

      await request(app.getHttpServer())
        .patch(`/servicios/${createdId}`)
        .send(updateDto)
        .expect(401);
    });
  });

  describe('PATCH /servicios/:id/estado', () => {
    let createdId: number;

    beforeEach(async () => {
      const createDto: CreateServicioPayloadDto = {
        servicio: {
          tipoServicioId,
          nombre: `Servicio Estado ${Date.now()}`,
          descripcion: 'Descripción del servicio',
          latitud: 1,
          longitud: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {},
          imagenes: [],
        },
        emprendimientoId
      };

      const response = await request(app.getHttpServer())
        .post('/servicios')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;
    });

    it('should update servicio estado', async () => {
      const updateEstadoDto: UpdateEstadoDto = {
        estado: 'inactivo',
      };

      const response = await request(app.getHttpServer())
        .patch(`/servicios/${createdId}/estado`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateEstadoDto)
        .expect(200);

      expect(response.body.estado).toBe(updateEstadoDto.estado);
    });

    it('should fail to update estado without authentication', async () => {
      const updateEstadoDto: UpdateEstadoDto = {
        estado: 'inactivo',
      };

      await request(app.getHttpServer())
        .patch(`/servicios/${createdId}/estado`)
        .send(updateEstadoDto)
        .expect(401);
    });
  });

  describe('GET /servicios/tipo-servicio/:tipoServicioId', () => {
    it('should return servicios by tipo servicio', async () => {
      const response = await request(app.getHttpServer())
        .get(`/servicios/tipo-servicio/${tipoServicioId}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('DELETE /servicios/:id', () => {
    let createdId: number;

    beforeEach(async () => {
      const createDto: CreateServicioPayloadDto = {
        servicio: {
          tipoServicioId,
          nombre: `Servicio Delete ${Date.now()}`,
          descripcion: 'Descripción del servicio',
          latitud: 1,
          longitud: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {},
          imagenes: [],
        },
        emprendimientoId
      };

      const response = await request(app.getHttpServer())
        .post('/servicios')
        .set('Authorization', `Bearer ${authToken}`)
        .send(createDto);

      createdId = response.body.id;
    });

    it('should delete a servicio', async () => {
      await request(app.getHttpServer())
        .delete(`/servicios/${createdId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      await request(app.getHttpServer())
        .get(`/servicios/${createdId}`)
        .expect(404);
    });

    it('should fail to delete without authentication', async () => {
      await request(app.getHttpServer())
        .delete(`/servicios/${createdId}`)
        .expect(401);
    });
  });
}); 