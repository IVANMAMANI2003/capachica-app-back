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
exports.CreateItinerarioReservaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateItinerarioReservaDto {
}
exports.CreateItinerarioReservaDto = CreateItinerarioReservaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateItinerarioReservaDto.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateItinerarioReservaDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "fechaInicioActividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-02' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "fechaFinActividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '08:00:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
        message: 'La hora debe estar en formato HH:mm:ss',
    }),
    (0, class_transformer_1.Transform)(({ value }) => value ? new Date(`1970-01-01T${value}`) : null),
    __metadata("design:type", Date)
], CreateItinerarioReservaDto.prototype, "horaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '17:00:00' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
        message: 'La hora debe estar en formato HH:mm:ss',
    }),
    (0, class_transformer_1.Transform)(({ value }) => value ? new Date(`1970-01-01T${value}`) : null),
    __metadata("design:type", Date)
], CreateItinerarioReservaDto.prototype, "horaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Plaza Mayor' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "lugarEncuentro", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Observaciones del itinerario' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "observaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Evento especial' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "tipoEvento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Descripción del evento' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "descripcion", void 0);
//# sourceMappingURL=create-itinerario-reserva.dto.js.map