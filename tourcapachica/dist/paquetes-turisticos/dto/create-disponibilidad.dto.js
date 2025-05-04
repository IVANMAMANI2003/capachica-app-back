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
exports.CreateDisponibilidadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const estado_disponibilidad_enum_1 = require("../enums/estado-disponibilidad.enum");
class CreateDisponibilidadDto {
}
exports.CreateDisponibilidadDto = CreateDisponibilidadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de inicio de la disponibilidad' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateDisponibilidadDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de fin de la disponibilidad' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateDisponibilidadDto.prototype, "fechaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cupos disponibles para el período' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "cuposDisponibles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cupos máximos para el período' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "cuposMaximos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio especial para el período', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "precioEspecial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notas adicionales', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDisponibilidadDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado de la disponibilidad', enum: estado_disponibilidad_enum_1.EstadoDisponibilidad, required: false }),
    (0, class_validator_1.IsEnum)(estado_disponibilidad_enum_1.EstadoDisponibilidad),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDisponibilidadDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Días de la semana disponibles', required: false, type: [String] }),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateDisponibilidadDto.prototype, "diasSemana", void 0);
//# sourceMappingURL=create-disponibilidad.dto.js.map