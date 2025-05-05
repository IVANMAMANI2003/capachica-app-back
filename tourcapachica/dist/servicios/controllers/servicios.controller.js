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
exports.ServiciosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const servicios_service_1 = require("../services/servicios.service");
const create_servicio_dto_1 = require("../dto/create-servicio.dto");
const update_servicio_dto_1 = require("../dto/update-servicio.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
const servicio_entity_1 = require("../entities/servicio.entity");
let ServiciosController = class ServiciosController {
    constructor(serviciosService) {
        this.serviciosService = serviciosService;
    }
    create(createServicioDto, files) {
        return this.serviciosService.create(createServicioDto, files === null || files === void 0 ? void 0 : files.files);
    }
    findAll() {
        return this.serviciosService.findAll();
    }
    findByEmprendimiento(emprendimientoId) {
        return this.serviciosService.findByEmprendimiento(+emprendimientoId);
    }
    findOne(id) {
        return this.serviciosService.findOne(+id);
    }
    update(id, updateServicioDto, files) {
        return this.serviciosService.update(+id, updateServicioDto, files === null || files === void 0 ? void 0 : files.files);
    }
    remove(id) {
        return this.serviciosService.remove(+id);
    }
    updateEstado(id, estado) {
        return this.serviciosService.updateEstado(+id, estado);
    }
    findByTipoServicio(tipoServicioId) {
        return this.serviciosService.findByTipoServicio(+tipoServicioId);
    }
};
exports.ServiciosController = ServiciosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'files', maxCount: 5 }
    ])),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo servicio' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Servicio creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servicio_dto_1.CreateServicioDto, Object]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los servicios' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de servicios', type: [servicio_entity_1.ServicioEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('emprendimiento/:emprendimientoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener servicios por emprendimiento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de servicios del emprendimiento', type: [servicio_entity_1.ServicioEntity] }),
    __param(0, (0, common_1.Param)('emprendimientoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "findByEmprendimiento", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un servicio por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio encontrado', type: servicio_entity_1.ServicioEntity }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'files', maxCount: 5 }
    ])),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un servicio por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_servicio_dto_1.UpdateServicioDto, Object]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un servicio por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estado de un servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado actualizado', type: servicio_entity_1.ServicioEntity }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Estado inválido' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "updateEstado", null);
__decorate([
    (0, common_1.Get)('tipo-servicio/:tipoServicioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener servicios por tipo de servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de servicios del tipo especificado' }),
    __param(0, (0, common_1.Param)('tipoServicioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "findByTipoServicio", null);
exports.ServiciosController = ServiciosController = __decorate([
    (0, swagger_1.ApiTags)('servicios'),
    (0, common_1.Controller)('servicios'),
    __metadata("design:paramtypes", [servicios_service_1.ServiciosService])
], ServiciosController);
//# sourceMappingURL=servicios.controller.js.map