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
exports.TipoPagoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tipos_pago_service_1 = require("./tipos-pago.service");
const create_tipo_pago_dto_1 = require("./dto/create-tipo-pago.dto");
const update_tipo_pago_dto_1 = require("./dto/update-tipo-pago.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let TipoPagoController = class TipoPagoController {
    constructor(tipoPagoService) {
        this.tipoPagoService = tipoPagoService;
    }
    create(createTipoPagoDto) {
        return this.tipoPagoService.create(createTipoPagoDto);
    }
    findAll() {
        return this.tipoPagoService.findAll();
    }
    findOne(id) {
        return this.tipoPagoService.findOne(+id);
    }
    update(id, updateTipoPagoDto) {
        return this.tipoPagoService.update(+id, updateTipoPagoDto);
    }
    remove(id) {
        return this.tipoPagoService.remove(+id);
    }
};
exports.TipoPagoController = TipoPagoController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo tipo de pago' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tipo de pago creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_pago_dto_1.CreateTipoPagoDto]),
    __metadata("design:returntype", void 0)
], TipoPagoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los tipos de pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de tipos de pago' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoPagoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un tipo de pago por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo de pago encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo de pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoPagoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un tipo de pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo de pago actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Datos inválidos' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo de pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tipo_pago_dto_1.UpdateTipoPagoDto]),
    __metadata("design:returntype", void 0)
], TipoPagoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('SuperAdmin'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un tipo de pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tipo de pago eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Tipo de pago no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoPagoController.prototype, "remove", null);
exports.TipoPagoController = TipoPagoController = __decorate([
    (0, swagger_1.ApiTags)('tipos-pago'),
    (0, common_1.Controller)('tipos-pago'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [tipos_pago_service_1.TipoPagoService])
], TipoPagoController);
//# sourceMappingURL=tipos-pago.controller.js.map