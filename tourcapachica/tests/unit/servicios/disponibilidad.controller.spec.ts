import { Test, TestingModule } from '@nestjs/testing';
import { DisponibilidadController } from '../../../src/servicios/controllers/disponibilidad.controller';
import { DisponibilidadService } from '../../../src/servicios/services/disponibilidad.service';
import { CreateServicioDisponibilidadDto } from '../../../src/servicios/dto/create-servicio-disponibilidad.dto';
import { NotFoundException } from '@nestjs/common';

describe('DisponibilidadController', () => {
  let controller: DisponibilidadController;
  let service: DisponibilidadService;

  const mockDisponibilidadService = {
    createDisponibilidad: jest.fn(),
    createDisponibilidades: jest.fn(),
    findByServicio: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisponibilidadController],
      providers: [
        {
          provide: DisponibilidadService,
          useValue: mockDisponibilidadService,
        },
      ],
    }).compile();

    controller = module.get<DisponibilidadController>(DisponibilidadController);
    service = module.get<DisponibilidadService>(DisponibilidadService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
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

      mockDisponibilidadService.createDisponibilidad.mockResolvedValue(expected);

      const result = await controller.create(createDto);

      expect(result).toEqual(expected);
      expect(mockDisponibilidadService.createDisponibilidad).toHaveBeenCalledWith(createDto);
    });
  });

  describe('createBatch', () => {
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

      mockDisponibilidadService.createDisponibilidades.mockResolvedValue(expected);

      const result = await controller.createBatch(createDtos);

      expect(result).toEqual(expected);
      expect(mockDisponibilidadService.createDisponibilidades).toHaveBeenCalledWith(createDtos);
    });
  });

  describe('findByServicio', () => {
    it('should return disponibilidades for a service', async () => {
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

      mockDisponibilidadService.findByServicio.mockResolvedValue(expected);

      const result = await controller.findByServicio('1');

      expect(result).toEqual(expected);
      expect(mockDisponibilidadService.findByServicio).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if servicio not found', async () => {
      mockDisponibilidadService.findByServicio.mockRejectedValue(new NotFoundException());

      await expect(controller.findByServicio('999')).rejects.toThrow(NotFoundException);
    });
  });

  describe('findOne', () => {
    it('should return a single disponibilidad', async () => {
      const expected = {
        id: 1,
        servicioId: 1,
        fechaInicio: new Date('2024-03-20'),
        fechaFin: new Date('2024-03-21'),
        cuposDisponibles: 10,
        precioEspecial: 100,
      };

      mockDisponibilidadService.findOne.mockResolvedValue(expected);

      const result = await controller.findOne('1');

      expect(result).toEqual(expected);
      expect(mockDisponibilidadService.findOne).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if disponibilidad not found', async () => {
      mockDisponibilidadService.findOne.mockRejectedValue(new NotFoundException());

      await expect(controller.findOne('999')).rejects.toThrow(NotFoundException);
    });
  });
});