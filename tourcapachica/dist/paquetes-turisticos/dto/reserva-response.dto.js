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
exports.ReservaResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const usuario_response_dto_1 = require("./usuario-response.dto");
const itinerario_response_dto_1 = require("./itinerario-response.dto");
class ReservaResponseDto {
}
exports.ReservaResponseDto = ReservaResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reserva' }),
    __metadata("design:type", Number)
], ReservaResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Código único de la reserva' }),
    __metadata("design:type", String)
], ReservaResponseDto.prototype, "codigoReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado de la reserva' }),
    __metadata("design:type", String)
], ReservaResponseDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda de la reserva' }),
    __metadata("design:type", String)
], ReservaResponseDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto total de la reserva' }),
    __metadata("design:type", Number)
], ReservaResponseDto.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de reserva' }),
    __metadata("design:type", String)
], ReservaResponseDto.prototype, "tipoReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de la reserva' }),
    __metadata("design:type", Date)
], ReservaResponseDto.prototype, "fechaReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de inicio de la reserva' }),
    __metadata("design:type", Date)
], ReservaResponseDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de fin de la reserva' }),
    __metadata("design:type", Date)
], ReservaResponseDto.prototype, "fechaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad de personas' }),
    __metadata("design:type", Number)
], ReservaResponseDto.prototype, "cantidadPersonas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notas adicionales' }),
    __metadata("design:type", String)
], ReservaResponseDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Información del usuario que realizó la reserva', type: usuario_response_dto_1.UsuarioResponseDto }),
    __metadata("design:type", usuario_response_dto_1.UsuarioResponseDto)
], ReservaResponseDto.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Itinerario de la reserva', type: [itinerario_response_dto_1.ItinerarioResponseDto] }),
    __metadata("design:type", Array)
], ReservaResponseDto.prototype, "itinerario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación de la reserva' }),
    __metadata("design:type", Date)
], ReservaResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización de la reserva' }),
    __metadata("design:type", Date)
], ReservaResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=reserva-response.dto.js.map