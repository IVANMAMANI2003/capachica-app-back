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
exports.PagoDetalleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pago_detalle_service_1 = require("./pago-detalle.service");
const create_pago_detalle_dto_1 = require("./dto/create-pago-detalle.dto");
const update_pago_detalle_dto_1 = require("./dto/update-pago-detalle.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let PagoDetalleController = class PagoDetalleController {
    constructor(pagoDetalleService) {
        this.pagoDetalleService = pagoDetalleService;
    }
    create(createPagoDetalleDto) {
        return this.pagoDetalleService.create(createPagoDetalleDto);
    }
    findAll() {
        return this.pagoDetalleService.findAll();
    }
    findOne(id) {
        return this.pagoDetalleService.findOne(+id);
    }
    findByPagoId(pagoId) {
        return this.pagoDetalleService.findByPagoId(+pagoId);
    }
    update(id, updatePagoDetalleDto) {
        return this.pagoDetalleService.update(+id, updatePagoDetalleDto);
    }
    remove(id) {
        return this.pagoDetalleService.remove(+id);
    }
};
exports.PagoDetalleController = PagoDetalleController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('SuperAdmin', 'Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo detalle de pago' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Detalle de pago creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pago_detalle_dto_1.CreatePagoDetalleDto]),
    __metadata("design:returntype", void 0)
], PagoDetalleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los detalles de pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de detalles de pago' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PagoDetalleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un detalle de pago por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalle de pago encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Detalle de pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagoDetalleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('pago/:pagoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener detalles de pago por ID de pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de detalles de pago' }),
    __param(0, (0, common_1.Param)('pagoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagoDetalleController.prototype, "findByPagoId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('SuperAdmin', 'Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un detalle de pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalle de pago actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Detalle de pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pago_detalle_dto_1.UpdatePagoDetalleDto]),
    __metadata("design:returntype", void 0)
], PagoDetalleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('SuperAdmin', 'Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un detalle de pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalle de pago eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Detalle de pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagoDetalleController.prototype, "remove", null);
exports.PagoDetalleController = PagoDetalleController = __decorate([
    (0, swagger_1.ApiTags)('pago-detalle'),
    (0, common_1.Controller)('pago-detalle'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [pago_detalle_service_1.PagoDetalleService])
], PagoDetalleController);
//# sourceMappingURL=pago-detalle.controller.js.map