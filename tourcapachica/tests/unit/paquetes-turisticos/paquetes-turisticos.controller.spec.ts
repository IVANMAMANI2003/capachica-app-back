import { Test, TestingModule } from '@nestjs/testing';
import { PaquetesTuristicosController } from '../../../src/paquetes-turisticos/paquetes-turisticos.controller';
import { PaquetesTuristicosService } from '../../../src/paquetes-turisticos/paquetes-turisticos.service';
import { CreatePaqueteTuristicoDto } from '../../../src/paquetes-turisticos/dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from '../../../src/paquetes-turisticos/dto/update-paquete-turistico.dto';
import { AddServiciosDto } from '../../../src/paquetes-turisticos/dto/add-servicios.dto';
import { NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UpdateDisponibilidadDto } from '../../../src/paquetes-turisticos/dto/update-disponibilidad.dto';
import { CreateDisponibilidadDto } from '../../../src/paquetes-turisticos/dto/create-disponibilidad.dto';
import { EstadoPaquete } from '../../../src/paquetes-turisticos/enums/estado-paquete.enum';
import { PrismaService } from '../../../src/prisma/prisma.service';

describe('PaquetesTuristicosController', () => {
  let controller: PaquetesTuristicosController;
  let mockPaquetesTuristicosService: jest.Mocked<PaquetesTuristicosService>;
  let mockRequest: any;
  let mockSuperAdminRequest: any;
  let mockUsuarioRequest: any;

  const mockDecimal = (val: string | number) => ({
    toString: () => String(val),
    valueOf: () => Number(val),
    d: [],
    e: 0,
    s: 1
  });
  const mockPaquete = {
    id: 1,
    nombre: 'Test Paquete',
    descripcion: 'Test Description',
    precio: 100,
    estado: EstadoPaquete.activo,
    emprendimientoId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    imagenes: [
      { id: 1, url: 'img1.jpg' }
    ],
    disponibilidad: [
      {
        id: 1,
        estado: 'disponible',
        createdAt: new Date(),
        updatedAt: new Date(),
        paqueteId: 1,
        fechaInicio: new Date(),
        fechaFin: new Date(),
        cuposDisponibles: 10,
        cuposMaximos: 20,
        precioEspecial: new Prisma.Decimal(150.00),
        notas: 'Test'
      }
    ],
    emprendimiento: {
      id: 1,
      nombre: 'Test Emprendimiento',
      descripcion: 'Test Description',
      estado: 'activo',
      createdAt: new Date(),
      updatedAt: new Date(),
      usuarioId: 1,
      lugarTuristicoId: 1,
      tipo: 'restaurante',
      direccion: 'Test Address',
      latitud: -12.0464,
      longitud: -77.0428,
      horarioAtencion: '9:00-18:00',
      telefono: '123456789',
      email: 'test@test.com',
      sitioWeb: 'https://test.com',
      redesSociales: {},
      contactoTelefono: '123456789',
      contactoEmail: 'contact@test.com',
      fechaAprobacion: null
    },
    servicios: [
      {
        id: 1,
        servicioId: 1,
        orden: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        paqueteTuristicoId: 1,
        servicio: {
          id: 1,
          nombre: 'Servicio Test',
          descripcion: 'Descripción Test',
          estado: 'activo',
          createdAt: new Date(),
          updatedAt: new Date(),
          latitud: 0,
          longitud: 0,
          tipoServicioId: 1,
          precioBase: new Prisma.Decimal(50.00),
          moneda: 'PEN',
          detallesServicio: '{}'
        }
      }
    ]
  };

  const mockPaqueteEntity = {
    ...mockPaquete,
    precio: new Prisma.Decimal(100),
  };
  const mockPaqueteResponse = {
    ...mockPaquete,
    precio: 100,
  };

  beforeEach(async () => {
    mockPaquetesTuristicosService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
      findByEmprendimiento: jest.fn(),
      addServicios: jest.fn(),
      findFavorites: jest.fn(),
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
      createDisponibilidad: jest.fn(),
      getDisponibilidadesPaquete: jest.fn(),
      getDisponibilidad: jest.fn(),
      updateDisponibilidad: jest.fn(),
      deleteDisponibilidad: jest.fn(),
      updateEstado: jest.fn(),
      exportarDatos: jest.fn(),
    } as any;

    mockRequest = {
      user: {
        roles: ['Emprendedor'],
        emprendimientoId: 1,
        id: 1
      },
    };
    mockSuperAdminRequest = {
      user: {
        roles: ['SuperAdmin'],
        id: 1
      },
    };
    mockUsuarioRequest = {
      user: {
        roles: ['Usuario'],
        id: 1
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaquetesTuristicosController],
      providers: [
        {
          provide: PaquetesTuristicosService,
          useValue: mockPaquetesTuristicosService,
        },
        {
          provide: PrismaService,
          useValue: {
            emprendimiento: {
              findFirst: jest.fn().mockResolvedValue({ id: 1 })
            }
          },
        },
      ],
    }).compile();

    controller = module.get<PaquetesTuristicosController>(PaquetesTuristicosController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new paquete turistico', async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        nombre: 'Test Paquete',
        descripcion: 'Test Description',
        precio: 100,
        estado: 'activo',
        emprendimientoId: 1,
        servicios: [1]
      };

      mockPaquetesTuristicosService.create.mockResolvedValue(mockPaqueteResponse);

      const result = await controller.create(createDto, mockRequest);

      expect(result).toEqual(mockPaqueteResponse);
      expect(mockPaquetesTuristicosService.create).toHaveBeenCalledWith(createDto);
    });

    it('should throw BadRequestException if service throws', async () => {
      const createDto: CreatePaqueteTuristicoDto = {
        nombre: 'Test Paquete',
        descripcion: 'Test Description',
        precio: 100,
        estado: 'activo',
        emprendimientoId: 1,
        servicios: [1]
      };
      mockPaquetesTuristicosService.create.mockRejectedValue(new Error('fail'));
      await expect(controller.create(createDto, mockRequest)).rejects.toThrow(Error);
    });
  });

  describe('findAll', () => {
    it('should return an array of paquetes turisticos', async () => {
      const expected = [mockPaqueteResponse];

      mockPaquetesTuristicosService.findAll.mockResolvedValue(expected);

      const result = await controller.findAll();

      expect(result).toEqual(expected);
      expect(mockPaquetesTuristicosService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a paquete turistico by id', async () => {
      mockPaquetesTuristicosService.findOne.mockResolvedValue(mockPaqueteResponse);

      const result = await controller.findOne('1');

      expect(result).toEqual(mockPaqueteResponse);
      expect(mockPaquetesTuristicosService.findOne).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if paquete turistico not found', async () => {
      mockPaquetesTuristicosService.findOne.mockRejectedValue(new NotFoundException());

      await expect(controller.findOne('999')).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByEmprendimiento', () => {
    it('should return paquetes turisticos by emprendimiento id', async () => {
      const expected = [mockPaquete];
      mockPaquetesTuristicosService.findByEmprendimiento.mockResolvedValue(expected);

      const result = await controller.findByEmprendimiento('1');

      expect(result).toEqual(expected);
      expect(mockPaquetesTuristicosService.findByEmprendimiento).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a paquete turistico', async () => {
      const updateDto: UpdatePaqueteTuristicoDto = {
        nombre: 'Updated Paquete',
        descripcion: 'Updated Description',
        precio: 150,
        estado: 'inactivo'
      };

      const updatedPaquete = {
        ...mockPaquete,
        nombre: updateDto.nombre || mockPaquete.nombre,
        descripcion: updateDto.descripcion || mockPaquete.descripcion,
        precio: updateDto.precio || mockPaquete.precio,
        estado: updateDto.estado || mockPaquete.estado
      };

      mockPaquetesTuristicosService.findOne.mockResolvedValue({ ...mockPaquete, emprendimientoId: 1 });
      mockPaquetesTuristicosService.update.mockResolvedValue(updatedPaquete);

      const result = await controller.update('1', updateDto, mockRequest);

      expect(result).toEqual(updatedPaquete);
      expect(mockPaquetesTuristicosService.update).toHaveBeenCalledWith(1, updateDto);
    });

    it('should throw BadRequestException if service throws', async () => {
      mockPaquetesTuristicosService.update.mockRejectedValue(new Error('fail'));
      await expect(controller.update('999', { } as any, mockRequest)).rejects.toThrow(Error);
    });
  });

  describe('remove', () => {
    it('should remove a paquete turistico', async () => {
      mockPaquetesTuristicosService.findOne.mockResolvedValue(mockPaqueteResponse);
      mockPaquetesTuristicosService.remove.mockResolvedValue(mockPaqueteEntity);
      const result = await controller.remove('1', mockRequest);
      expect(result).toEqual(mockPaqueteEntity);
      expect(mockPaquetesTuristicosService.remove).toHaveBeenCalledWith(1);
    });

    it('should throw BadRequestException if service throws', async () => {
      mockPaquetesTuristicosService.findOne.mockResolvedValue(mockPaqueteResponse);
      mockPaquetesTuristicosService.remove.mockRejectedValue(new Error('fail'));
      await expect(controller.remove('999', mockRequest)).rejects.toThrow(Error);
    });
  });

  describe('addServicios', () => {
    it('should add servicios to a paquete turistico', async () => {
      const addServiciosDto: AddServiciosDto = {
        servicioIds: [1, 2]
      };

      mockPaquetesTuristicosService.addServicios.mockResolvedValue(mockPaqueteEntity);

      const result = await controller.addServicios(1, addServiciosDto, mockRequest);

      expect(result).toEqual(mockPaqueteEntity);
      expect(mockPaquetesTuristicosService.addServicios).toHaveBeenCalledWith(1, addServiciosDto, mockRequest.user.id);
    });

    it('should throw ForbiddenException if user is not authorized', async () => {
      const addServiciosDto: AddServiciosDto = {
        servicioIds: [1, 2]
      };

      mockPaquetesTuristicosService.addServicios.mockRejectedValue(new ForbiddenException());

      await expect(controller.addServicios(1, addServiciosDto, mockUsuarioRequest)).rejects.toThrow(ForbiddenException);
    });
  });

  describe('findFavorites', () => {
    it('should return favorite paquetes for a user', async () => {
      const expected = [mockPaqueteEntity];
      mockPaquetesTuristicosService.findFavorites.mockResolvedValue(expected);
      const result = await controller.findFavorites(mockRequest);
      expect(result).toEqual(expected);
      expect(mockPaquetesTuristicosService.findFavorites).toHaveBeenCalledWith(mockRequest.user.id);
    });
  });

  describe('addFavorite', () => {
    it('should add a paquete turistico to favorites', async () => {
      const mockFavorite = {
        id: 1,
        usuarioId: mockRequest.user.id,
        paqueteTuristicoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPaquetesTuristicosService.addFavorite.mockResolvedValue(mockFavorite);
      const result = await controller.addFavorite('1', mockRequest);
      expect(result).toEqual(mockFavorite);
      expect(mockPaquetesTuristicosService.addFavorite).toHaveBeenCalledWith(1, mockRequest.user.id);
    });
    it('should throw BadRequestException if already favorite', async () => {
      mockPaquetesTuristicosService.addFavorite.mockRejectedValue(new BadRequestException());
      await expect(controller.addFavorite('1', mockRequest)).rejects.toThrow(BadRequestException);
    });
  });

  describe('removeFavorite', () => {
    it('should remove a paquete turistico from favorites', async () => {
      const mockFavorite = {
        id: 1,
        usuarioId: mockRequest.user.id,
        paqueteTuristicoId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPaquetesTuristicosService.removeFavorite.mockResolvedValue(mockFavorite);
      const result = await controller.removeFavorite('1', mockRequest);
      expect(result).toEqual(mockFavorite);
      expect(mockPaquetesTuristicosService.removeFavorite).toHaveBeenCalledWith(1, mockRequest.user.id);
    });
    it('should throw BadRequestException if not favorite', async () => {
      mockPaquetesTuristicosService.removeFavorite.mockRejectedValue(new BadRequestException());
      await expect(controller.removeFavorite('1', mockRequest)).rejects.toThrow(BadRequestException);
    });
  });

  describe('getDisponibilidadesPaquete', () => {
    it('should return disponibilidades for a paquete', async () => {
      const mockDisponibilidades = [{
        id: 1,
        estado: 'disponible',
        createdAt: new Date(),
        updatedAt: new Date(),
        paqueteId: 1,
        fechaInicio: new Date(),
        fechaFin: new Date(),
        cuposDisponibles: 10,
        cuposMaximos: 20,
        precioEspecial: new Prisma.Decimal(150.00),
        notas: 'Test'
      }];
      mockPaquetesTuristicosService.getDisponibilidadesPaquete.mockResolvedValue(mockDisponibilidades);
      const result = await controller.getDisponibilidadesPaquete(1);
      expect(result).toEqual(mockDisponibilidades);
      expect(mockPaquetesTuristicosService.getDisponibilidadesPaquete).toHaveBeenCalledWith(1);
    });
  });

  describe('createDisponibilidad', () => {
    it('should create disponibilidad for a paquete', async () => {
      const dto: CreateDisponibilidadDto = {
        fechaInicio: '2024-03-01',
        fechaFin: '2024-03-31',
        cuposDisponibles: 10,
        cuposMaximos: 20,
        precioEspecial: 150,
        notas: 'Test',
      };
      const mockDisponibilidad = {
        id: 1,
        estado: 'disponible',
        createdAt: new Date(),
        updatedAt: new Date(),
        paqueteId: 1,
        fechaInicio: new Date(dto.fechaInicio),
        fechaFin: new Date(dto.fechaFin),
        cuposDisponibles: dto.cuposDisponibles,
        cuposMaximos: dto.cuposMaximos,
        precioEspecial: new Prisma.Decimal(dto.precioEspecial),
        notas: dto.notas
      };
      mockPaquetesTuristicosService.createDisponibilidad.mockResolvedValue(mockDisponibilidad);
      const result = await controller.createDisponibilidad(1, dto);
      expect(result).toEqual(mockDisponibilidad);
      expect(mockPaquetesTuristicosService.createDisponibilidad).toHaveBeenCalledWith(1, dto);
    });
  });

  describe('updateDisponibilidad', () => {
    it('should update disponibilidad for a paquete', async () => {
      const dto: UpdateDisponibilidadDto = {
        fechaInicio: '2024-03-01',
        fechaFin: '2024-03-31',
        cuposDisponibles: 5,
        cuposMaximos: 15,
        precioEspecial: 200,
        notas: 'Updated',
      };
      const mockDisponibilidad = {
        id: 1,
        estado: 'disponible',
        createdAt: new Date(),
        updatedAt: new Date(),
        paqueteId: 1,
        fechaInicio: new Date(dto.fechaInicio),
        fechaFin: new Date(dto.fechaFin),
        cuposDisponibles: dto.cuposDisponibles,
        cuposMaximos: dto.cuposMaximos,
        precioEspecial: new Prisma.Decimal(dto.precioEspecial),
        notas: dto.notas
      };
      mockPaquetesTuristicosService.updateDisponibilidad.mockResolvedValue(mockDisponibilidad);
      const result = await controller.updateDisponibilidad(1, dto);
      expect(result).toEqual(mockDisponibilidad);
      expect(mockPaquetesTuristicosService.updateDisponibilidad).toHaveBeenCalledWith(1, dto);
    });
  });

  describe('deleteDisponibilidad', () => {
    it('should delete disponibilidad for a paquete', async () => {
      const mockDisponibilidad = {
        id: 1,
        estado: 'disponible',
        createdAt: new Date(),
        updatedAt: new Date(),
        paqueteId: 1,
        fechaInicio: new Date(),
        fechaFin: new Date(),
        cuposDisponibles: 10,
        cuposMaximos: 20,
        precioEspecial: new Prisma.Decimal(150.00),
        notas: 'Test'
      };
      mockPaquetesTuristicosService.deleteDisponibilidad.mockResolvedValue(mockDisponibilidad);
      const result = await controller.deleteDisponibilidad(1);
      expect(result).toEqual(mockDisponibilidad);
      expect(mockPaquetesTuristicosService.deleteDisponibilidad).toHaveBeenCalledWith(1);
    });
  });

  describe('updateEstado', () => {
    it('should update estado of a paquete', async () => {
      const updatedPaquete = { ...mockPaqueteEntity, estado: EstadoPaquete.inactivo };
      mockPaquetesTuristicosService.updateEstado.mockResolvedValue(updatedPaquete);
      const result = await controller.updateEstado('1', { estado: EstadoPaquete.inactivo });
      expect(result).toEqual(updatedPaquete);
      expect(mockPaquetesTuristicosService.updateEstado).toHaveBeenCalledWith(1, EstadoPaquete.inactivo);
    });
  });

  describe('exportarDatos', () => {
    it('should export datos of a paquete', async () => {
      const mockExport = { paquete: mockPaquete, reservas: [], resenas: [] };
      mockPaquetesTuristicosService.exportarDatos.mockResolvedValue(mockExport);
      const req = { user: { id: 1 } };
      const result = await controller.exportarDatos(1, req);
      expect(result).toEqual(mockExport);
      expect(mockPaquetesTuristicosService.exportarDatos).toHaveBeenCalledWith(1, 1);
    });
  });
}); 