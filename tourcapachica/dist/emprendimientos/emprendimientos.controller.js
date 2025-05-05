"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprendimientosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const emprendimientos_service_1 = require("./emprendimientos.service");
const create_emprendimiento_dto_1 = require("./dto/create-emprendimiento.dto");
const update_emprendimiento_dto_1 = require("./dto/update-emprendimiento.dto");
const create_favorito_dto_1 = require("./dto/create-favorito.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
const emprendimiento_entity_1 = require("./entities/emprendimiento.entity");
const favorito_entity_1 = require("./entities/favorito.entity");
let EmprendimientosController = class EmprendimientosController {
    constructor(emprendimientosService) {
        this.emprendimientosService = emprendimientosService;
    }
    create(createEmprendimientoDto, files) {
        return this.emprendimientosService.create(createEmprendimientoDto, files === null || files === void 0 ? void 0 : files.files);
    }
    findAll() {
        return this.emprendimientosService.findAll();
    }
    findMyEmprendimientos(req) {
        return this.emprendimientosService.findByUsuario(req.user.id);
    }
    findByUsuario(usuarioId) {
        return this.emprendimientosService.findByUsuario(+usuarioId);
    }
    findOne(id) {
        return this.emprendimientosService.findOne(+id);
    }
    update(id, updateEmprendimientoDto, files) {
        return this.emprendimientosService.update(+id, updateEmprendimientoDto, files === null || files === void 0 ? void 0 : files.files);
    }
    remove(id) {
        return this.emprendimientosService.remove(+id);
    }
    updateEstado(id, estado) {
        return this.emprendimientosService.updateEstado(+id, estado);
    }
    addFavorito(req, createFavoritoDto) {
        return this.emprendimientosService.addFavorito(req.user.id, createFavoritoDto);
    }
    removeFavorito(req, id) {
        return this.emprendimientosService.removeFavorito(req.user.id, +id);
    }
    getFavoritos(req) {
        return this.emprendimientosService.getFavoritos(req.user.id);
    }
    isFavorito(req, id) {
        return this.emprendimientosService.isFavorito(req.user.id, +id);
    }
};
exports.EmprendimientosController = EmprendimientosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'files', maxCount: 5 }
    ])),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo emprendimiento' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Emprendimiento creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emprendimiento_dto_1.CreateEmprendimientoDto, Object]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los emprendimientos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de emprendimientos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('mis-emprendimientos'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener los emprendimientos del usuario autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de emprendimientos del usuario', type: [emprendimiento_entity_1.EmprendimientoEntity] }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "findMyEmprendimientos", null);
__decorate([
    (0, common_1.Get)('usuario/:usuarioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener emprendimientos por usuario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de emprendimientos del usuario' }),
    __param(0, (0, common_1.Param)('usuarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un emprendimiento por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Emprendimiento encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Emprendimiento no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'files', maxCount: 5 }
    ])),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un emprendimiento por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Emprendimiento actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Emprendimiento no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_emprendimiento_dto_1.UpdateEmprendimientoDto, Object]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un emprendimiento por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Emprendimiento eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Emprendimiento no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, roles_decorator_1.Roles)('SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estado de un emprendimiento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado actualizado', type: emprendimiento_entity_1.EmprendimientoEntity }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Emprendimiento no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "updateEstado", null);
__decorate([
    (0, common_1.Post)('favoritos'),
    (0, swagger_1.ApiOperation)({ summary: 'Marcar un emprendimiento como favorito' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Emprendimiento marcado como favorito', type: favorito_entity_1.FavoritoEntity }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos o emprendimiento ya marcado como favorito' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Emprendimiento no encontrado' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_favorito_dto_1.CreateFavoritoDto]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "addFavorito", null);
__decorate([
    (0, common_1.Delete)('favoritos/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un emprendimiento de favoritos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Emprendimiento eliminado de favoritos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Favorito no encontrado' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "removeFavorito", null);
__decorate([
    (0, common_1.Get)('favoritos'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener los emprendimientos favoritos del usuario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de emprendimientos favoritos', type: [favorito_entity_1.FavoritoEntity] }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "getFavoritos", null);
__decorate([
    (0, common_1.Get)('favoritos/:id/check'),
    (0, swagger_1.ApiOperation)({ summary: 'Verificar si un emprendimiento está marcado como favorito' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado del favorito', type: Boolean }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], EmprendimientosController.prototype, "isFavorito", null);
exports.EmprendimientosController = EmprendimientosController = __decorate([
    (0, swagger_1.ApiTags)('emprendimientos'),
    (0, common_1.Controller)('emprendimientos'),
    __metadata("design:paramtypes", [emprendimientos_service_1.EmprendimientosService])
], EmprendimientosController);
//# sourceMappingURL=emprendimientos.controller.js.map