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
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateItinerarioReservaDto {
}
exports.CreateItinerarioReservaDto = CreateItinerarioReservaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID de la reserva a la que pertenece el itinerario',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateItinerarioReservaDto.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha del itinerario',
        example: '2024-05-15T00:00:00.000Z',
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateItinerarioReservaDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hora del itinerario',
        example: '2024-05-15T09:00:00.000Z',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateItinerarioReservaDto.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de evento del itinerario',
        example: 'Visita guiada',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "tipoEvento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del itinerario',
        example: 'Visita guiada a la Isla Taquile',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Notas adicionales sobre el itinerario',
        example: 'Llevar protector solar',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateItinerarioReservaDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Duración del itinerario en minutos',
        example: 120,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateItinerarioReservaDto.prototype, "duracion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del servicio asociado al itinerario',
        example: 1,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateItinerarioReservaDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IDs de los lugares turísticos incluidos en el itinerario',
        example: [1, 2, 3],
        required: false,
        type: [Number],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateItinerarioReservaDto.prototype, "lugaresTuristicosIds", void 0);
//# sourceMappingURL=create-itinerario-reserva.dto.js.map