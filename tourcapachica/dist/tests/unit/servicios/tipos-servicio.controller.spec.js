"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tipos_servicio_controller_1 = require("../../../src/servicios/controllers/tipos-servicio.controller");
const tipos_servicio_service_1 = require("../../../src/servicios/services/tipos-servicio.service");
const common_1 = require("@nestjs/common");
describe('TiposServicioController', () => {
    let controller;
    let service;
    const mockTiposServicioService = {
        create: jest.fn(),
        findAll: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
        remove: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [tipos_servicio_controller_1.TiposServicioController],
            providers: [
                {
                    provide: tipos_servicio_service_1.TiposServicioService,
                    useValue: mockTiposServicioService,
                },
            ],
        }).compile();
        controller = module.get(tipos_servicio_controller_1.TiposServicioController);
        service = module.get(tipos_servicio_service_1.TiposServicioService);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('create', () => {
        it('should create a new tipo servicio', async () => {
            const createDto = {
                nombre: 'Test Tipo',
                descripcion: 'Test Description',
                requiereCupo: true,
            };
            const expected = Object.assign({ id: 1 }, createDto);
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
            mockTiposServicioService.findOne.mockRejectedValue(new common_1.NotFoundException());
            await expect(controller.findOne('999')).rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('update', () => {
        it('should update a tipo servicio', async () => {
            const updateDto = {
                nombre: 'Updated Tipo',
                descripcion: 'Updated Description',
                requiereCupo: false,
            };
            const expected = Object.assign({ id: 1 }, updateDto);
            mockTiposServicioService.update.mockResolvedValue(expected);
            const result = await controller.update('1', updateDto);
            expect(result).toEqual(expected);
            expect(mockTiposServicioService.update).toHaveBeenCalledWith(1, updateDto);
        });
        it('should throw NotFoundException if tipo servicio not found', async () => {
            const updateDto = {
                nombre: 'Updated Tipo',
                descripcion: 'Updated Description',
                requiereCupo: false,
            };
            mockTiposServicioService.update.mockRejectedValue(new common_1.NotFoundException());
            await expect(controller.update('999', updateDto)).rejects.toThrow(common_1.NotFoundException);
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
            mockTiposServicioService.remove.mockRejectedValue(new common_1.NotFoundException());
            await expect(controller.remove('999')).rejects.toThrow(common_1.NotFoundException);
        });
    });
});
//# sourceMappingURL=tipos-servicio.controller.spec.js.map