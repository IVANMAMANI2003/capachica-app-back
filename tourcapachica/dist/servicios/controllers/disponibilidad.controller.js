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
exports.DisponibilidadController = void 0;
const common_1 = require("@nestjs/common");
const disponibilidad_service_1 = require("../services/disponibilidad.service");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
const create_servicio_disponibilidad_dto_1 = require("../dto/create-servicio-disponibilidad.dto");
const update_disponibilidad_dto_1 = require("../../paquetes-turisticos/dto/update-disponibilidad.dto");
let DisponibilidadController = class DisponibilidadController {
    constructor(disponibilidadService) {
        this.disponibilidadService = disponibilidadService;
    }
    create(createDisponibilidadDto) {
        return this.disponibilidadService.createDisponibilidad(createDisponibilidadDto);
    }
    createBatch(disponibilidades) {
        return this.disponibilidadService.createDisponibilidades(disponibilidades);
    }
    findAll() {
        return this.disponibilidadService.findAll();
    }
    findByServicio(servicioId) {
        return this.disponibilidadService.findByServicio(+servicioId);
    }
    findOne(id) {
        return this.disponibilidadService.findOne(+id);
    }
    update(id, updateData) {
        return this.disponibilidadService.update(+id, updateData);
    }
    remove(id) {
        return this.disponibilidadService.remove(+id);
    }
};
exports.DisponibilidadController = DisponibilidadController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear disponibilidad para un servicio' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Disponibilidad creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos o fecha ya registrada' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servicio_disponibilidad_dto_1.CreateServicioDisponibilidadDto]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('batch'),
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
], DisponibilidadController.prototype, "createBatch", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las disponibilidades' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de disponibilidades' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('servicio/:servicioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener disponibilidades por servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de disponibilidades del servicio' }),
    __param(0, (0, common_1.Param)('servicioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "findByServicio", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una disponibilidad por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una disponibilidad' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad actualizada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_disponibilidad_dto_1.UpdateDisponibilidadDto]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una disponibilidad' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad eliminada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DisponibilidadController.prototype, "remove", null);
exports.DisponibilidadController = DisponibilidadController = __decorate([
    (0, swagger_1.ApiTags)('disponibilidad'),
    (0, common_1.Controller)('disponibilidad'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [disponibilidad_service_1.DisponibilidadService])
], DisponibilidadController);
//# sourceMappingURL=disponibilidad.controller.js.map