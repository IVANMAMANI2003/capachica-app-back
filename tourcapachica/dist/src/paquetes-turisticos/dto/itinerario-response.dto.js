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
exports.ItinerarioResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const servicio_response_dto_1 = require("./servicio-response.dto");
class ItinerarioResponseDto {
}
exports.ItinerarioResponseDto = ItinerarioResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del itinerario' }),
    __metadata("design:type", Number)
], ItinerarioResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reserva' }),
    __metadata("design:type", Number)
], ItinerarioResponseDto.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del servicio' }),
    __metadata("design:type", Number)
], ItinerarioResponseDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha del servicio' }),
    __metadata("design:type", Date)
], ItinerarioResponseDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hora de inicio del servicio' }),
    __metadata("design:type", String)
], ItinerarioResponseDto.prototype, "horaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hora de fin del servicio' }),
    __metadata("design:type", String)
], ItinerarioResponseDto.prototype, "horaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad de personas' }),
    __metadata("design:type", Number)
], ItinerarioResponseDto.prototype, "cantidadPersonas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio unitario del servicio' }),
    __metadata("design:type", Number)
], ItinerarioResponseDto.prototype, "precioUnitario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio total del servicio' }),
    __metadata("design:type", Number)
], ItinerarioResponseDto.prototype, "precioTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notas adicionales' }),
    __metadata("design:type", String)
], ItinerarioResponseDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Información del servicio', type: servicio_response_dto_1.ServicioResponseDto }),
    __metadata("design:type", servicio_response_dto_1.ServicioResponseDto)
], ItinerarioResponseDto.prototype, "servicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del itinerario' }),
    __metadata("design:type", Date)
], ItinerarioResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización del itinerario' }),
    __metadata("design:type", Date)
], ItinerarioResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=itinerario-response.dto.js.map