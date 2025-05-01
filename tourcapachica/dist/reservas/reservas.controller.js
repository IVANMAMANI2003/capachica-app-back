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
exports.ReservasController = void 0;
const common_1 = require("@nestjs/common");
const reservas_service_1 = require("./reservas.service");
const create_reserva_dto_1 = require("./dto/create-reserva.dto");
const update_reserva_dto_1 = require("./dto/update-reserva.dto");
const swagger_1 = require("@nestjs/swagger");
const create_reserva_dto_2 = require("./dto/create-reserva.dto");
let ReservasController = class ReservasController {
    constructor(reservasService) {
        this.reservasService = reservasService;
    }
    create(createReservaDto) {
        return this.reservasService.create(createReservaDto);
    }
    findAll() {
        return this.reservasService.findAll();
    }
    findOne(id) {
        return this.reservasService.findOne(id);
    }
    update(id, updateReservaDto) {
        return this.reservasService.update(id, updateReservaDto);
    }
    remove(id) {
        return this.reservasService.remove(id);
    }
    findByTurista(turistaId) {
        return this.reservasService.findByTurista(turistaId);
    }
    updateEstado(id, estado) {
        return this.reservasService.updateEstado(id, estado);
    }
};
exports.ReservasController = ReservasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva reserva' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Reserva creada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Turista no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reserva_dto_1.CreateReservaDto]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las reservas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de reservas obtenida exitosamente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una reserva por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reserva encontrada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reserva no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una reserva' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reserva actualizada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reserva o turista no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_reserva_dto_1.UpdateReservaDto]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una reserva' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reserva eliminada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reserva no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('turista/:turistaId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las reservas de un turista' }),
    (0, swagger_1.ApiParam)({ name: 'turistaId', description: 'ID del turista' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de reservas obtenida exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Turista no encontrado' }),
    __param(0, (0, common_1.Param)('turistaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "findByTurista", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estado de una reserva' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado de la reserva actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reserva no encontrada' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ReservasController.prototype, "updateEstado", null);
exports.ReservasController = ReservasController = __decorate([
    (0, swagger_1.ApiTags)('reservas'),
    (0, common_1.Controller)('reservas'),
    __metadata("design:paramtypes", [reservas_service_1.ReservasService])
], ReservasController);
//# sourceMappingURL=reservas.controller.js.map