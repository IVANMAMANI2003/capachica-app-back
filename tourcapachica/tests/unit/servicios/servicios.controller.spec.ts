import { Test, TestingModule } from '@nestjs/testing';
import { ServiciosController } from '../../../src/servicios/controllers/servicios.controller';
import { ServiciosService } from '../../../src/servicios/services/servicios.service';
import { CreateServicioDto } from '../../../src/servicios/dto/create-servicio.dto';
import { UpdateServicioDto } from '../../../src/servicios/dto/update-servicio.dto';
import { NotFoundException, ForbiddenException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

describe('ServiciosController', () => {
  let controller: ServiciosController;
  let mockServiciosService: jest.Mocked<ServiciosService>;
  let mockRequest: any;
  let mockSuperAdminRequest: any;
  let mockUsuarioRequest: any;

  const mockServicio = {
    id: 1,
    nombre: 'Test Servicio',
    descripcion: 'Test Description',
    tipoServicioId: 1,
    latitud: 0,
    longitud: 0,
    precioBase: new Prisma.Decimal(100),
    moneda: 'PEN',
    estado: 'ACTIVO',
    detallesServicio: {
      duracion: 2,
      cupoMinimo: 1,
      cupoMaximo: 10
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    imagenes: [
      { id: 1, url: 'img1.jpg' }
    ],
    tipoServicio: {
      id: 1,
      nombre: 'Tipo Test',
      descripcion: 'Descripción Test',
      createdAt: new Date(),
      updatedAt: new Date(),
      requiereCupo: true
    },
    serviciosEmprendedores: []
  };

  beforeEach(async () => {
    mockServiciosService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
      findFavorites: jest.fn(),
    } as any;

    mockRequest = {
      user: {
        roles: ['Emprendedor'],
        emprendimientoId: 1,
      },
    };
    mockSuperAdminRequest = {
      user: {
        roles: ['SuperAdmin'],
      },
    };
    mockUsuarioRequest = {
      user: {
        roles: ['Usuario'],
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiciosController],
      providers: [
        {
          provide: ServiciosService,
          useValue: mockServiciosService,
        },
      ],
    }).compile();

    controller = module.get<ServiciosController>(ServiciosController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new servicio', async () => {
      const payloadDto = {
        servicio: {
          nombre: 'Test Servicio',
          descripcion: 'Test Description',
          tipoServicioId: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {
            duracion: 2,
            cupoMinimo: 1,
            cupoMaximo: 10
          },
          imagenes: []
        }
      };

      mockServiciosService.create.mockResolvedValue(mockServicio);

      const result = await controller.create(payloadDto, mockRequest);

      expect(result).toEqual(mockServicio);
      expect(mockServiciosService.create).toHaveBeenCalledWith(payloadDto.servicio, mockRequest.user.emprendimientoId);
    });

    it('should throw ForbiddenException if user is not EMPRENDEDOR', async () => {
      const payloadDto = {
        servicio: {
          nombre: 'Test Servicio',
          descripcion: 'Test Description',
          tipoServicioId: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {
            duracion: 2,
            cupoMinimo: 1,
            cupoMaximo: 10
          },
          imagenes: []
        }
      };

      await expect(controller.create(payloadDto, mockUsuarioRequest)).rejects.toThrow(ForbiddenException);
    });
  });

  describe('findAll', () => {
    it('should return an array of servicios', async () => {
      const expected = [mockServicio];

      mockServiciosService.findAll.mockResolvedValue(expected);

      const result = await controller.findAll();

      expect(result).toEqual(expected);
      expect(mockServiciosService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a servicio by id', async () => {
      mockServiciosService.findOne.mockResolvedValue(mockServicio);

      const result = await controller.findOne('1');

      expect(result).toEqual(mockServicio);
      expect(mockServiciosService.findOne).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if servicio not found', async () => {
      mockServiciosService.findOne.mockRejectedValue(new NotFoundException());

      await expect(controller.findOne('999')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a servicio', async () => {
      const payloadDto = {
        servicio: {
          nombre: 'Updated Servicio',
          descripcion: 'Updated Description',
          precioBase: 150,
          estado: 'INACTIVO'
        }
      };

      const updatedServicio = {
        ...mockServicio,
        ...payloadDto.servicio,
        precioBase: new Prisma.Decimal(150)
      };

      mockServiciosService.update.mockResolvedValue(updatedServicio);

      const result = await controller.update('1', payloadDto, mockRequest);

      expect(result).toEqual(updatedServicio);
      expect(mockServiciosService.update).toHaveBeenCalledWith(1, payloadDto.servicio, mockRequest.user.emprendimientoId);
    });

    it('should throw ForbiddenException if user is not EMPRENDEDOR', async () => {
      const payloadDto = {
        servicio: {
          nombre: 'Updated Servicio',
          descripcion: 'Updated Description',
          precioBase: 150,
          estado: 'INACTIVO'
        }
      };

      await expect(controller.update('1', payloadDto, mockUsuarioRequest)).rejects.toThrow(ForbiddenException);
    });

    it('should throw NotFoundException if servicio not found', async () => {
      const payloadDto = {
        servicio: {
          nombre: 'Updated Servicio',
          descripcion: 'Updated Description',
          precioBase: 150,
          estado: 'INACTIVO'
        }
      };

      mockServiciosService.update.mockRejectedValue(new NotFoundException());

      await expect(controller.update('999', payloadDto, mockRequest)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a servicio', async () => {
      mockServiciosService.remove.mockResolvedValue(mockServicio);

      const result = await controller.remove('1', mockRequest);

      expect(result).toEqual(mockServicio);
      expect(mockServiciosService.remove).toHaveBeenCalledWith(1, mockRequest.user.emprendimientoId);
    });

    it('should throw ForbiddenException if user is not EMPRENDEDOR', async () => {
      await expect(controller.remove('1', mockUsuarioRequest)).rejects.toThrow(ForbiddenException);
    });

    it('should throw NotFoundException if servicio not found', async () => {
      mockServiciosService.remove.mockRejectedValue(new NotFoundException());

      await expect(controller.remove('999', mockRequest)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findFavorites', () => {
    it('should return favorite servicios for a user', async () => {
      const expected = [mockServicio];
      mockServiciosService.findFavorites.mockResolvedValue(expected);
      const result = await controller.findFavorites(mockRequest);
      expect(result).toEqual(expected);
      expect(mockServiciosService.findFavorites).toHaveBeenCalledWith(mockRequest.user.id);
    });
  });
}); 