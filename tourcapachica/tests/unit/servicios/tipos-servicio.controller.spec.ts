import { Test, TestingModule } from '@nestjs/testing';
import { TiposServicioController } from '../../../src/servicios/controllers/tipos-servicio.controller';
import { TiposServicioService } from '../../../src/servicios/services/tipos-servicio.service';
import { CreateTipoServicioDto } from '../../../src/servicios/dto/create-tipo-servicio.dto';
import { UpdateTipoServicioDto } from '../../../src/servicios/dto/update-tipo-servicio.dto';
import { NotFoundException } from '@nestjs/common';

describe('TiposServicioController', () => {
  let controller: TiposServicioController;
  let service: TiposServicioService;

  const mockTiposServicioService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposServicioController],
      providers: [
        {
          provide: TiposServicioService,
          useValue: mockTiposServicioService,
        },
      ],
    }).compile();

    controller = module.get<TiposServicioController>(TiposServicioController);
    service = module.get<TiposServicioService>(TiposServicioService);
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

      mockTiposServicioService.create.mockResolvedValue(expected);

      const result = await controller.create(createDto);

      expect(result).toEqual(expected);
      expect(mockTiposServicioService.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of tipos servicio', async () => {
      const expected = [
        {
          id: 1,
          nombre: 'Test Tipo 1',
          descripcion: 'Test Description 1',
          requiereCupo: true,
        },
        {
          id: 2,
          nombre: 'Test Tipo 2',
          descripcion: 'Test Description 2',
          requiereCupo: false,
        },
      ];

      mockTiposServicioService.findAll.mockResolvedValue(expected);

      const result = await controller.findAll();

      expect(result).toEqual(expected);
      expect(mockTiposServicioService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single tipo servicio', async () => {
      const expected = {
        id: 1,
        nombre: 'Test Tipo',
        descripcion: 'Test Description',
        requiereCupo: true,
      };

      mockTiposServicioService.findOne.mockResolvedValue(expected);

      const result = await controller.findOne('1');

      expect(result).toEqual(expected);
      expect(mockTiposServicioService.findOne).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if tipo servicio not found', async () => {
      mockTiposServicioService.findOne.mockRejectedValue(new NotFoundException());

      await expect(controller.findOne('999')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a tipo servicio', async () => {
      const updateDto: UpdateTipoServicioDto = {
        nombre: 'Updated Tipo',
        descripcion: 'Updated Description',
        requiereCupo: false,
      };

      const expected = {
        id: 1,
        ...updateDto,
      };

      mockTiposServicioService.update.mockResolvedValue(expected);

      const result = await controller.update('1', updateDto);

      expect(result).toEqual(expected);
      expect(mockTiposServicioService.update).toHaveBeenCalledWith(1, updateDto);
    });

    it('should throw NotFoundException if tipo servicio not found', async () => {
      const updateDto: UpdateTipoServicioDto = {
        nombre: 'Updated Tipo',
        descripcion: 'Updated Description',
        requiereCupo: false,
      };

      mockTiposServicioService.update.mockRejectedValue(new NotFoundException());

      await expect(controller.update('999', updateDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a tipo servicio', async () => {
      const expected = {
        id: 1,
        nombre: 'Test Tipo',
        descripcion: 'Test Description',
        requiereCupo: true,
      };

      mockTiposServicioService.remove.mockResolvedValue(expected);

      const result = await controller.remove('1');

      expect(result).toEqual(expected);
      expect(mockTiposServicioService.remove).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if tipo servicio not found', async () => {
      mockTiposServicioService.remove.mockRejectedValue(new NotFoundException());

      await expect(controller.remove('999')).rejects.toThrow(NotFoundException);
    });
  });
}); 