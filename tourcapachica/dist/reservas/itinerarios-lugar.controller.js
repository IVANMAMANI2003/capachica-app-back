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
exports.ItinerariosLugarController = void 0;
const common_1 = require("@nestjs/common");
const itinerarios_lugar_service_1 = require("./itinerarios-lugar.service");
const swagger_1 = require("@nestjs/swagger");
let ItinerariosLugarController = class ItinerariosLugarController {
    constructor(itinerariosLugarService) {
        this.itinerariosLugarService = itinerariosLugarService;
    }
    create(itinerarioId, lugarTuristicoId) {
        return this.itinerariosLugarService.create(itinerarioId, lugarTuristicoId);
    }
    findAll() {
        return this.itinerariosLugarService.findAll();
    }
    findByItinerario(itinerarioId) {
        return this.itinerariosLugarService.findByItinerario(itinerarioId);
    }
    findByLugarTuristico(lugarTuristicoId) {
        return this.itinerariosLugarService.findByLugarTuristico(lugarTuristicoId);
    }
    remove(itinerarioId, lugarTuristicoId) {
        return this.itinerariosLugarService.remove(itinerarioId, lugarTuristicoId);
    }
    removeByItinerario(itinerarioId) {
        return this.itinerariosLugarService.removeByItinerario(itinerarioId);
    }
};
exports.ItinerariosLugarController = ItinerariosLugarController;
__decorate([
    (0, common_1.Post)(':itinerarioId/lugar/:lugarTuristicoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar un lugar turístico a un itinerario' }),
    (0, swagger_1.ApiParam)({ name: 'itinerarioId', description: 'ID del itinerario' }),
    (0, swagger_1.ApiParam)({ name: 'lugarTuristicoId', description: 'ID del lugar turístico' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Lugar turístico agregado al itinerario exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Itinerario o lugar turístico no encontrado' }),
    __param(0, (0, common_1.Param)('itinerarioId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lugarTuristicoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ItinerariosLugarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las relaciones entre itinerarios y lugares turísticos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de relaciones obtenida exitosamente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItinerariosLugarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('itinerario/:itinerarioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los lugares turísticos de un itinerario' }),
    (0, swagger_1.ApiParam)({ name: 'itinerarioId', description: 'ID del itinerario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de lugares turísticos obtenida exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Itinerario no encontrado' }),
    __param(0, (0, common_1.Param)('itinerarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItinerariosLugarController.prototype, "findByItinerario", null);
__decorate([
    (0, common_1.Get)('lugar/:lugarTuristicoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los itinerarios que incluyen un lugar turístico' }),
    (0, swagger_1.ApiParam)({ name: 'lugarTuristicoId', description: 'ID del lugar turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de itinerarios obtenida exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Lugar turístico no encontrado' }),
    __param(0, (0, common_1.Param)('lugarTuristicoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItinerariosLugarController.prototype, "findByLugarTuristico", null);
__decorate([
    (0, common_1.Delete)(':itinerarioId/lugar/:lugarTuristicoId'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un lugar turístico de un itinerario' }),
    (0, swagger_1.ApiParam)({ name: 'itinerarioId', description: 'ID del itinerario' }),
    (0, swagger_1.ApiParam)({ name: 'lugarTuristicoId', description: 'ID del lugar turístico' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lugar turístico eliminado del itinerario exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Relación no encontrada' }),
    __param(0, (0, common_1.Param)('itinerarioId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('lugarTuristicoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ItinerariosLugarController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('itinerario/:itinerarioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar todos los lugares turísticos de un itinerario' }),
    (0, swagger_1.ApiParam)({ name: 'itinerarioId', description: 'ID del itinerario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lugares turísticos eliminados del itinerario exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Itinerario no encontrado' }),
    __param(0, (0, common_1.Param)('itinerarioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItinerariosLugarController.prototype, "removeByItinerario", null);
exports.ItinerariosLugarController = ItinerariosLugarController = __decorate([
    (0, swagger_1.ApiTags)('itinerarios-lugar'),
    (0, common_1.Controller)('itinerarios-lugar'),
    __metadata("design:paramtypes", [itinerarios_lugar_service_1.ItinerariosLugarService])
], ItinerariosLugarController);
//# sourceMappingURL=itinerarios-lugar.controller.js.map