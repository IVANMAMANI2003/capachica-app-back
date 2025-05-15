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
exports.ItinerarioReservaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const itinerario_reserva_service_1 = require("../services/itinerario-reserva.service");
const update_itinerario_reserva_dto_1 = require("../dto/update-itinerario-reserva.dto");
const create_itinerarios_for_reserva_dto_1 = require("../dto/create-itinerarios-for-reserva.dto");
let ItinerarioReservaController = class ItinerarioReservaController {
    constructor(itinerarioReservaService) {
        this.itinerarioReservaService = itinerarioReservaService;
    }
    createMany(dto) {
        return this.itinerarioReservaService.createMany(dto.reservaId, dto.itinerarios);
    }
    findAll() {
        return this.itinerarioReservaService.findAll();
    }
    findOne(id) {
        return this.itinerarioReservaService.findOne(+id);
    }
    update(id, updateItinerarioReservaDto) {
        return this.itinerarioReservaService.update(+id, updateItinerarioReservaDto);
    }
    remove(id) {
        return this.itinerarioReservaService.remove(+id);
    }
};
exports.ItinerarioReservaController = ItinerarioReservaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear nuevos itinerarios para una reserva' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Itinerarios creados exitosamente.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_itinerarios_for_reserva_dto_1.CreateItinerariosForReservaDto]),
    __metadata("design:returntype", void 0)
], ItinerarioReservaController.prototype, "createMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los itinerarios' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de itinerarios.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItinerarioReservaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un itinerario por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalles del itinerario.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItinerarioReservaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un itinerario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Itinerario actualizado exitosamente.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_itinerario_reserva_dto_1.UpdateItinerarioReservaDto]),
    __metadata("design:returntype", void 0)
], ItinerarioReservaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un itinerario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Itinerario eliminado exitosamente.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItinerarioReservaController.prototype, "remove", null);
exports.ItinerarioReservaController = ItinerarioReservaController = __decorate([
    (0, swagger_1.ApiTags)('itinerarios'),
    (0, common_1.Controller)('itinerarios'),
    __metadata("design:paramtypes", [itinerario_reserva_service_1.ItinerarioReservaService])
], ItinerarioReservaController);
//# sourceMappingURL=itinerario-reserva.controller.js.map