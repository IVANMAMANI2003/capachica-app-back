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
const servicios_service_1 = require("../services/servicios.service");
const create_servicio_dto_1 = require("../dto/create-servicio.dto");
const update_servicio_dto_1 = require("../dto/update-servicio.dto");
const create_servicio_disponibilidad_dto_1 = require("../dto/create-servicio-disponibilidad.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
const servicio_entity_1 = require("../entities/servicio.entity");
let ServiciosController = class ServiciosController {
    constructor(serviciosService) {
        this.serviciosService = serviciosService;
    }
    create(emprendimientoId, createServicioDto) {
        return this.serviciosService.create(+emprendimientoId, createServicioDto);
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
    update(id, updateServicioDto) {
        return this.serviciosService.update(+id, updateServicioDto);
    }
    remove(id) {
        return this.serviciosService.remove(+id);
    }
    updateEstado(id, estado) {
        return this.serviciosService.updateEstado(+id, estado);
    }
    createDisponibilidad(createDisponibilidadDto) {
        return this.serviciosService.createDisponibilidad(createDisponibilidadDto);
    }
    createDisponibilidades(disponibilidades) {
        return this.serviciosService.createDisponibilidades(disponibilidades);
    }
    getDisponibilidad(servicioId) {
        return this.serviciosService.getDisponibilidad(+servicioId);
    }
    getDisponibilidadByFecha(servicioId, fecha) {
        return this.serviciosService.getDisponibilidadByFecha(+servicioId, fecha);
    }
};
exports.ServiciosController = ServiciosController;
__decorate([
    (0, common_1.Post)('emprendimiento/:emprendimientoId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo servicio para un emprendimiento' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Servicio creado exitosamente', type: servicio_entity_1.ServicioEntity }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo de servicio no encontrado' }),
    __param(0, (0, common_1.Param)('emprendimientoId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_servicio_dto_1.CreateServicioDto]),
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
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio actualizado', type: servicio_entity_1.ServicioEntity }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_servicio_dto_1.UpdateServicioDto]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
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
    (0, common_1.Post)('disponibilidad'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear disponibilidad para un servicio' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Disponibilidad creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servicio_disponibilidad_dto_1.CreateServicioDisponibilidadDto]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "createDisponibilidad", null);
__decorate([
    (0, common_1.Post)('disponibilidad/batch'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear múltiples disponibilidades para un servicio' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Disponibilidades creadas exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "createDisponibilidades", null);
__decorate([
    (0, common_1.Get)('disponibilidad/:servicioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener disponibilidad de un servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de disponibilidades del servicio' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('servicioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "getDisponibilidad", null);
__decorate([
    (0, common_1.Get)('disponibilidad/:servicioId/:fecha'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener disponibilidad de un servicio para una fecha específica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('servicioId')),
    __param(1, (0, common_1.Param)('fecha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "getDisponibilidadByFecha", null);
exports.ServiciosController = ServiciosController = __decorate([
    (0, swagger_1.ApiTags)('servicios'),
    (0, common_1.Controller)('servicios'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [servicios_service_1.ServiciosService])
], ServiciosController);
//# sourceMappingURL=servicios.controller.js.map