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
exports.DisponibilidadResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class DisponibilidadResponseDto {
}
exports.DisponibilidadResponseDto = DisponibilidadResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID de la disponibilidad',
        example: 1,
    }),
    __metadata("design:type", Number)
], DisponibilidadResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del paquete turístico',
        example: 1,
    }),
    __metadata("design:type", Number)
], DisponibilidadResponseDto.prototype, "paqueteTuristicoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de inicio de la disponibilidad',
        example: '2024-03-20T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], DisponibilidadResponseDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de fin de la disponibilidad',
        example: '2024-03-25T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], DisponibilidadResponseDto.prototype, "fechaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de cupos disponibles',
        example: 10,
    }),
    __metadata("design:type", Number)
], DisponibilidadResponseDto.prototype, "cuposDisponibles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cupos máximos permitidos', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DisponibilidadResponseDto.prototype, "cuposMaximos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio especial para esta disponibilidad',
        example: 150.00,
        required: false,
    }),
    __metadata("design:type", Number)
], DisponibilidadResponseDto.prototype, "precioEspecial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Notas adicionales sobre la disponibilidad',
        example: 'Precio especial por temporada baja',
        required: false,
    }),
    __metadata("design:type", String)
], DisponibilidadResponseDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado de la disponibilidad',
        example: 'Disponible',
        required: false,
    }),
    __metadata("design:type", String)
], DisponibilidadResponseDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Días de la semana disponibles',
        example: ['Lunes', 'Miércoles', 'Viernes'],
        type: [String],
        required: false,
    }),
    __metadata("design:type", Array)
], DisponibilidadResponseDto.prototype, "diasSemana", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de creación del registro',
        example: '2024-03-15T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], DisponibilidadResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de última actualización del registro',
        example: '2024-03-15T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], DisponibilidadResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=disponibilidad-response.dto.js.map