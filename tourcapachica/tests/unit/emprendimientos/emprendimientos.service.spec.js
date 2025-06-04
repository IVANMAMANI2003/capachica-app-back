"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const emprendimientos_service_1 = require("../../../src/emprendimientos/emprendimientos.service");
const prisma_service_1 = require("../../../src/prisma/prisma.service");
const supabase_service_1 = require("../../../src/supabase/supabase.service");
const common_1 = require("@nestjs/common");
describe('EmprendimientosService', () => {
    let service;
    let prismaService;
    let supabaseService;
    const mockPrismaService = {
        emprendimiento: {
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
        favoritoEmprendimiento: {
            create: jest.fn(),
            findMany: jest.fn(),
            deleteMany: jest.fn(),
            findFirst: jest.fn(),
            findUnique: jest.fn(),
            delete: jest.fn(),
        },
    };
    const mockSupabaseService = {
        uploadFile: jest.fn(),
        deleteFile: jest.fn(),
    };
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                emprendimientos_service_1.EmprendimientosService,
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
        service = module.get(emprendimientos_service_1.EmprendimientosService);
        prismaService = module.get(prisma_service_1.PrismaService);
        supabaseService = module.get(supabase_service_1.SupabaseService);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('create', () => {
        it('should create a new emprendimiento successfully', async () => {
            const createDto = {
                nombre: 'Test Emprendimiento',
                descripcion: 'Test Description',
                tipo: 'RESTAURANTE',
                direccion: 'Test Address',
                latitud: 123.456,
                longitud: 789.012,
                contactoTelefono: '123456789',
                contactoEmail: 'test@test.com',
                sitioWeb: 'www.test.com',
                redesSociales: { facebook: 'test' },
                lugarTuristicoId: 1,
                usuarioId: 1,
                imagenes: [],
            };
            const mockEmprendimiento = Object.assign({ id: 1 }, createDto);
            const mockImageables = [];
            mockPrismaService.emprendimiento.create.mockResolvedValue(mockEmprendimiento);
            mockPrismaService.emprendimiento.findUnique.mockResolvedValue(mockEmprendimiento);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.create(createDto, 1);
            expect(result).toEqual(Object.assign(Object.assign({}, mockEmprendimiento), { imagenes: [] }));
            expect(mockPrismaService.emprendimiento.create).toHaveBeenCalled();
        });
        it('should throw BadRequestException when image upload fails', async () => {
            const createDto = {
                nombre: 'Test Emprendimiento',
                descripcion: 'Test Description',
                tipo: 'RESTAURANTE',
                direccion: 'Test Address',
                latitud: 123.456,
                longitud: 789.012,
                contactoTelefono: '123456789',
                contactoEmail: 'test@test.com',
                sitioWeb: 'www.test.com',
                redesSociales: { facebook: 'test' },
                lugarTuristicoId: 1,
                usuarioId: 1,
                imagenes: [{ url: 'test.jpg' }],
            };
            mockPrismaService.emprendimiento.create.mockResolvedValue({ id: 1 });
            mockSupabaseService.uploadFile.mockResolvedValue({ error: new Error('Upload failed') });
            await expect(service.create(createDto, 1)).rejects.toThrow(common_1.BadRequestException);
        });
    });
    describe('findAll', () => {
        it('should return an array of emprendimientos with images', async () => {
            const mockEmprendimientos = [
                { id: 1, nombre: 'Emprendimiento 1' },
                { id: 2, nombre: 'Emprendimiento 2' },
            ];
            const mockImageables = [
                {
                    id: 1,
                    image: { id: 1, url: 'image1.jpg' },
                },
            ];
            mockPrismaService.emprendimiento.findMany.mockResolvedValue(mockEmprendimientos);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.findAll();
            expect(result).toHaveLength(2);
            expect(result[0]).toHaveProperty('imagenes');
            expect(mockPrismaService.emprendimiento.findMany).toHaveBeenCalled();
        });
    });
    describe('findOne', () => {
        it('should return an emprendimiento by id', async () => {
            const mockEmprendimiento = {
                id: 1,
                nombre: 'Test Emprendimiento',
            };
            const mockImageables = [
                {
                    id: 1,
                    image: { id: 1, url: 'image1.jpg' },
                },
            ];
            mockPrismaService.emprendimiento.findUnique.mockResolvedValue(mockEmprendimiento);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.findOne(1);
            expect(result).toEqual(Object.assign(Object.assign({}, mockEmprendimiento), { imagenes: [{ id: 1, url: 'image1.jpg' }] }));
        });
        it('should return null when emprendimiento is not found', async () => {
            mockPrismaService.emprendimiento.findUnique.mockResolvedValue(null);
            const result = await service.findOne(999);
            expect(result).toBeNull();
        });
    });
    describe('findByUsuario', () => {
        it('should return emprendimientos by usuario id', async () => {
            const mockEmprendimientos = [
                { id: 1, nombre: 'Emprendimiento 1', usuarioId: 1 },
                { id: 2, nombre: 'Emprendimiento 2', usuarioId: 1 },
            ];
            const mockImageables = [
                {
                    id: 1,
                    image: { id: 1, url: 'image1.jpg' },
                },
            ];
            mockPrismaService.emprendimiento.findMany.mockResolvedValue(mockEmprendimientos);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.findByUsuario(1);
            expect(result).toHaveLength(2);
            expect(result[0]).toHaveProperty('imagenes');
            expect(mockPrismaService.emprendimiento.findMany).toHaveBeenCalledWith({
                where: { usuarioId: 1 },
                include: {
                    usuario: {
                        include: {
                            persona: true
                        }
                    }
                }
            });
        });
    });
    describe('update', () => {
        it('should update an emprendimiento successfully', async () => {
            const updateDto = {
                nombre: 'Updated Emprendimiento',
                descripcion: 'Updated Description',
            };
            const mockEmprendimiento = Object.assign({ id: 1 }, updateDto);
            const mockImageables = [
                {
                    id: 1,
                    image: { id: 1, url: 'image1.jpg' },
                },
            ];
            mockPrismaService.emprendimiento.update.mockResolvedValue(mockEmprendimiento);
            mockPrismaService.emprendimiento.findUnique.mockResolvedValue(mockEmprendimiento);
            mockPrismaService.imageable.findMany.mockResolvedValue(mockImageables);
            const result = await service.update(1, updateDto);
            expect(result).toEqual(Object.assign(Object.assign({}, mockEmprendimiento), { imagenes: [{ id: 1, url: 'image1.jpg' }] }));
            expect(mockPrismaService.emprendimiento.update).toHaveBeenCalled();
        });
    });
    describe('remove', () => {
        it('should remove an emprendimiento and its images', async () => {
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
            expect(mockPrismaService.emprendimiento.delete).toHaveBeenCalled();
        });
    });
    describe('favorites', () => {
        it('should add an emprendimiento to favorites', async () => {
            const mockFavorito = {
                id: 1,
                usuarioId: 1,
                emprendimientoId: 1,
            };
            mockPrismaService.favoritoEmprendimiento.findFirst.mockResolvedValue(null);
            mockPrismaService.favoritoEmprendimiento.create.mockResolvedValue(mockFavorito);
            const result = await service.addFavorito(1, 1);
            expect(result).toEqual(mockFavorito);
            expect(mockPrismaService.favoritoEmprendimiento.create).toHaveBeenCalled();
        });
        it('should remove an emprendimiento from favorites', async () => {
            mockPrismaService.favoritoEmprendimiento.findUnique.mockResolvedValue({ id: 1 });
            mockPrismaService.favoritoEmprendimiento.delete.mockResolvedValue({ id: 1 });
            mockPrismaService.favoritoEmprendimiento.deleteMany.mockResolvedValue({ count: 1 });
            await service.removeFavorito(1, 1);
            expect(mockPrismaService.favoritoEmprendimiento.delete).toHaveBeenCalled();
        });
        it('should get user favorites', async () => {
            const mockFavoritos = [
                {
                    emprendimiento: {
                        id: 1,
                        nombre: 'Emprendimiento 1',
                        imagenes: [{ id: 1, url: 'image1.jpg' }]
                    }
                }
            ];
            mockPrismaService.favoritoEmprendimiento.findMany.mockResolvedValue(mockFavoritos);
            const result = await service.getFavoritos(1);
            expect(result).toEqual(mockFavoritos.map(f => f.emprendimiento));
            expect(mockPrismaService.favoritoEmprendimiento.findMany).toHaveBeenCalled();
        });
        it('should check if emprendimiento is favorite', async () => {
            mockPrismaService.favoritoEmprendimiento.findFirst.mockResolvedValue({ id: 1 });
            const result = await service.isFavorito(1, 1);
            expect(result).toBe(true);
            expect(mockPrismaService.favoritoEmprendimiento.findFirst).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=emprendimientos.service.spec.js.map