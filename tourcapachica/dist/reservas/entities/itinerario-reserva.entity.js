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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItinerarioReserva = void 0;
const swagger_1 = require("@nestjs/swagger");
class ItinerarioReserva {
}
exports.ItinerarioReserva = ItinerarioReserva;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ItinerarioReserva.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ItinerarioReserva.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ItinerarioReserva.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z' }),
    __metadata("design:type", Date)
], ItinerarioReserva.prototype, "fechaInicioActividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-02T00:00:00Z' }),
    __metadata("design:type", Date)
], ItinerarioReserva.prototype, "fechaFinActividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '08:00:00' }),
    __metadata("design:type", Date)
], ItinerarioReserva.prototype, "horaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '17:00:00' }),
    __metadata("design:type", Date)
], ItinerarioReserva.prototype, "horaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Plaza Mayor' }),
    __metadata("design:type", String)
], ItinerarioReserva.prototype, "lugarEncuentro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Observaciones del itinerario' }),
    __metadata("design:type", String)
], ItinerarioReserva.prototype, "observaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Evento especial' }),
    __metadata("design:type", String)
], ItinerarioReserva.prototype, "tipoEvento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del evento' }),
    __metadata("design:type", String)
], ItinerarioReserva.prototype, "descripcion", void 0);
//# sourceMappingURL=itinerario-reserva.entity.js.map