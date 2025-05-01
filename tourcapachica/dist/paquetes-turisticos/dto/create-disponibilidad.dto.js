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
exports.CreateDisponibilidadDto = exports.EstadoDisponibilidad = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var EstadoDisponibilidad;
(function (EstadoDisponibilidad) {
    EstadoDisponibilidad["ACTIVO"] = "activo";
    EstadoDisponibilidad["INACTIVO"] = "inactivo";
    EstadoDisponibilidad["COMPLETO"] = "completo";
})(EstadoDisponibilidad || (exports.EstadoDisponibilidad = EstadoDisponibilidad = {}));
class CreateDisponibilidadDto {
}
exports.CreateDisponibilidadDto = CreateDisponibilidadDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de inicio de la disponibilidad',
        example: '2024-03-20T00:00:00.000Z',
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateDisponibilidadDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de fin de la disponibilidad',
        example: '2024-03-25T00:00:00.000Z',
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateDisponibilidadDto.prototype, "fechaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de cupos disponibles',
        example: 10,
        minimum: 0,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "cuposDisponibles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio especial para esta disponibilidad (opcional)',
        example: 150.00,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "precioEspecial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Notas adicionales sobre la disponibilidad',
        example: 'Precio especial por temporada baja',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDisponibilidadDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cupos máximos permitidos', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "cuposMaximos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado de la disponibilidad',
        enum: EstadoDisponibilidad,
        default: EstadoDisponibilidad.ACTIVO
    }),
    (0, class_validator_1.IsEnum)(EstadoDisponibilidad),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDisponibilidadDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Días de la semana disponibles (0 = domingo, 6 = sábado)',
        type: [Number],
        example: [1, 2, 3, 4, 5]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(7),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(6, { each: true }),
    __metadata("design:type", Array)
], CreateDisponibilidadDto.prototype, "diasSemana", void 0);
//# sourceMappingURL=create-disponibilidad.dto.js.map