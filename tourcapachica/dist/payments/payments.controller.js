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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payments_service_1 = require("./payments.service");
const create_payment_dto_1 = require("./dto/create-payment.dto");
const update_payment_dto_1 = require("./dto/update-payment.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let PaymentsController = class PaymentsController {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    async create(createPaymentDto) {
        return this.paymentsService.create(createPaymentDto);
    }
    async findAll() {
        return this.paymentsService.findAll();
    }
    async findOne(id) {
        return this.paymentsService.findOne(+id);
    }
    findByReservaId(reservaId) {
        return this.paymentsService.findByReservaId(+reservaId);
    }
    update(id, updatePaymentDto) {
        return this.paymentsService.update(+id, updatePaymentDto);
    }
    remove(id) {
        return this.paymentsService.remove(+id);
    }
    updateEstado(id, estado) {
        return this.paymentsService.updateEstado(+id, estado);
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('User'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo pago' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pago creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reserva no encontrada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_dto_1.CreatePaymentDto]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('Admin', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los pagos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pagos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('User', 'Admin', 'SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un pago por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pago encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('reserva/:reservaId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener pagos por ID de reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pagos de la reserva' }),
    __param(0, (0, common_1.Param)('reservaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findByReservaId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('SuperAdmin', 'Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pago actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payment_dto_1.UpdatePaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pago eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, roles_decorator_1.Roles)('SuperAdmin', 'Admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estado de un pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado del pago actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Estado inválido' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "updateEstado", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('pagos'),
    (0, common_1.Controller)('pagos'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map