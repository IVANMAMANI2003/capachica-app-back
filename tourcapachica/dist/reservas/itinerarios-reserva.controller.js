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
exports.ItinerariosReservaController = void 0;
const common_1 = require("@nestjs/common");
const itinerarios_reserva_service_1 = require("./itinerarios-reserva.service");
const create_itinerario_reserva_dto_1 = require("./dto/create-itinerario-reserva.dto");
const update_itinerario_reserva_dto_1 = require("./dto/update-itinerario-reserva.dto");
const swagger_1 = require("@nestjs/swagger");
let ItinerariosReservaController = class ItinerariosReservaController {
    constructor(itinerariosReservaService) {
        this.itinerariosReservaService = itinerariosReservaService;
    }
    create(createItinerarioReservaDto) {
        return this.itinerariosReservaService.create(createItinerarioReservaDto);
    }
    findAll() {
        return this.itinerariosReservaService.findAll();
    }
    findOne(id) {
        return this.itinerariosReservaService.findOne(id);
    }
    update(id, updateItinerarioReservaDto) {
        return this.itinerariosReservaService.update(id, updateItinerarioReservaDto);
    }
    remove(id) {
        return this.itinerariosReservaService.remove(id);
    }
    findByReserva(reservaId) {
        return this.itinerariosReservaService.findByReserva(reservaId);
    }
};
exports.ItinerariosReservaController = ItinerariosReservaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo itinerario de reserva' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Itinerario creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reserva, servicio o lugar turístico no encontrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_itinerario_reserva_dto_1.CreateItinerarioReservaDto]),
    __metadata("design:returntype", void 0)
], ItinerariosReservaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los itinerarios de reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de itinerarios obtenida exitosamente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItinerariosReservaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un itinerario de reserva por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del itinerario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Itinerario encontrado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Itinerario no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItinerariosReservaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un itinerario de reserva' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del itinerario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Itinerario actualizado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Itinerario, reserva o servicio no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_itinerario_reserva_dto_1.UpdateItinerarioReservaDto]),
    __metadata("design:returntype", void 0)
], ItinerariosReservaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un itinerario de reserva' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del itinerario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Itinerario eliminado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Itinerario no encontrado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItinerariosReservaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('reserva/:reservaId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los itinerarios de una reserva' }),
    (0, swagger_1.ApiParam)({ name: 'reservaId', description: 'ID de la reserva' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de itinerarios obtenida exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Reserva no encontrada' }),
    __param(0, (0, common_1.Param)('reservaId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItinerariosReservaController.prototype, "findByReserva", null);
exports.ItinerariosReservaController = ItinerariosReservaController = __decorate([
    (0, swagger_1.ApiTags)('itinerarios-reserva'),
    (0, common_1.Controller)('itinerarios-reserva'),
    __metadata("design:paramtypes", [itinerarios_reserva_service_1.ItinerariosReservaService])
], ItinerariosReservaController);
//# sourceMappingURL=itinerarios-reserva.controller.js.map