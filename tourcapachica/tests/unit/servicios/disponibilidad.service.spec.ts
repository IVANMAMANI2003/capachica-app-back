import { Test, TestingModule } from '@nestjs/testing';
import { DisponibilidadService } from '../../../src/servicios/services/disponibilidad.service';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { CreateServicioDisponibilidadDto } from '../../../src/servicios/dto/create-servicio-disponibilidad.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('DisponibilidadService', () => {
  let service: DisponibilidadService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    $transaction: jest.fn(),
    servicio: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
    },
    servicioDisponibilidad: {
      create: jest.fn(),
      createMany: jest.fn(),
      findMany: jest.fn(),
      findFirst: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DisponibilidadService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<DisponibilidadService>(DisponibilidadService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createDisponibilidad', () => {
    it('should create a new disponibilidad', async () => {
      const createDto: CreateServicioDisponibilidadDto = {
        servicioId: 1,
        fechaInicio: '2024-03-20',
        fechaFin: '2024-03-21',
        cuposDisponibles: 10,
        precioEspecial: 100,
      };

      const expected = {
        id: 1,
        ...createDto,
      };

      mockPrismaService.servicio.findUnique.mockResolvedValue({ id: 1 });
      mockPrismaService.servicioDisponibilidad.create.mockResolvedValue(expected);

      const result = await service.createDisponibilidad(createDto);

      expect(result).toEqual(expected);
      expect(mockPrismaService.servicioDisponibilidad.create).toHaveBeenCalledWith({
        data: {
          servicioId: createDto.servicioId,
          fechaInicio: new Date(createDto.fechaInicio),
          fechaFin: new Date(createDto.fechaFin),
          cuposDisponibles: createDto.cuposDisponibles,
          precioEspecial: createDto.precioEspecial,
        },
      });
    });

    it('should throw NotFoundException if servicio not found', async () => {
      const createDto: CreateServicioDisponibilidadDto = {
        servicioId: 1,
        fechaInicio: '2024-03-20',
        fechaFin: '2024-03-21',
        cuposDisponibles: 10,
        precioEspecial: 100,
      };

      mockPrismaService.servicio.findUnique.mockResolvedValue(null);

      await expect(service.createDisponibilidad(createDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('createDisponibilidades', () => {
    it('should create multiple disponibilidades', async () => {
      const createDtos: CreateServicioDisponibilidadDto[] = [
        {
          servicioId: 1,
          fechaInicio: '2024-03-20',
          fechaFin: '2024-03-21',
          cuposDisponibles: 10,
          precioEspecial: 100,
        },
        {
          servicioId: 1,
          fechaInicio: '2024-03-22',
          fechaFin: '2024-03-23',
          cuposDisponibles: 10,
          precioEspecial: 100,
        },
      ];

      const expected = {
        count: 2,
      };

      mockPrismaService.servicio.findMany.mockResolvedValue([{ id: 1 }]);
      mockPrismaService.servicioDisponibilidad.createMany.mockResolvedValue({ count: 2 });

      const result = await service.createDisponibilidades(createDtos);

      expect(result).toEqual(expected);
      expect(mockPrismaService.servicioDisponibilidad.createMany).toHaveBeenCalledWith({
        data: createDtos.map(dto => ({
          servicioId: dto.servicioId,
          fechaInicio: new Date(dto.fechaInicio),
          fechaFin: new Date(dto.fechaFin),
          cuposDisponibles: dto.cuposDisponibles,
          precioEspecial: dto.precioEspecial,
        })),
      });
    });

    it('should throw NotFoundException if servicio not found', async () => {
      const createDtos: CreateServicioDisponibilidadDto[] = [
        {
          servicioId: 1,
          fechaInicio: '2024-03-20',
          fechaFin: '2024-03-21',
          cuposDisponibles: 10,
          precioEspecial: 100,
        },
      ];

      mockPrismaService.servicio.findMany.mockResolvedValue([]);

      await expect(service.createDisponibilidades(createDtos)).rejects.toThrow(NotFoundException);
    });
  });

  describe('getDisponibilidad', () => {
    it('should return disponibilidad for a service', async () => {
      const expected = [
        {
          id: 1,
          servicioId: 1,
          fechaInicio: new Date('2024-03-20'),
          fechaFin: new Date('2024-03-21'),
          cuposDisponibles: 10,
          precioEspecial: 100,
        },
      ];

      mockPrismaService.servicio.findUnique.mockResolvedValue({ id: 1 });
      mockPrismaService.servicioDisponibilidad.findMany.mockResolvedValue(expected);

      const result = await service.getDisponibilidad(1);

      expect(result).toEqual(expected);
      expect(mockPrismaService.servicioDisponibilidad.findMany).toHaveBeenCalledWith({
        where: { servicioId: 1 },
        orderBy: { fechaInicio: 'asc' },
      });
    });

    it('should throw NotFoundException if servicio not found', async () => {
      mockPrismaService.servicio.findUnique.mockResolvedValue(null);

      await expect(service.getDisponibilidad(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('getDisponibilidadByFecha', () => {
    it('should return disponibilidad for a service on a specific date', async () => {
      const fecha = '2024-03-20';
      const expected = {
        id: 1,
        servicioId: 1,
        fechaInicio: new Date(fecha),
        fechaFin: new Date('2024-03-21'),
        cuposDisponibles: 10,
        precioEspecial: 100,
      };

      mockPrismaService.servicio.findUnique.mockResolvedValue({ id: 1 });
      mockPrismaService.servicioDisponibilidad.findFirst.mockResolvedValue(expected);

      const result = await service.getDisponibilidadByFecha(1, fecha);

      expect(result).toEqual(expected);
      expect(mockPrismaService.servicioDisponibilidad.findFirst).toHaveBeenCalledWith({
        where: {
          servicioId: 1,
          fechaInicio: new Date(fecha),
        },
      });
    });

    it('should throw NotFoundException if servicio not found', async () => {
      mockPrismaService.servicio.findUnique.mockResolvedValue(null);

      await expect(service.getDisponibilidadByFecha(1, '2024-03-20')).rejects.toThrow(NotFoundException);
    });
  });
});