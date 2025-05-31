"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tipos_servicio_service_1 = require("../../../src/servicios/services/tipos-servicio.service");
const prisma_service_1 = require("../../../src/prisma/prisma.service");
const common_1 = require("@nestjs/common");
describe('TiposServicioService', () => {
    let service;
    let prismaService;
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
        const module = await testing_1.Test.createTestingModule({
            providers: [
                tipos_servicio_service_1.TiposServicioService,
                {
                    provide: prisma_service_1.PrismaService,
                    useValue: mockPrismaService,
                },
            ],
        }).compile();
        service = module.get(tipos_servicio_service_1.TiposServicioService);
        prismaService = module.get(prisma_service_1.PrismaService);
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
            await expect(service.findOne(999)).rejects.toThrow(common_1.NotFoundException);
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
            mockPrismaService.tipoServicio.update.mockResolvedValue(expected);
            const result = await service.update(1, updateDto);
            expect(result).toEqual(expected);
            expect(mockPrismaService.tipoServicio.update).toHaveBeenCalledWith({
                where: { id: 1 },
                data: updateDto,
            });
        });
        it('should throw NotFoundException if tipo servicio not found', async () => {
            const updateDto = {
                nombre: 'Test Tipo',
                descripcion: 'Test Description',
                requiereCupo: true,
            };
            mockPrismaService.tipoServicio.update.mockRejectedValue(new Error());
            await expect(service.update(999, updateDto)).rejects.toThrow(common_1.NotFoundException);
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
            await expect(service.remove(999)).rejects.toThrow(common_1.NotFoundException);
        });
    });
});
//# sourceMappingURL=tipos-servicio.service.spec.js.map