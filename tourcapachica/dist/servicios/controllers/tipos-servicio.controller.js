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
exports.TiposServicioController = void 0;
const common_1 = require("@nestjs/common");
const tipos_servicio_service_1 = require("../services/tipos-servicio.service");
const create_tipo_servicio_dto_1 = require("../dto/create-tipo-servicio.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let TiposServicioController = class TiposServicioController {
    constructor(tiposServicioService) {
        this.tiposServicioService = tiposServicioService;
    }
    create(createTipoServicioDto) {
        return this.tiposServicioService.create(createTipoServicioDto);
    }
    findAll() {
        return this.tiposServicioService.findAll();
    }
    findOne(id) {
        return this.tiposServicioService.findOne(+id);
    }
    remove(id) {
        return this.tiposServicioService.remove(+id);
    }
};
exports.TiposServicioController = TiposServicioController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo tipo de servicio' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tipo de servicio creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_servicio_dto_1.CreateTipoServicioDto]),
    __metadata("design:returntype", void 0)
], TiposServicioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los tipos de servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de tipos de servicio' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposServicioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un tipo de servicio por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo de servicio encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo de servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposServicioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un tipo de servicio' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo de servicio eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo de servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposServicioController.prototype, "remove", null);
exports.TiposServicioController = TiposServicioController = __decorate([
    (0, swagger_1.ApiTags)('tipos-servicio'),
    (0, common_1.Controller)('tipos-servicio'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [tipos_servicio_service_1.TiposServicioService])
], TiposServicioController);
//# sourceMappingURL=tipos-servicio.controller.js.map