"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const lugares_turisticos_service_1 = require("../lugares-turisticos.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const supabase_service_1 = require("../../supabase/supabase.service");
const jest_mock_extended_1 = require("jest-mock-extended");
describe('LugaresTuristicosService', () => {
    let service;
    let prisma;
    let supabaseService;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                lugares_turisticos_service_1.LugaresTuristicosService,
                {
                    provide: prisma_service_1.PrismaService,
                    useValue: (0, jest_mock_extended_1.mockDeep)(),
                },
                {
                    provide: supabase_service_1.SupabaseService,
                    useValue: (0, jest_mock_extended_1.mockDeep)(),
                },
            ],
        }).compile();
        service = module.get(lugares_turisticos_service_1.LugaresTuristicosService);
        prisma = module.get(prisma_service_1.PrismaService);
        supabaseService = module.get(supabase_service_1.SupabaseService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('create', () => {
        it('should create a new lugar turistico with images', async () => {
            const createDto = {
                nombre: 'Lugar Test',
                descripcion: 'Descripción del lugar',
                direccion: 'Dirección del lugar',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Recomendaciones',
                restricciones: 'Restricciones',
                esDestacado: true,
                estado: true,
                imagenes: [{ url: 'http://example.com/image.jpg' }],
            };
            const lugarTuristico = {
                id: 1,
                nombre: 'Lugar Test',
                descripcion: 'Descripción del lugar',
                direccion: 'Dirección del lugar',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Recomendaciones',
                restricciones: 'Restricciones',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const uploadedFile = {
                path: '1/test-image.jpg',
                fullPath: 'bucket/1/test-image.jpg',
            };
            const imageDb = {
                id: 1,
                url: uploadedFile.path,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            prisma.lugarTuristico.create.mockResolvedValue(lugarTuristico);
            supabaseService.uploadFile.mockResolvedValue({ data: uploadedFile, error: null });
            prisma.image.create.mockResolvedValue(imageDb);
            prisma.imageable.create.mockResolvedValue({ id: 1, image_id: 1, imageable_id: 1, imageable_type: 'LugarTuristico' });
            prisma.lugarTuristico.findUnique.mockResolvedValue(Object.assign(Object.assign({}, lugarTuristico), { imagenes: [{ id: 1, url: uploadedFile.path }] }));
            prisma.imageable.findMany.mockResolvedValue([{ id: 1, image_id: 1, imageable_id: 1, imageable_type: 'LugarTuristico', image: imageDb }]);
            const result = await service.create(createDto);
            expect(prisma.lugarTuristico.create).toHaveBeenCalledWith({
                data: {
                    nombre: createDto.nombre,
                    descripcion: createDto.descripcion,
                    direccion: createDto.direccion,
                    latitud: createDto.latitud,
                    longitud: createDto.longitud,
                    horarioApertura: createDto.horarioApertura,
                    horarioCierre: createDto.horarioCierre,
                    costoEntrada: createDto.costoEntrada,
                    recomendaciones: createDto.recomendaciones,
                    restricciones: createDto.restricciones,
                    esDestacado: createDto.esDestacado,
                    estado: createDto.estado,
                },
            });
            expect(supabaseService.uploadFile).toHaveBeenCalledWith('lugares-turisticos', expect.any(String), createDto.imagenes[0].url);
            expect(prisma.image.create).toHaveBeenCalledWith({
                data: {
                    url: uploadedFile.path,
                },
            });
            expect(prisma.imageable.create).toHaveBeenCalledWith({
                data: {
                    image_id: imageDb.id,
                    imageable_id: lugarTuristico.id,
                    imageable_type: 'LugarTuristico',
                },
            });
            expect(result).toEqual(Object.assign(Object.assign({}, lugarTuristico), { imagenes: [{ id: 1, url: uploadedFile.path }] }));
        });
        it('should throw BadRequestException if image upload fails', async () => {
            const createDto = {
                nombre: 'Lugar Test',
                descripcion: 'Descripción del lugar',
                direccion: 'Dirección del lugar',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Recomendaciones',
                restricciones: 'Restricciones',
                esDestacado: true,
                estado: true,
                imagenes: [{ url: 'http://example.com/image.jpg' }],
            };
            const lugarTuristico = {
                id: 1,
                nombre: 'Lugar Test',
                descripcion: 'Descripción del lugar',
                direccion: 'Dirección del lugar',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Recomendaciones',
                restricciones: 'Restricciones',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            prisma.lugarTuristico.create.mockResolvedValue(lugarTuristico);
            supabaseService.uploadFile.mockResolvedValue({ data: null, error: new Error('Upload failed') });
            await expect(service.create(createDto)).rejects.toThrow(BadRequestException);
        });
    });
    describe('findAll', () => {
        it('should return an empty array if no lugares turisticos exist', async () => {
            prisma.lugarTuristico.findMany.mockResolvedValue([]);
            const result = await service.findAll();
            expect(result).toEqual([]);
        });
        it('should return an array of lugares turisticos with images', async () => {
            const lugarTuristico1 = {
                id: 1,
                nombre: 'Lugar 1',
                descripcion: 'Desc 1',
                direccion: 'Dir 1',
                latitud: 1,
                longitud: 1,
                horarioApertura: '08:00',
                horarioCierre: '17:00',
                costoEntrada: 5,
                recomendaciones: 'Rec 1',
                restricciones: 'Rest 1',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const lugarTuristico2 = {
                id: 2,
                nombre: 'Lugar 2',
                descripcion: 'Desc 2',
                direccion: 'Dir 2',
                latitud: 2,
                longitud: 2,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10,
                recomendaciones: 'Rec 2',
                restricciones: 'Rest 2',
                esDestacado: false,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const image1 = { id: 1, url: 'http://example.com/image1.jpg', createdAt: new Date(), updatedAt: new Date() };
            const image2 = { id: 2, url: 'http://example.com/image2.jpg', createdAt: new Date(), updatedAt: new Date() };
            prisma.lugarTuristico.findMany.mockResolvedValue([lugarTuristico1, lugarTuristico2]);
            prisma.imageable.findMany.mockImplementation((args) => {
                if (args.where.imageable_id === lugarTuristico1.id) {
                    return Promise.resolve([{ id: 1, image_id: 1, imageable_id: 1, imageable_type: 'LugarTuristico', image: image1 }]);
                }
                else if (args.where.imageable_id === lugarTuristico2.id) {
                    return Promise.resolve([{ id: 2, image_id: 2, imageable_id: 2, imageable_type: 'LugarTuristico', image: image2 }]);
                }
                return Promise.resolve([]);
            });
            const result = await service.findAll();
            expect(result).toEqual([
                Object.assign(Object.assign({}, lugarTuristico1), { imagenes: [{ id: image1.id, url: image1.url }] }),
                Object.assign(Object.assign({}, lugarTuristico2), { imagenes: [{ id: image2.id, url: image2.url }] }),
            ]);
        });
    });
    describe('findOne', () => {
        it('should return null if lugar turistico not found', async () => {
            prisma.lugarTuristico.findUnique.mockResolvedValue(null);
            const result = await service.findOne(1);
            expect(result).toBeNull();
        });
        it('should return a lugar turistico with images', async () => {
            const lugarTuristico = {
                id: 1,
                nombre: 'Lugar Test',
                descripcion: 'Descripción del lugar',
                direccion: 'Dirección del lugar',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Recomendaciones',
                restricciones: 'Restricciones',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const image = { id: 1, url: 'http://example.com/image.jpg', createdAt: new Date(), updatedAt: new Date() };
            prisma.lugarTuristico.findUnique.mockResolvedValue(lugarTuristico);
            prisma.imageable.findMany.mockResolvedValue([{ id: 1, image_id: 1, imageable_id: 1, imageable_type: 'LugarTuristico', image: image }]);
            const result = await service.findOne(1);
            expect(result).toEqual(Object.assign(Object.assign({}, lugarTuristico), { imagenes: [{ id: image.id, url: image.url }] }));
        });
        it('should return a lugar turistico without images if none exist', async () => {
            const lugarTuristico = {
                id: 1,
                nombre: 'Lugar Test',
                descripcion: 'Descripción del lugar',
                direccion: 'Dirección del lugar',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Recomendaciones',
                restricciones: 'Restricciones',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            prisma.lugarTuristico.findUnique.mockResolvedValue(lugarTuristico);
            prisma.imageable.findMany.mockResolvedValue([]);
            const result = await service.findOne(1);
            expect(result).toEqual(Object.assign(Object.assign({}, lugarTuristico), { imagenes: [] }));
        });
    });
    describe('update', () => {
        it('should update a lugar turistico without images', async () => {
            const lugarTuristico = {
                id: 1,
                nombre: 'Lugar Original',
                descripcion: 'Desc Original',
                direccion: 'Dir Original',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Rec Original',
                restricciones: 'Rest Original',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const updateDto = {
                nombre: 'Lugar Actualizado',
                descripcion: 'Desc Actualizada',
                direccion: 'Dir Actualizada',
                latitud: 11,
                longitud: 21,
                horarioApertura: '10:00',
                horarioCierre: '19:00',
                costoEntrada: 12.00,
                recomendaciones: 'Rec Actualizadas',
                restricciones: 'Rest Actualizadas',
                esDestacado: false,
                estado: false,
            };
            prisma.lugarTuristico.update.mockResolvedValue(Object.assign(Object.assign({}, lugarTuristico), updateDto));
            prisma.lugarTuristico.findUnique.mockResolvedValue(Object.assign(Object.assign({}, lugarTuristico), updateDto));
            prisma.imageable.findMany.mockResolvedValue([]);
            const result = await service.update(1, updateDto);
            expect(prisma.lugarTuristico.update).toHaveBeenCalledWith({
                where: { id: 1 },
                data: {
                    nombre: updateDto.nombre,
                    descripcion: updateDto.descripcion,
                    direccion: updateDto.direccion,
                    latitud: updateDto.latitud,
                    longitud: updateDto.longitud,
                    horarioApertura: updateDto.horarioApertura,
                    horarioCierre: updateDto.horarioCierre,
                    costoEntrada: updateDto.costoEntrada,
                    recomendaciones: updateDto.recomendaciones,
                    restricciones: updateDto.restricciones,
                    esDestacado: updateDto.esDestacado,
                    estado: updateDto.estado,
                },
            });
            expect(result).toEqual(Object.assign(Object.assign(Object.assign({}, lugarTuristico), updateDto), { imagenes: [] }));
        });
        it('should update a lugar turistico with new images', async () => {
            const lugarTuristico = {
                id: 1,
                nombre: 'Lugar Original',
                descripcion: 'Desc Original',
                direccion: 'Dir Original',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Rec Original',
                restricciones: 'Rest Original',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const updateDto = {
                nombre: 'Lugar Actualizado',
                imagenes: [{ url: 'http://example.com/new-image.jpg' }],
            };
            const oldImage = { id: 10, url: 'http://example.com/old-image.jpg', createdAt: new Date(), updatedAt: new Date() };
            const oldImageable = { id: 100, image_id: oldImage.id, imageable_id: lugarTuristico.id, imageable_type: 'LugarTuristico', image: oldImage };
            const newUploadedFile = {
                path: '1/new-test-image.jpg',
                fullPath: 'bucket/1/new-test-image.jpg',
            };
            const newImageDb = {
                id: 11, url: newUploadedFile.path, createdAt: new Date(), updatedAt: new Date()
            };
            prisma.lugarTuristico.update.mockResolvedValue(Object.assign(Object.assign({}, lugarTuristico), updateDto));
            prisma.lugarTuristico.findUnique.mockResolvedValue(Object.assign(Object.assign(Object.assign({}, lugarTuristico), updateDto), { imagenes: [{ id: newImageDb.id, url: newImageDb.url }] }));
            prisma.imageable.findMany.mockResolvedValueOnce([oldImageable]);
            supabaseService.deleteFile.mockResolvedValue({ data: null, error: null });
            prisma.imageable.delete.mockResolvedValue(oldImageable);
            prisma.image.delete.mockResolvedValue(oldImage);
            supabaseService.uploadFile.mockResolvedValue({ data: newUploadedFile, error: null });
            prisma.image.create.mockResolvedValue(newImageDb);
            prisma.imageable.create.mockResolvedValue({ id: 101, image_id: newImageDb.id, imageable_id: lugarTuristico.id, imageable_type: 'LugarTuristico' });
            const result = await service.update(1, updateDto);
            expect(supabaseService.deleteFile).toHaveBeenCalledWith('lugares-turisticos', oldImage.url);
            expect(prisma.imageable.delete).toHaveBeenCalledWith({ where: { id: oldImageable.id } });
            expect(prisma.image.delete).toHaveBeenCalledWith({ where: { id: oldImage.id } });
            expect(supabaseService.uploadFile).toHaveBeenCalledWith('lugares-turisticos', expect.any(String), updateDto.imagenes[0].url);
            expect(prisma.image.create).toHaveBeenCalledWith({
                data: {
                    url: newUploadedFile.path,
                },
            });
            expect(prisma.imageable.create).toHaveBeenCalledWith({
                data: {
                    image_id: newImageDb.id,
                    imageable_id: lugarTuristico.id,
                    imageable_type: 'LugarTuristico',
                },
            });
            expect(result).toEqual(Object.assign(Object.assign(Object.assign({}, lugarTuristico), updateDto), { imagenes: [{ id: newImageDb.id, url: newImageDb.url }] }));
        });
        it('should throw BadRequestException if new image upload fails during update', async () => {
            const lugarTuristico = {
                id: 1,
                nombre: 'Lugar Original',
                descripcion: 'Desc Original',
                direccion: 'Dir Original',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Rec Original',
                restricciones: 'Rest Original',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const updateDto = {
                nombre: 'Lugar Actualizado',
                imagenes: [{ url: 'http://example.com/new-image.jpg' }],
            };
            prisma.lugarTuristico.update.mockResolvedValue(Object.assign(Object.assign({}, lugarTuristico), updateDto));
            prisma.imageable.findMany.mockResolvedValue([]);
            supabaseService.uploadFile.mockResolvedValue({ data: null, error: new Error('Upload failed') });
            await expect(service.update(1, updateDto)).rejects.toThrow(BadRequestException);
        });
        it('should throw NotFoundException if lugar turistico to update does not exist', async () => {
            const updateDto = {
                nombre: 'Lugar Actualizado',
            };
            prisma.lugarTuristico.update.mockRejectedValue(new Error('Record not found'));
            await expect(service.update(999, updateDto)).rejects.toThrow(NotFoundException);
        });
    });
    describe('remove', () => {
        it('should remove a lugar turistico and its images', async () => {
            const lugarTuristico = {
                id: 1,
                nombre: 'Lugar a Eliminar',
                descripcion: 'Desc a Eliminar',
                direccion: 'Dir a Eliminar',
                latitud: 10,
                longitud: 20,
                horarioApertura: '09:00',
                horarioCierre: '18:00',
                costoEntrada: 10.50,
                recomendaciones: 'Rec a Eliminar',
                restricciones: 'Rest a Eliminar',
                esDestacado: true,
                estado: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const image = { id: 1, url: 'http://example.com/image-to-delete.jpg', createdAt: new Date(), updatedAt: new Date() };
            const imageable = { id: 1, image_id: 1, imageable_id: 1, imageable_type: 'LugarTuristico', image: image };
            prisma.lugarTuristico.findUnique.mockResolvedValue(lugarTuristico);
            prisma.imageable.findMany.mockResolvedValue([imageable]);
            supabaseService.deleteFile.mockResolvedValue({ data: null, error: null });
            prisma.imageable.delete.mockResolvedValue(imageable);
            prisma.image.delete.mockResolvedValue(image);
            prisma.lugarTuristico.delete.mockResolvedValue(lugarTuristico);
            const result = await service.remove(1);
            expect(prisma.lugarTuristico.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
            expect(prisma.imageable.findMany).toHaveBeenCalledWith({
                where: {
                    imageable_type: 'LugarTuristico',
                    imageable_id: 1,
                },
                include: {
                    image: true,
                },
            });
            expect(supabaseService.deleteFile).toHaveBeenCalledWith('lugares-turisticos', image.url);
            expect(prisma.imageable.delete).toHaveBeenCalledWith({ where: { id: imageable.id } });
            expect(prisma.image.delete).toHaveBeenCalledWith({ where: { id: image.id } });
            expect(prisma.lugarTuristico.delete).toHaveBeenCalledWith({ where: { id: 1 } });
            expect(result).toEqual(lugarTuristico);
        });
        it('should throw NotFoundException if lugar turistico to remove does not exist', async () => {
            prisma.lugarTuristico.findUnique.mockResolvedValue(null);
            await expect(service.remove(999)).rejects.toThrow(NotFoundException);
        });
    });
});
//# sourceMappingURL=lugares-turisticos.service.spec.js.map