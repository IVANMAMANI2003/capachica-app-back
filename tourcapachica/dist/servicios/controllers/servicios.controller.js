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
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
const servicio_entity_1 = require("../entities/servicio.entity");
const update_estado_dto_1 = require("../dto/update-estado.dto");
let ServiciosController = class ServiciosController {
    constructor(serviciosService) {
        this.serviciosService = serviciosService;
    }
    async create(payload, req) {
        try {
            const user = req.user;
            const roles = user.roles || [];
            const role = roles[0];
            let emprendimientoId;
            console.log('🧾 Usuario autenticado:', user);
            console.log('📦 Payload recibido:', payload);
            console.log('✅ Rol obtenido:', role);
            if (role === 'SuperAdmin') {
                if (!payload.emprendimientoId) {
                    throw new common_1.BadRequestException('El campo emprendimientoId es obligatorio para SuperAdmin');
                }
                emprendimientoId = payload.emprendimientoId;
            }
            else if (role === 'Emprendedor') {
                if (!user.emprendimientoId) {
                    throw new common_1.BadRequestException('No se pudo obtener el emprendimientoId desde el token');
                }
                emprendimientoId = user.emprendimientoId;
            }
            else {
                throw new common_1.ForbiddenException('Rol no autorizado para crear servicios');
            }
            console.log('🔑 Emprendimiento ID usado:', emprendimientoId);
            const servicio = await this.serviciosService.create(payload.servicio, emprendimientoId);
            return servicio;
        }
        catch (error) {
            console.error('🚨 Error al crear el servicio:', error);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Error interno al crear el servicio', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll() {
        return this.serviciosService.findAll();
    }
    findOne(id) {
        return this.serviciosService.findOne(+id);
    }
    async update(id, dto, req) {
        try {
            const user = req.user;
            const roles = user.roles || [];
            const role = roles[0];
            let emprendimientoId;
            console.log('🧾 Usuario autenticado:', user);
            console.log('🛠️ Payload recibido para actualización:', dto);
            console.log('✅ Rol obtenido:', role);
            if (role === 'SuperAdmin') {
                if (!dto.emprendimientoId) {
                    throw new common_1.BadRequestException('El campo emprendimientoId es obligatorio para SuperAdmin');
                }
                emprendimientoId = dto.emprendimientoId;
            }
            else if (role === 'Emprendedor') {
                if (!user.emprendimientoId) {
                    throw new common_1.BadRequestException('No se pudo obtener el emprendimientoId desde el token');
                }
                emprendimientoId = user.emprendimientoId;
            }
            else {
                throw new common_1.ForbiddenException('Rol no autorizado para actualizar servicios');
            }
            console.log('🔑 Emprendimiento ID usado:', emprendimientoId);
            const servicio = await this.serviciosService.update(+id, dto.servicio, emprendimientoId);
            return servicio;
        }
        catch (error) {
            console.error('🚨 Error al actualizar el servicio:', error);
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Error interno al actualizar el servicio', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id, req) {
        const user = req.user;
        const roles = user.roles || [];
        const role = roles[0];
        let emprendimientoId;
        if (role === 'SuperAdmin') {
            emprendimientoId = null;
        }
        else if (role === 'Emprendedor') {
            if (!user.emprendimientoId) {
                throw new common_1.BadRequestException('No se pudo obtener el emprendimientoId desde el token');
            }
            emprendimientoId = user.emprendimientoId;
        }
        else {
            throw new common_1.ForbiddenException('Rol no autorizado para eliminar servicios');
        }
        return this.serviciosService.remove(+id, emprendimientoId);
    }
    async updateEstado(id, updateEstadoDto, req) {
        const emprendimientoId = req.user.emprendimientoId;
        return this.serviciosService.updateEstado(+id, updateEstadoDto.estado, emprendimientoId);
    }
    async findByTipoServicio(tipoServicioId) {
        return this.serviciosService.findByTipoServicio(+tipoServicioId);
    }
    async addFavorite(id, req) {
        return this.serviciosService.addFavorite(req.user.id, +id);
    }
    async removeFavorite(id, req) {
        return this.serviciosService.removeFavorite(req.user.id, +id);
    }
    async findFavorites(req) {
        const userId = req.user.sub;
        console.log('✅ Controlador - Recibido userId para favoritos:', userId);
        return this.serviciosService.findFavorites(userId);
    }
};
exports.ServiciosController = ServiciosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo servicio' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Servicio creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Rol no autorizado' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servicio_dto_1.CreateServicioPayloadDto, Object]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los servicios (público)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de servicios', type: [servicio_entity_1.ServicioEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiciosController.prototype, "findAll", null);
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
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un servicio por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio actualizado exitosamente', type: servicio_entity_1.ServicioEntity }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Rol no autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_servicio_dto_1.UpdateServicioPayloadDto, Object]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un servicio por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Rol no autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estado de un servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado actualizado', type: servicio_entity_1.ServicioEntity }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Estado inválido' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estado_dto_1.UpdateEstadoDto, Object]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "updateEstado", null);
__decorate([
    (0, common_1.Get)('tipo-servicio/:tipoServicioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener servicios por tipo de servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de servicios del tipo especificado', type: [servicio_entity_1.ServicioEntity] }),
    __param(0, (0, common_1.Param)('tipoServicioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "findByTipoServicio", null);
__decorate([
    (0, common_1.Post)(':id/favoriteServicio'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Marcar un servicio como favorito' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Servicio marcado como favorito exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Solicitud inválida' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'El servicio ya está marcado como favorito' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "addFavorite", null);
__decorate([
    (0, common_1.Delete)(':id/favoriteServicio'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un servicio de favoritos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio eliminado de favoritos exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Servicio no encontrado en favoritos' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "removeFavorite", null);
__decorate([
    (0, common_1.Get)('favoritesServicio:/id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener servicios favoritos del usuario autenticado' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de servicios favoritos', type: [servicio_entity_1.ServicioEntity] }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "findFavorites", null);
exports.ServiciosController = ServiciosController = __decorate([
    (0, swagger_1.ApiTags)('servicios'),
    (0, common_1.Controller)('servicios'),
    __metadata("design:paramtypes", [servicios_service_1.ServiciosService])
], ServiciosController);
//# sourceMappingURL=servicios.controller.js.map