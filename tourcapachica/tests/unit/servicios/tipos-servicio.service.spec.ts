import { Test, TestingModule } from '@nestjs/testing';
import { TiposServicioService } from '../../../src/servicios/services/tipos-servicio.service';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { CreateTipoServicioDto } from '../../../src/servicios/dto/create-tipo-servicio.dto';
import { NotFoundException } from '@nestjs/common';

describe('TiposServicioService', () => {
  let service: TiposServicioService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    tipoServicio: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TiposServicioService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<TiposServicioService>(TiposServicioService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new tipo servicio', async () => {
      const createDto: CreateTipoServicioDto = {
        nombre: 'Test Tipo',
        descripcion: 'Test Description',
        requiereCupo: true,
      };

      const expected = {
        id: 1,
        ...createDto,
      };

      mockPrismaService.tipoServicio.create.mockResolvedValue(expected);

      const result = await service.create(createDto);

      expect(result).toEqual(expected);
      expect(mockPrismaService.tipoServicio.create).toHaveBeenCalledWith({
        data: createDto,
      });
    });
  });

  describe('findAll', () => {
    it('should return all tipos servicio', async () => {
      const expected = [
        { id: 1, nombre: 'Tipo 1' },
        { id: 2, nombre: 'Tipo 2' },
      ];

      mockPrismaService.tipoServicio.findMany.mockResolvedValue(expected);

      const result = await service.findAll();

      expect(result).toEqual(expected);
      expect(mockPrismaService.tipoServicio.findMany).toHaveBeenCalledWith({
        include: {
          servicios: true,
        },
      });
    });
  });

  describe('findOne', () => {
    it('should return a tipo servicio by id', async () => {
      const expected = {
        id: 1,
        nombre: 'Test Tipo',
      };

      mockPrismaService.tipoServicio.findUnique.mockResolvedValue(expected);

      const result = await service.findOne(1);

      expect(result).toEqual(expected);
      expect(mockPrismaService.tipoServicio.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: {
          servicios: true,
        },
      });
    });

    it('should throw NotFoundException if tipo servicio not found', async () => {
      mockPrismaService.tipoServicio.findUnique.mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a tipo servicio', async () => {
      const updateDto: CreateTipoServicioDto = {
        nombre: 'Updated Tipo',
        descripcion: 'Updated Description',
        requiereCupo: false,
      };

      const expected = {
        id: 1,
        ...updateDto,
      };

      mockPrismaService.tipoServicio.update.mockResolvedValue(expected);

      const result = await service.update(1, updateDto);

      expect(result).toEqual(expected);
      expect(mockPrismaService.tipoServicio.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });

    it('should throw NotFoundException if tipo servicio not found', async () => {
      const updateDto: CreateTipoServicioDto = {
        nombre: 'Test Tipo',
        descripcion: 'Test Description',
        requiereCupo: true,
      };
      mockPrismaService.tipoServicio.update.mockRejectedValue(new Error());

      await expect(service.update(999, updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a tipo servicio', async () => {
      const expected = {
        id: 1,
        nombre: 'Test Tipo',
      };

      mockPrismaService.tipoServicio.delete.mockResolvedValue(expected);

      const result = await service.remove(1);

      expect(result).toEqual(expected);
      expect(mockPrismaService.tipoServicio.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw NotFoundException if tipo servicio not found', async () => {
      mockPrismaService.tipoServicio.delete.mockRejectedValue(new Error());

      await expect(service.remove(999)).rejects.toThrow(NotFoundException);
    });
  });
});