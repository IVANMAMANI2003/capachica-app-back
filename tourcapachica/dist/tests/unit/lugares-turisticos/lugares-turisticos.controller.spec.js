"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const lugares_turisticos_controller_1 = require("../../../src/lugares-turisticos/lugares-turisticos.controller");
const lugares_turisticos_service_1 = require("../../../src/lugares-turisticos/lugares-turisticos.service");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
describe('LugaresTuristicosController', () => {
    let controller;
    let service;
    const mockLugaresTuristicosService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
        findDestacados: jest.fn(),
        AddFavorite: jest.fn(),
        removeFavorite: jest.fn(),
        findFavorites: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [lugares_turisticos_controller_1.LugaresTuristicosController],
            providers: [
                {
                    provide: lugares_turisticos_service_1.LugaresTuristicosService,
                    useValue: mockLugaresTuristicosService,
                },
            ],
        }).compile();
        controller = module.get(lugares_turisticos_controller_1.LugaresTuristicosController);
        service = module.get(lugares_turisticos_service_1.LugaresTuristicosService);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('create', () => {
        it('should create a new tourist place', async () => {
            const createDto = {
                nombre: 'Test Place',
                descripcion: 'Test Description',
                direccion: 'Test Address',
                latitud: 123.456,
                longitud: 789.012,
                horarioApertura: new Date('2024-01-01T09:00:00'),
                horarioCierre: new Date('2024-01-01T18:00:00'),
                costoEntrada: new client_1.Prisma.Decimal(10),
                recomendaciones: 'Test Recommendation',
                restricciones: 'Test Restriction',
                esDestacado: true,
                estado: 'ACTIVO',
                imagenes: [],
            };
            const expectedResult = Object.assign({ id: 1 }, createDto);
            mockLugaresTuristicosService.create.mockResolvedValue(expectedResult);
            const result = await controller.create(createDto);
            expect(result).toEqual(expectedResult);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });
    describe('findAll', () => {
        it('should return an array of tourist places', async () => {
            const expectedResult = [
                { id: 1, nombre: 'Place 1' },
                { id: 2, nombre: 'Place 2' },
            ];
            mockLugaresTuristicosService.findAll.mockResolvedValue(expectedResult);
            const result = await controller.findAll();
            expect(result).toEqual(expectedResult);
            expect(service.findAll).toHaveBeenCalled();
        });
    });
    describe('findOne', () => {
        it('should return a tourist place by id', async () => {
            const expectedResult = {
                id: 1,
                nombre: 'Test Place',
                imagenes: [],
            };
            mockLugaresTuristicosService.findOne.mockResolvedValue(expectedResult);
            const result = await controller.findOne('1');
            expect(result).toEqual(expectedResult);
            expect(service.findOne).toHaveBeenCalledWith(1);
        });
        it('should throw HttpException when place is not found', async () => {
            mockLugaresTuristicosService.findOne.mockResolvedValue(null);
            await expect(controller.findOne('999')).rejects.toThrow(new common_1.HttpException('Lugar turístico no encontrado', common_1.HttpStatus.NOT_FOUND));
        });
    });
    describe('update', () => {
        it('should update a tourist place', async () => {
            const updateDto = {
                nombre: 'Updated Place',
                descripcion: 'Updated Description',
            };
            const existingPlace = {
                id: 1,
                nombre: 'Test Place',
            };
            const expectedResult = Object.assign({ id: 1 }, updateDto);
            mockLugaresTuristicosService.findOne.mockResolvedValue(existingPlace);
            mockLugaresTuristicosService.update.mockResolvedValue(expectedResult);
            const result = await controller.update('1', updateDto);
            expect(result).toEqual(expectedResult);
            expect(service.update).toHaveBeenCalledWith(1, updateDto);
        });
        it('should throw HttpException when place to update is not found', async () => {
            mockLugaresTuristicosService.findOne.mockResolvedValue(null);
            await expect(controller.update('999', { nombre: 'Updated' })).rejects.toThrow(new common_1.HttpException('Lugar turístico no encontrado', common_1.HttpStatus.NOT_FOUND));
        });
    });
    describe('remove', () => {
        it('should remove a tourist place', async () => {
            const existingPlace = {
                id: 1,
                nombre: 'Test Place',
            };
            mockLugaresTuristicosService.findOne.mockResolvedValue(existingPlace);
            mockLugaresTuristicosService.remove.mockResolvedValue(existingPlace);
            const result = await controller.remove('1');
            expect(result).toEqual(existingPlace);
            expect(service.remove).toHaveBeenCalledWith(1);
        });
        it('should throw HttpException when place to remove is not found', async () => {
            mockLugaresTuristicosService.findOne.mockResolvedValue(null);
            await expect(controller.remove('999')).rejects.toThrow(new common_1.HttpException('Lugar turístico no encontrado', common_1.HttpStatus.NOT_FOUND));
        });
    });
    describe('findDestacados', () => {
        it('should return highlighted tourist places', async () => {
            const expectedResult = [
                { id: 1, nombre: 'Destacado 1', esDestacado: true },
                { id: 2, nombre: 'Destacado 2', esDestacado: true },
            ];
            mockLugaresTuristicosService.findDestacados.mockResolvedValue(expectedResult);
            const result = await controller.findDestacados();
            expect(result).toEqual(expectedResult);
            expect(service.findDestacados).toHaveBeenCalled();
        });
    });
    describe('favorites', () => {
        const mockUser = { id: 1, sub: 1 };
        it('should add a place to favorites', async () => {
            const expectedResult = {
                id: 1,
                usuarioId: 1,
                lugarTuristicoId: 1,
            };
            mockLugaresTuristicosService.AddFavorite.mockResolvedValue(expectedResult);
            const result = await controller.AddFavorite('1', { user: mockUser });
            expect(result).toEqual(expectedResult);
            expect(service.AddFavorite).toHaveBeenCalledWith(mockUser.id, 1);
        });
        it('should remove a place from favorites', async () => {
            const expectedResult = { count: 1 };
            mockLugaresTuristicosService.removeFavorite.mockResolvedValue(expectedResult);
            const result = await controller.removeFavorite('1', { user: mockUser });
            expect(result).toEqual(expectedResult);
            expect(service.removeFavorite).toHaveBeenCalledWith(mockUser.id, 1);
        });
        it('should get user favorites', async () => {
            const expectedResult = [
                {
                    id: 1,
                    nombre: 'Favorite Place 1',
                    imagenes: [],
                },
            ];
            mockLugaresTuristicosService.findFavorites.mockResolvedValue(expectedResult);
            const result = await controller.findFavorites({ user: mockUser });
            expect(result).toEqual(expectedResult);
            expect(service.findFavorites).toHaveBeenCalledWith(mockUser.sub);
        });
    });
});
//# sourceMappingURL=lugares-turisticos.controller.spec.js.map