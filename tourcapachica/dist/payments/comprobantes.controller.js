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
exports.ComprobantesController = void 0;
const common_1 = require("@nestjs/common");
const comprobantes_service_1 = require("./comprobantes.service");
const create_comprobante_dto_1 = require("./dto/create-comprobante.dto");
const update_comprobante_dto_1 = require("./dto/update-comprobante.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let ComprobantesController = class ComprobantesController {
    constructor(comprobantesService) {
        this.comprobantesService = comprobantesService;
    }
    create(createComprobanteDto) {
        return this.comprobantesService.create(createComprobanteDto);
    }
    findAll() {
        return this.comprobantesService.findAll();
    }
    findOne(id) {
        return this.comprobantesService.findOne(+id);
    }
    findByPagoId(pagoId) {
        return this.comprobantesService.findByPagoId(+pagoId);
    }
    update(id, updateComprobanteDto) {
        return this.comprobantesService.update(+id, updateComprobanteDto);
    }
    remove(id) {
        return this.comprobantesService.remove(+id);
    }
    updateEstado(id, estado) {
        return this.comprobantesService.updateEstado(+id, estado);
    }
};
exports.ComprobantesController = ComprobantesController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo comprobante' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Comprobante creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pago no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comprobante_dto_1.CreateComprobanteDto]),
    __metadata("design:returntype", void 0)
], ComprobantesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los comprobantes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de comprobantes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComprobantesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un comprobante por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Comprobante encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Comprobante no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComprobantesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('pago/:pagoId'),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un comprobante por ID de pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Comprobante encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Comprobante no encontrado' }),
    __param(0, (0, common_1.Param)('pagoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComprobantesController.prototype, "findByPagoId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un comprobante' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Comprobante actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Comprobante no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comprobante_dto_1.UpdateComprobanteDto]),
    __metadata("design:returntype", void 0)
], ComprobantesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un comprobante' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Comprobante eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Comprobante no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComprobantesController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, roles_decorator_1.Roles)('Emprendedor', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estado de un comprobante' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Comprobante no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ComprobantesController.prototype, "updateEstado", null);
exports.ComprobantesController = ComprobantesController = __decorate([
    (0, swagger_1.ApiTags)('comprobantes'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('comprobantes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [comprobantes_service_1.ComprobantesService])
], ComprobantesController);
//# sourceMappingURL=comprobantes.controller.js.map