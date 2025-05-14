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
exports.ReservaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const reserva_service_1 = require("../services/reserva.service");
const create_reserva_dto_1 = require("../dto/create-reserva.dto");
const update_reserva_dto_1 = require("../dto/update-reserva.dto");
let ReservaController = class ReservaController {
    constructor(reservaService) {
        this.reservaService = reservaService;
    }
    create(createReservaDto) {
        return this.reservaService.create(createReservaDto);
    }
    findAll() {
        return this.reservaService.findAll();
    }
    findOne(id) {
        return this.reservaService.findOne(+id);
    }
    update(id, updateReservaDto) {
        return this.reservaService.update(+id, updateReservaDto);
    }
    remove(id) {
        return this.reservaService.remove(+id);
    }
};
exports.ReservaController = ReservaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva reserva' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Reserva creada exitosamente.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reserva_dto_1.CreateReservaDto]),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las reservas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de reservas.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una reserva por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalles de la reserva.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reserva actualizada exitosamente.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reserva_dto_1.UpdateReservaDto]),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reserva eliminada exitosamente.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "remove", null);
exports.ReservaController = ReservaController = __decorate([
    (0, swagger_1.ApiTags)('reservas'),
    (0, common_1.Controller)('reservas'),
    __metadata("design:paramtypes", [reserva_service_1.ReservaService])
], ReservaController);
//# sourceMappingURL=reserva.controller.js.map