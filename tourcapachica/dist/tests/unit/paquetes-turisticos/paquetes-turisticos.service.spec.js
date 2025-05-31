"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const paquetes_turisticos_service_1 = require("../../../src/paquetes-turisticos/paquetes-turisticos.service");
const prisma_service_1 = require("../../../src/prisma/prisma.service");
const supabase_service_1 = require("../../../src/supabase/supabase.service");
const common_1 = require("@nestjs/common");
describe('PaquetesTuristicosService', () => {
    let service;
    let prismaService;
    let supabaseService;
    const mockPrismaService = {
        paqueteTuristico: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        emprendimiento: {
            findUnique: jest.fn(),
            findFirst: jest.fn(),
        },
        image: {
            create: jest.fn(),
            delete: jest.fn(),
        },
        imageable: {
            create: jest.fn(),
            findMany: jest.fn(),
            delete: jest.fn(),
        },
        servicioPaquete: {
            deleteMany: jest.fn(),
            findFirst: jest.fn(),
            delete: jest.fn(),
        },
        favoritoPaqueteTuristico: {
            deleteMany: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
            findMany: jest.fn(),
        },
        disponibilidadPaquete: {
            create: jest.fn(),
            findMany: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        reserva: {
            findMany: jest.fn(),
            groupBy: jest.fn(),
        },
        resena: {
            findMany: jest.fn(),
        },
        servicio: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
        },
    };
    const mockSupabaseService = {
        uploadImage: jest.fn(),
        deleteImage: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                paquetes_turisticos_service_1.PaquetesTuristicosService,
                {
                    provide: prisma_service_1.PrismaService,
                    useValue: mockPrismaService,
                },
                {
                    provide: supabase_service_1.SupabaseService,
                    useValue: mockSupabaseService,
                },
            ],
        }).compile();
        service = module.get(paquetes_turisticos_service_1.PaquetesTuristicosService);
        prismaService = module.get(prisma_service_1.PrismaService);
        supabaseService = module.get(supabase_service_1.SupabaseService);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('create', () => {
        const createDto = {
            nombre: 'Test Package',
            descripcion: 'Test Description',
            precio: 100,
            emprendimientoId: 1,
            servicios: [1, 2],
            imagenes: ['image1.jpg', 'image2.jpg'],
        };
        it('should create a paquete turistico successfully', async () => {
            const mockEmprendimiento = { id: 1 };
            const mockPaquete = Object.assign(Object.assign({ id: 1 }, createDto), { emprendimiento: mockEmprendimiento, servicios: [] });
            mockPrismaService.emprendimiento.findUnique.mockResolvedValue(mockEmprendimiento);
            mockPrismaService.paqueteTuristico.create.mockResolvedValue(mockPaquete);
            mockPrismaService.image.create.mockResolvedValue({ id: 1, url: 'image1.jpg' });
            mockPrismaService.imageable.create.mockResolvedValue({ id: 1 });
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(Object.assign(Object.assign({ id: 1 }, createDto), { emprendimiento: mockEmprendimiento, servicios: [], disponibilidad: [] }));
            mockPrismaService.imageable.findMany.mockResolvedValue([
                { image: { id: 1, url: 'image1.jpg' } },
                { image: { id: 2, url: 'image2.jpg' } },
            ]);
            const result = await service.create(createDto);
            expect(result).toBeDefined();
            expect(mockPrismaService.paqueteTuristico.create).toHaveBeenCalled();
            expect(mockPrismaService.image.create).toHaveBeenCalledTimes(2);
            expect(mockPrismaService.imageable.create).toHaveBeenCalledTimes(2);
            expect(result.imagenes.length).toBe(2);
        });
        it('should throw BadRequestException if emprendimiento does not exist', async () => {
            mockPrismaService.emprendimiento.findUnique.mockResolvedValue(null);
            await expect(service.create(createDto)).rejects.toThrow(common_1.BadRequestException);
        });
    });
    describe('findAll', () => {
        it('should return all paquetes turisticos with images', async () => {
            const mockPaquetes = [
                { id: 1, nombre: 'Package 1' },
                { id: 2, nombre: 'Package 2' },
            ];
            const mockImageables = [
                { image: { id: 1, url: 'image1.jpg' } },
                { image: { id: 2, url: 'image2.jpg' } },
            ];
            mockPrismaService.paqueteTuristico.findMany.mockResolvedValue(mockPaquetes);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.findAll();
            expect(result).toHaveLength(2);
            expect(result[0].imagenes).toBeDefined();
            expect(result[0].precio).toBe(Number(result[0].precio));
        });
    });
    describe('findOne', () => {
        it('should return a paquete turistico by id', async () => {
            const mockPaquete = {
                id: 1,
                nombre: 'Test Package',
                precio: 100,
            };
            const mockImageables = [
                { image: { id: 1, url: 'image1.jpg' } },
            ];
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(mockPaquete);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.findOne(1);
            expect(result).toBeDefined();
            expect(result.id).toBe(1);
            expect(result.precio).toBe(100);
            expect(result.imagenes).toBeDefined();
        });
        it('should throw NotFoundException if paquete does not exist', async () => {
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(null);
            await expect(service.findOne(999)).rejects.toThrow(common_1.NotFoundException);
        });
        it('should throw BadRequestException if id is invalid', async () => {
            await expect(service.findOne(null)).rejects.toThrow(common_1.BadRequestException);
            await expect(service.findOne(NaN)).rejects.toThrow(common_1.BadRequestException);
        });
    });
    describe('update', () => {
        const updateDto = {
            nombre: 'Updated Package',
            precio: 200,
            servicios: [1, 2, 3],
            imagenes: ['new-image.jpg'],
        };
        it('should update a paquete turistico successfully', async () => {
            const mockPaquete = {
                id: 1,
                nombre: 'Original Package',
                precio: 100,
            };
            const mockUpdatedPaquete = Object.assign({ id: 1 }, updateDto);
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValueOnce(mockPaquete);
            mockPrismaService.paqueteTuristico.update.mockResolvedValue(mockUpdatedPaquete);
            mockPrismaService.imageable.findMany.mockResolvedValue([]);
            mockPrismaService.image.create.mockResolvedValue({ id: 1, url: 'new-image.jpg' });
            mockPrismaService.imageable.create.mockResolvedValue({ id: 1 });
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValueOnce(Object.assign(Object.assign({ id: 1 }, updateDto), { emprendimiento: {}, servicios: [], disponibilidad: [] }));
            mockPrismaService.imageable.findMany.mockResolvedValue([
                { image: { id: 1, url: 'new-image.jpg' } },
            ]);
            const result = await service.update(1, updateDto);
            expect(result).toBeDefined();
            expect(result.nombre).toBe(updateDto.nombre);
            expect(result.precio).toBe(updateDto.precio);
        });
        it('should throw NotFoundException if paquete does not exist', async () => {
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(null);
            await expect(service.update(999, updateDto)).rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('remove', () => {
        it('should remove a paquete turistico successfully', async () => {
            const mockPaquete = {
                id: 1,
                nombre: 'Test Package',
            };
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(mockPaquete);
            mockPrismaService.servicioPaquete.deleteMany.mockResolvedValue({});
            mockPrismaService.favoritoPaqueteTuristico.deleteMany.mockResolvedValue({});
            mockPrismaService.imageable.findMany.mockResolvedValue([]);
            mockPrismaService.paqueteTuristico.delete.mockResolvedValue(mockPaquete);
            const result = await service.remove(1);
            expect(result).toBeDefined();
            expect(mockPrismaService.servicioPaquete.deleteMany).toHaveBeenCalled();
            expect(mockPrismaService.favoritoPaqueteTuristico.deleteMany).toHaveBeenCalled();
            expect(mockPrismaService.paqueteTuristico.delete).toHaveBeenCalled();
        });
        it('should throw NotFoundException if paquete does not exist', async () => {
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(null);
            await expect(service.remove(999)).rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('addFavorite', () => {
        it('should add a paquete to favorites successfully', async () => {
            const mockPaquete = {
                id: 1,
                nombre: 'Test Package',
            };
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(mockPaquete);
            mockPrismaService.favoritoPaqueteTuristico.findFirst.mockResolvedValue(null);
            mockPrismaService.favoritoPaqueteTuristico.create.mockResolvedValue({
                id: 1,
                paqueteTuristicoId: 1,
                usuarioId: 1,
            });
            const result = await service.addFavorite(1, 1);
            expect(result).toBeDefined();
            expect(result.paqueteTuristicoId).toBe(1);
            expect(result.usuarioId).toBe(1);
        });
        it('should throw BadRequestException if paquete is already in favorites', async () => {
            const mockPaquete = {
                id: 1,
                nombre: 'Test Package',
            };
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(mockPaquete);
            mockPrismaService.favoritoPaqueteTuristico.findFirst.mockResolvedValue({
                id: 1,
                paqueteTuristicoId: 1,
                usuarioId: 1,
            });
            await expect(service.addFavorite(1, 1)).rejects.toThrow(common_1.BadRequestException);
        });
    });
    describe('removeFavorite', () => {
        it('should remove a paquete from favorites successfully', async () => {
            const mockPaquete = {
                id: 1,
                nombre: 'Test Package',
            };
            const mockFavorite = {
                id: 1,
                paqueteTuristicoId: 1,
                usuarioId: 1,
            };
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(mockPaquete);
            mockPrismaService.favoritoPaqueteTuristico.findFirst.mockResolvedValue(mockFavorite);
            mockPrismaService.favoritoPaqueteTuristico.delete.mockResolvedValue(mockFavorite);
            const result = await service.removeFavorite(1, 1);
            expect(result).toBeDefined();
            expect(result.id).toBe(1);
        });
        it('should throw BadRequestException if paquete is not in favorites', async () => {
            const mockPaquete = {
                id: 1,
                nombre: 'Test Package',
            };
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(mockPaquete);
            mockPrismaService.favoritoPaqueteTuristico.findFirst.mockResolvedValue(null);
            await expect(service.removeFavorite(1, 1)).rejects.toThrow(common_1.BadRequestException);
        });
    });
    describe('findFavorites', () => {
        it('should return user favorites successfully', async () => {
            const mockFavorites = [
                { paqueteTuristicoId: 1 },
                { paqueteTuristicoId: 2 },
            ];
            const mockPaquetes = [
                { id: 1, nombre: 'Package 1' },
                { id: 2, nombre: 'Package 2' },
            ];
            const mockImageables = [
                { image: { id: 1, url: 'image1.jpg' } },
            ];
            mockPrismaService.favoritoPaqueteTuristico.findMany.mockResolvedValue(mockFavorites);
            mockPrismaService.paqueteTuristico.findMany.mockResolvedValue(mockPaquetes);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.findFavorites(1);
            expect(result).toHaveLength(2);
            expect(result[0].imagenes).toBeDefined();
        });
        it('should return empty array if user has no favorites', async () => {
            mockPrismaService.favoritoPaqueteTuristico.findMany.mockResolvedValue([]);
            const result = await service.findFavorites(1);
            expect(result).toHaveLength(0);
        });
    });
    describe('createDisponibilidad', () => {
        const createDisponibilidadDto = {
            fechaInicio: '2024-03-01',
            fechaFin: '2024-03-31',
            cuposDisponibles: 10,
            cuposMaximos: 20,
            precioEspecial: 150,
            notas: 'Test notes',
        };
        it('should create disponibilidad successfully', async () => {
            const mockPaquete = {
                id: 1,
                nombre: 'Test Package',
            };
            const mockDisponibilidad = Object.assign({ id: 1, paqueteId: 1 }, createDisponibilidadDto);
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(mockPaquete);
            mockPrismaService.disponibilidadPaquete.create.mockResolvedValue(mockDisponibilidad);
            const result = await service.createDisponibilidad(1, createDisponibilidadDto);
            expect(result).toBeDefined();
            expect(result.paqueteId).toBe(1);
            expect(result.cuposDisponibles).toBe(createDisponibilidadDto.cuposDisponibles);
        });
        it('should throw NotFoundException if paquete does not exist', async () => {
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(null);
            await expect(service.createDisponibilidad(999, createDisponibilidadDto))
                .rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('getDisponibilidadesPaquete', () => {
        it('should return disponibilidades for a paquete', async () => {
            const mockDisponibilidades = [
                { id: 1, paqueteId: 1 },
                { id: 2, paqueteId: 1 },
            ];
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue({ id: 1 });
            mockPrismaService.disponibilidadPaquete.findMany.mockResolvedValue(mockDisponibilidades);
            const result = await service.getDisponibilidadesPaquete(1);
            expect(result).toHaveLength(2);
            expect(result[0].paqueteId).toBe(1);
        });
        it('should throw NotFoundException if paquete does not exist', async () => {
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue(null);
            await expect(service.getDisponibilidadesPaquete(999))
                .rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('updateDisponibilidad', () => {
        const updateDisponibilidadDto = {
            fechaInicio: '2024-03-01',
            fechaFin: '2024-03-31',
            cuposDisponibles: 5,
            cuposMaximos: 15,
            precioEspecial: 200,
            notas: 'Updated notes',
        };
        it('should update disponibilidad successfully', async () => {
            const mockDisponibilidad = Object.assign({ id: 1, paqueteId: 1 }, updateDisponibilidadDto);
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue({ id: 1 });
            mockPrismaService.disponibilidadPaquete.findMany.mockResolvedValue([mockDisponibilidad]);
            mockPrismaService.disponibilidadPaquete.update.mockResolvedValue(mockDisponibilidad);
            const result = await service.updateDisponibilidad(1, updateDisponibilidadDto);
            expect(result).toBeDefined();
            expect(result.cuposDisponibles).toBe(updateDisponibilidadDto.cuposDisponibles);
            expect(result.precioEspecial).toBe(updateDisponibilidadDto.precioEspecial);
        });
    });
    describe('deleteDisponibilidad', () => {
        it('should delete disponibilidad successfully', async () => {
            const mockDisponibilidad = {
                id: 1,
                paqueteId: 1,
            };
            mockPrismaService.paqueteTuristico.findUnique.mockResolvedValue({ id: 1 });
            mockPrismaService.disponibilidadPaquete.findMany.mockResolvedValue([mockDisponibilidad]);
            mockPrismaService.disponibilidadPaquete.delete.mockResolvedValue(mockDisponibilidad);
            const result = await service.deleteDisponibilidad(1);
            expect(result).toBeDefined();
            expect(result.id).toBe(1);
        });
    });
});
//# sourceMappingURL=paquetes-turisticos.service.spec.js.map