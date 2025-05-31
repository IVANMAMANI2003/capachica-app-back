"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const lugares_turisticos_service_1 = require("../../../src/lugares-turisticos/lugares-turisticos.service");
const prisma_service_1 = require("../../../src/prisma/prisma.service");
const supabase_service_1 = require("../../../src/supabase/supabase.service");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
describe('LugaresTuristicosService', () => {
    let service;
    let prismaService;
    let supabaseService;
    const mockPrismaService = {
        lugarTuristico: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
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
        favoritoLugarTuristico: {
            create: jest.fn(),
            findMany: jest.fn(),
            deleteMany: jest.fn(),
            findFirst: jest.fn(),
        },
    };
    const mockSupabaseService = {
        uploadFile: jest.fn(),
        deleteFile: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                lugares_turisticos_service_1.LugaresTuristicosService,
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
        service = module.get(lugares_turisticos_service_1.LugaresTuristicosService);
        prismaService = module.get(prisma_service_1.PrismaService);
        supabaseService = module.get(supabase_service_1.SupabaseService);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('create', () => {
        it('should create a new tourist place successfully', async () => {
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
            const mockLugarTuristico = Object.assign({ id: 1 }, createDto);
            const mockImageables = [];
            mockPrismaService.lugarTuristico.create.mockResolvedValue(mockLugarTuristico);
            mockPrismaService.lugarTuristico.findUnique.mockResolvedValue(mockLugarTuristico);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.create(createDto);
            expect(result).toEqual(Object.assign(Object.assign({}, mockLugarTuristico), { imagenes: [] }));
            expect(mockPrismaService.lugarTuristico.create).toHaveBeenCalled();
        });
        it('should throw BadRequestException when image upload fails', async () => {
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
                imagenes: [{ url: 'test.jpg' }],
            };
            mockPrismaService.lugarTuristico.create.mockResolvedValue({ id: 1 });
            mockSupabaseService.uploadFile.mockResolvedValue({ error: new Error('Upload failed') });
            await expect(service.create(createDto)).rejects.toThrow(common_1.BadRequestException);
        });
    });
    describe('findAll', () => {
        it('should return an array of tourist places with images', async () => {
            const mockLugares = [
                { id: 1, nombre: 'Place 1' },
                { id: 2, nombre: 'Place 2' },
            ];
            const mockImageables = [
                {
                    id: 1,
                    image: { id: 1, url: 'image1.jpg' },
                },
            ];
            mockPrismaService.lugarTuristico.findMany.mockResolvedValue(mockLugares);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.findAll();
            expect(result).toHaveLength(2);
            expect(result[0]).toHaveProperty('imagenes');
            expect(mockPrismaService.lugarTuristico.findMany).toHaveBeenCalled();
        });
    });
    describe('findOne', () => {
        it('should return a tourist place by id', async () => {
            const mockLugar = {
                id: 1,
                nombre: 'Test Place',
            };
            const mockImageables = [
                {
                    id: 1,
                    image: { id: 1, url: 'image1.jpg' },
                },
            ];
            mockPrismaService.lugarTuristico.findUnique.mockResolvedValue(mockLugar);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.findOne(1);
            expect(result).toEqual(Object.assign(Object.assign({}, mockLugar), { imagenes: [{ id: 1, url: 'image1.jpg' }] }));
        });
        it('should return null when place is not found', async () => {
            mockPrismaService.lugarTuristico.findUnique.mockResolvedValue(null);
            const result = await service.findOne(999);
            expect(result).toBeNull();
        });
    });
    describe('update', () => {
        it('should update a tourist place successfully', async () => {
            const updateDto = {
                nombre: 'Updated Place',
                descripcion: 'Updated Description',
            };
            const mockLugar = Object.assign({ id: 1 }, updateDto);
            const mockImageables = [
                {
                    id: 1,
                    image: { id: 1, url: 'image1.jpg' },
                },
            ];
            mockPrismaService.lugarTuristico.update.mockResolvedValue(mockLugar);
            mockPrismaService.lugarTuristico.findUnique.mockResolvedValue(mockLugar);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.update(1, updateDto);
            expect(result).toEqual(Object.assign(Object.assign({}, mockLugar), { imagenes: [{ id: 1, url: 'image1.jpg' }] }));
            expect(mockPrismaService.lugarTuristico.update).toHaveBeenCalled();
        });
    });
    describe('remove', () => {
        it('should remove a tourist place and its images', async () => {
            const mockImageables = [
                {
                    id: 1,
                    image: { id: 1, url: 'image1.jpg' },
                },
            ];
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            mockSupabaseService.deleteFile.mockResolvedValue({ error: null });
            await service.remove(1);
            expect(mockPrismaService.imageable.delete).toHaveBeenCalled();
            expect(mockPrismaService.image.delete).toHaveBeenCalled();
            expect(mockPrismaService.lugarTuristico.delete).toHaveBeenCalled();
        });
    });
    describe('findDestacados', () => {
        it('should return highlighted tourist places', async () => {
            const mockLugares = [
                { id: 1, nombre: 'Destacado 1', esDestacado: true },
                { id: 2, nombre: 'Destacado 2', esDestacado: true },
            ];
            mockPrismaService.lugarTuristico.findMany.mockResolvedValue(mockLugares);
            const result = await service.findDestacados();
            expect(result).toEqual(mockLugares);
            expect(mockPrismaService.lugarTuristico.findMany).toHaveBeenCalledWith({
                where: { esDestacado: true },
            });
        });
    });
    describe('favorites', () => {
        it('should add a place to favorites', async () => {
            const mockFavorito = {
                id: 1,
                usuarioId: 1,
                lugarTuristicoId: 1,
            };
            mockPrismaService.favoritoLugarTuristico.findFirst.mockResolvedValue(null);
            mockPrismaService.favoritoLugarTuristico.create.mockResolvedValue(mockFavorito);
            const result = await service.AddFavorite(1, 1);
            expect(result).toEqual(mockFavorito);
            expect(mockPrismaService.favoritoLugarTuristico.create).toHaveBeenCalled();
        });
        it('should remove a place from favorites', async () => {
            mockPrismaService.favoritoLugarTuristico.deleteMany.mockResolvedValue({ count: 1 });
            await service.removeFavorite(1, 1);
            expect(mockPrismaService.favoritoLugarTuristico.deleteMany).toHaveBeenCalled();
        });
        it('should get user favorites', async () => {
            const mockFavoritos = [
                {
                    lugarTuristico: {
                        id: 1,
                        nombre: 'Destacado 1',
                        esDestacado: true,
                        imagenes: [{ id: 1, url: 'image1.jpg' }]
                    }
                },
                {
                    lugarTuristico: {
                        id: 2,
                        nombre: 'Destacado 2',
                        esDestacado: true,
                        imagenes: [{ id: 1, url: 'image1.jpg' }]
                    }
                }
            ];
            mockPrismaService.favoritoLugarTuristico.findMany.mockResolvedValue(mockFavoritos);
            const result = await service.findFavorites(1);
            expect(result).toEqual(mockFavoritos.map(f => f.lugarTuristico));
            expect(mockPrismaService.favoritoLugarTuristico.findMany).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=lugares-turisticos.service.spec.js.map