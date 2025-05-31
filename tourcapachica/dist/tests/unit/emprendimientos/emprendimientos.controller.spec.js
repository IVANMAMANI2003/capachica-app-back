"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const emprendimientos_controller_1 = require("../../../src/emprendimientos/emprendimientos.controller");
const emprendimientos_service_1 = require("../../../src/emprendimientos/emprendimientos.service");
const common_1 = require("@nestjs/common");
const mockUser = { id: 1 };
const mockEmprendimientosService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findByUsuario: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    addFavorito: jest.fn(),
    removeFavorito: jest.fn(),
    getFavoritos: jest.fn(),
};
const mockRequestWithUser = {
    user: mockUser,
    get: jest.fn(),
    header: jest.fn(),
    accepts: jest.fn(),
    acceptsCharsets: jest.fn(),
    acceptsEncodings: jest.fn(),
    acceptsLanguages: jest.fn(),
    is: jest.fn(),
};
describe('EmprendimientosController', () => {
    let controller;
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [emprendimientos_controller_1.EmprendimientosController],
            providers: [
                {
                    provide: emprendimientos_service_1.EmprendimientosService,
                    useValue: mockEmprendimientosService,
                },
            ],
        })
            .overrideGuard('JwtAuthGuard')
            .useValue({ canActivate: jest.fn().mockReturnValue(true) })
            .overrideGuard('RolesGuard')
            .useValue({ canActivate: jest.fn().mockReturnValue(true) })
            .compile();
        controller = module.get(emprendimientos_controller_1.EmprendimientosController);
        service = module.get(emprendimientos_service_1.EmprendimientosService);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe('create', () => {
        it('should create a new emprendimiento', async () => {
            const dto = {
                nombre: 'Test',
                descripcion: 'Desc',
                tipo: 'RESTAURANTE',
                direccion: 'Dir',
                latitud: 1,
                longitud: 2,
                contactoTelefono: '123',
                contactoEmail: 'a@a.com',
                sitioWeb: 'web',
                redesSociales: {},
                lugarTuristicoId: 1,
                usuarioId: 1,
                imagenes: [],
            };
            const expected = Object.assign({ id: 1 }, dto);
            mockEmprendimientosService.create.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.create(dto, req);
            expect(result).toEqual(expected);
            expect(service.create).toHaveBeenCalledWith(dto, mockUser.id);
        });
    });
    describe('findAll', () => {
        it('should return all emprendimientos', async () => {
            const expected = [{ id: 1 }, { id: 2 }];
            mockEmprendimientosService.findAll.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.findAll();
            expect(result).toEqual(expected);
            expect(service.findAll).toHaveBeenCalled();
        });
    });
    describe('findMyEmprendimientos', () => {
        it('should return emprendimientos for the authenticated user', async () => {
            const expected = [{ id: 1 }];
            mockEmprendimientosService.findByUsuario.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.findMyEmprendimientos(req);
            expect(result).toEqual(expected);
            expect(service.findByUsuario).toHaveBeenCalledWith(mockUser.id);
        });
    });
    describe('findByUsuario', () => {
        it('should return emprendimientos for a given usuarioId', async () => {
            const expected = [{ id: 1 }];
            mockEmprendimientosService.findByUsuario.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.findByUsuario('1');
            expect(result).toEqual(expected);
            expect(service.findByUsuario).toHaveBeenCalledWith(1);
        });
    });
    describe('findOne', () => {
        it('should return an emprendimiento by id', async () => {
            const expected = { id: 1 };
            mockEmprendimientosService.findOne.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.findOne('1');
            expect(result).toEqual(expected);
            expect(service.findOne).toHaveBeenCalledWith(1);
        });
        it('should throw NotFoundException if not found', async () => {
            mockEmprendimientosService.findOne.mockResolvedValue(null);
            const req = mockRequestWithUser;
            await expect(controller.findOne('999')).rejects.toThrow(common_1.NotFoundException);
        });
    });
    describe('update', () => {
        it('should update an emprendimiento', async () => {
            const dto = { nombre: 'Updated' };
            const expected = Object.assign({ id: 1 }, dto);
            mockEmprendimientosService.update.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.update('1', dto);
            expect(result).toEqual(expected);
            expect(service.update).toHaveBeenCalledWith(1, dto);
        });
    });
    describe('remove', () => {
        it('should remove an emprendimiento', async () => {
            const expected = { id: 1 };
            mockEmprendimientosService.remove.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.remove('1');
            expect(result).toEqual(expected);
            expect(service.remove).toHaveBeenCalledWith(1);
        });
    });
    describe('addFavorito', () => {
        it('should add a favorito', async () => {
            const expected = { id: 1, usuarioId: 1, emprendimientoId: 1 };
            mockEmprendimientosService.addFavorito.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.addFavorito('1', req);
            expect(result).toEqual(expected);
            expect(service.addFavorito).toHaveBeenCalledWith(mockUser.id, 1);
        });
    });
    describe('removeFavorito', () => {
        it('should remove a favorito', async () => {
            const expected = { count: 1 };
            mockEmprendimientosService.removeFavorito.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.removeFavorito('1', req);
            expect(result).toEqual(expected);
            expect(service.removeFavorito).toHaveBeenCalledWith(mockUser.id, 1);
        });
    });
    describe('getFavoritos', () => {
        it('should get user favoritos', async () => {
            const expected = [{ id: 1 }];
            mockEmprendimientosService.getFavoritos.mockResolvedValue(expected);
            const req = mockRequestWithUser;
            const result = await controller.getFavoritos(req);
            expect(result).toEqual(expected);
            expect(service.getFavoritos).toHaveBeenCalledWith(mockUser.id);
        });
    });
});
//# sourceMappingURL=emprendimientos.controller.spec.js.map