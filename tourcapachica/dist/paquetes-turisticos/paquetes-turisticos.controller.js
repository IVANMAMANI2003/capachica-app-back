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
exports.PaquetesTuristicosController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const paquetes_turisticos_service_1 = require("./paquetes-turisticos.service");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const create_disponibilidad_dto_1 = require("./dto/create-disponibilidad.dto");
const update_disponibilidad_dto_1 = require("./dto/update-disponibilidad.dto");
const create_paquete_turistico_dto_1 = require("./dto/create-paquete-turistico.dto");
const update_paquete_turistico_dto_1 = require("./dto/update-paquete-turistico.dto");
const add_servicios_dto_1 = require("./dto/add-servicios.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
let PaquetesTuristicosController = class PaquetesTuristicosController {
    constructor(paquetesTuristicosService) {
        this.paquetesTuristicosService = paquetesTuristicosService;
    }
    create(createPaqueteTuristicoDto, files) {
        return this.paquetesTuristicosService.create(createPaqueteTuristicoDto, files === null || files === void 0 ? void 0 : files.files);
    }
    findAll() {
        return this.paquetesTuristicosService.findAll();
    }
    findByEmprendimiento(emprendimientoId) {
        return this.paquetesTuristicosService.findByEmprendimiento(+emprendimientoId);
    }
    findOne(id) {
        return this.paquetesTuristicosService.findOne(+id);
    }
    update(id, updatePaqueteTuristicoDto, files) {
        return this.paquetesTuristicosService.update(+id, updatePaqueteTuristicoDto, files === null || files === void 0 ? void 0 : files.files);
    }
    remove(id) {
        return this.paquetesTuristicosService.remove(+id);
    }
    updateEstado(id, estado) {
        return this.paquetesTuristicosService.updateEstado(+id, estado);
    }
    async addServicios(id, addServiciosDto, req) {
        return this.paquetesTuristicosService.addServicios(id, addServiciosDto, req.user.id);
    }
    async removeServicio(id, servicioId, req) {
        return this.paquetesTuristicosService.removeServicio(id, servicioId, req.user.id);
    }
    async getEstadisticas(id, req) {
        return this.paquetesTuristicosService.getEstadisticas(id, req.user.id);
    }
    async exportarDatos(id, req) {
        return this.paquetesTuristicosService.exportarDatos(id, req.user.id);
    }
    async createDisponibilidad(id, createDisponibilidadDto) {
        return this.paquetesTuristicosService.createDisponibilidad(id, createDisponibilidadDto);
    }
    async getDisponibilidadesPaquete(id) {
        return this.paquetesTuristicosService.getDisponibilidadesPaquete(id);
    }
    async getDisponibilidad(id) {
        return this.paquetesTuristicosService.getDisponibilidad(id);
    }
    async updateDisponibilidad(id, updateDisponibilidadDto) {
        return this.paquetesTuristicosService.updateDisponibilidad(id, updateDisponibilidadDto);
    }
    async deleteDisponibilidad(id) {
        return this.paquetesTuristicosService.deleteDisponibilidad(id);
    }
};
exports.PaquetesTuristicosController = PaquetesTuristicosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'files', maxCount: 5 }
    ])),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Paquete turístico creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paquete_turistico_dto_1.CreatePaqueteTuristicoDto, Object]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los paquetes turísticos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de paquetes turísticos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('emprendimiento/:emprendimientoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener paquetes turísticos por emprendimiento' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de paquetes turísticos del emprendimiento' }),
    __param(0, (0, common_1.Param)('emprendimientoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "findByEmprendimiento", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un paquete turístico por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Paquete turístico encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'files', maxCount: 5 }
    ])),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un paquete turístico por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Paquete turístico actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paquete_turistico_dto_1.UpdatePaqueteTuristicoDto, Object]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un paquete turístico por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Paquete turístico eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estado de un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Estado inválido' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PaquetesTuristicosController.prototype, "updateEstado", null);
__decorate([
    (0, common_1.Post)(':id/servicios'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar servicios a un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicios agregados exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete o servicios no encontrados' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_servicios_dto_1.AddServiciosDto, Object]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "addServicios", null);
__decorate([
    (0, common_1.Delete)(':id/servicios/:servicioId'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un servicio de un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Servicio eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete o servicio no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('servicioId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "removeServicio", null);
__decorate([
    (0, common_1.Get)(':id/estadisticas'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener estadísticas de un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estadísticas obtenidas exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "getEstadisticas", null);
__decorate([
    (0, common_1.Get)(':id/exportar'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Exportar datos de un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos exportados exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete no encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "exportarDatos", null);
__decorate([
    (0, common_1.Post)(':id/disponibilidad'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear disponibilidad para un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Disponibilidad creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_disponibilidad_dto_1.CreateDisponibilidadDto]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "createDisponibilidad", null);
__decorate([
    (0, common_1.Get)(':id/disponibilidad'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las disponibilidades de un paquete turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de disponibilidades' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Paquete turístico no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "getDisponibilidadesPaquete", null);
__decorate([
    (0, common_1.Get)('disponibilidad/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una disponibilidad específica' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "getDisponibilidad", null);
__decorate([
    (0, common_1.Patch)('disponibilidad/:id'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una disponibilidad' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad actualizada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_disponibilidad_dto_1.UpdateDisponibilidadDto]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "updateDisponibilidad", null);
__decorate([
    (0, common_1.Delete)('disponibilidad/:id'),
    (0, roles_decorator_1.Roles)('emprendedor', 'SuperAdmin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una disponibilidad' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Disponibilidad eliminada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Disponibilidad no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaquetesTuristicosController.prototype, "deleteDisponibilidad", null);
exports.PaquetesTuristicosController = PaquetesTuristicosController = __decorate([
    (0, swagger_1.ApiTags)('paquetes-turisticos'),
    (0, common_1.Controller)('paquetes-turisticos'),
    __metadata("design:paramtypes", [paquetes_turisticos_service_1.PaquetesTuristicosService])
], PaquetesTuristicosController);
//# sourceMappingURL=paquetes-turisticos.controller.js.map