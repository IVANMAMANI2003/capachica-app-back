import { Test, TestingModule } from '@nestjs/testing';
import { LugaresTuristicosController } from '../../src/lugares-turisticos/lugares-turisticos.controller';
import { LugaresTuristicosService } from '../../src/lugares-turisticos/lugares-turisticos.service';
import { CreateLugarTuristicoDto } from '../../src/lugares-turisticos/dto/create-lugar-turistico.dto';
import { UpdateLugarTuristicoDto } from '../../src/lugares-turisticos/dto/update-lugar-turistico.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('LugaresTuristicosController', () => {
  let controller: LugaresTuristicosController;
  let service: LugaresTuristicosService;

  const mockLugaresTuristicosService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findDestacados: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LugaresTuristicosController],
      providers: [
        {
          provide: LugaresTuristicosService,
          useValue: mockLugaresTuristicosService,
        },
      ],
    }).compile();

    controller = module.get<LugaresTuristicosController>(LugaresTuristicosController);
    service = module.get<LugaresTuristicosService>(LugaresTuristicosService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('debería crear un lugar turístico exitosamente', async () => {
      const createDto: CreateLugarTuristicoDto = {
        nombre: 'Playa Hermosa',
        descripcion: 'Hermosa playa con arena blanca',
        direccion: 'Capachica, Puno',
        coordenadas: '-15.7667, -69.6833',
        estado: 'activo',
        esDestacado: true,
        imagenes: [
          { url: 'https://example.com/playa-hermosa.jpg' }
        ]
      };

      const expectedResult = { id: 1, ...createDto };
      mockLugaresTuristicosService.create.mockResolvedValue(expectedResult);

      const result = await controller.create(createDto);
      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('findAll', () => {
    it('debería retornar un array de lugares turísticos', async () => {
      const expectedResult = [
        {
          id: 1,
          nombre: 'Playa Hermosa',
          descripcion: 'Hermosa playa con arena blanca',
          direccion: 'Capachica, Puno',
          coordenadas: '-15.7667, -69.6833',
          estado: 'activo',
          esDestacado: true,
          imagenes: [
            { url: 'https://example.com/playa-hermosa.jpg' }
          ]
        },
      ];

      mockLugaresTuristicosService.findAll.mockResolvedValue(expectedResult);

      const result = await controller.findAll();
      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findDestacados', () => {
    it('debería retornar lugares turísticos destacados', async () => {
      const expectedResult = [
        {
          id: 1,
          nombre: 'Playa Hermosa',
          descripcion: 'Hermosa playa con arena blanca',
          direccion: 'Capachica, Puno',
          coordenadas: '-15.7667, -69.6833',
          estado: 'activo',
          esDestacado: true,
          imagenes: [
            { url: 'https://example.com/playa-hermosa.jpg' }
          ]
        },
      ];

      mockLugaresTuristicosService.findDestacados.mockResolvedValue(expectedResult);

      const result = await controller.findDestacados();
      expect(result).toEqual(expectedResult);
      expect(service.findDestacados).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('debería retornar un lugar turístico por ID', async () => {
      const expectedResult = {
        id: 1,
        nombre: 'Playa Hermosa',
        descripcion: 'Hermosa playa con arena blanca',
        direccion: 'Capachica, Puno',
        coordenadas: '-15.7667, -69.6833',
        estado: 'activo',
        esDestacado: true,
        imagenes: [
          { url: 'https://example.com/playa-hermosa.jpg' }
        ]
      };

      mockLugaresTuristicosService.findOne.mockResolvedValue(expectedResult);

      const result = await controller.findOne('1');
      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });

    it('debería lanzar una excepción cuando el lugar turístico no existe', async () => {
      mockLugaresTuristicosService.findOne.mockResolvedValue(null);

      await expect(controller.findOne('999')).rejects.toThrow(
        new HttpException('Lugar turístico no encontrado', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('update', () => {
    it('debería actualizar un lugar turístico exitosamente', async () => {
      const updateDto: UpdateLugarTuristicoDto = {
        nombre: 'Playa Hermosa Actualizada',
      };

      const existingLugar = {
        id: 1,
        nombre: 'Playa Hermosa',
        descripcion: 'Hermosa playa con arena blanca',
        direccion: 'Capachica, Puno',
        coordenadas: '-15.7667, -69.6833',
        estado: 'activo',
        esDestacado: true,
        imagenes: [
          { url: 'https://example.com/playa-hermosa.jpg' }
        ]
      };

      const expectedResult = { ...existingLugar, ...updateDto };

      mockLugaresTuristicosService.findOne.mockResolvedValue(existingLugar);
      mockLugaresTuristicosService.update.mockResolvedValue(expectedResult);

      const result = await controller.update('1', updateDto);
      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(1, updateDto);
    });

    it('debería lanzar una excepción cuando el lugar turístico no existe', async () => {
      mockLugaresTuristicosService.findOne.mockResolvedValue(null);

      await expect(controller.update('999', { nombre: 'Nuevo Nombre' })).rejects.toThrow(
        new HttpException('Lugar turístico no encontrado', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('remove', () => {
    it('debería eliminar un lugar turístico exitosamente', async () => {
      const existingLugar = {
        id: 1,
        nombre: 'Playa Hermosa',
        descripcion: 'Hermosa playa con arena blanca',
        direccion: 'Capachica, Puno',
        coordenadas: '-15.7667, -69.6833',
        estado: 'activo',
        esDestacado: true,
        imagenes: [
          { url: 'https://example.com/playa-hermosa.jpg' }
        ]
      };

      mockLugaresTuristicosService.findOne.mockResolvedValue(existingLugar);
      mockLugaresTuristicosService.remove.mockResolvedValue(existingLugar);

      const result = await controller.remove('1');
      expect(result).toEqual(existingLugar);
      expect(service.remove).toHaveBeenCalledWith(1);
    });

    it('debería lanzar una excepción cuando el lugar turístico no existe', async () => {
      mockLugaresTuristicosService.findOne.mockResolvedValue(null);

      await expect(controller.remove('999')).rejects.toThrow(
        new HttpException('Lugar turístico no encontrado', HttpStatus.NOT_FOUND),
      );
    });
  });
}); 