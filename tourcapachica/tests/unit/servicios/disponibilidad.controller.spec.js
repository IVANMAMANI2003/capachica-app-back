"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const disponibilidad_controller_1 = require("../../../src/servicios/controllers/disponibilidad.controller");
const disponibilidad_service_1 = require("../../../src/servicios/services/disponibilidad.service");
const common_1 = require("@nestjs/common");
describe('DisponibilidadController', () => {
    let controller;
    let service;
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
        const module = await testing_1.Test.createTestingModule({
            controllers: [disponibilidad_controller_1.DisponibilidadController],
            providers: [
                {
                    provide: disponibilidad_service_1.DisponibilidadService,
                    useValue: mockDisponibilidadService,
                },
            ],
        }).compile();
        controller = module.get(disponibilidad_controller_1.DisponibilidadController);
        service = module.get(disponibilidad_service_1.DisponibilidadService);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('create', () => {
        it('should create a new disponibilidad', async () => {
            const createDto = {
                servicioId: 1,
                fechaInicio: '2024-03-20',
                fechaFin: '2024-03-21',
                cuposDisponibles: 10,
                precioEspecial: 100,
            };
            const expected = Object.assign({ id: 1 }, createDto);
            mockDisponibilidadService.createDisponibilidad.mockResolvedValue(expected);
            const result = await controller.create(createDto);
            expect(result).toEqual(expected);
            expect(mockDisponibilidadService.createDisponibilidad).toHaveBeenCalledWith(createDto);
        });
    });
    describe('createBatch', () => {
        it('should create multiple disponibilidades', async () => {
            const createDtos = [
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
            mockDisponibilidadService.findByServicio.mockRejectedValue(new common_1.NotFoundException());
            await expect(controller.findByServicio('999')).rejects.toThrow(common_1.NotFoundException);
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
            mockDisponibilidadService.findOne.mockRejectedValue(new common_1.NotFoundException());
            await expect(controller.findOne('999')).rejects.toThrow(common_1.NotFoundException);
        });
    });
});
//# sourceMappingURL=disponibilidad.controller.spec.js.map