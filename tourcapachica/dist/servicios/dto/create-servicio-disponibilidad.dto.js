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
exports.CreateServicioDisponibilidadDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateServicioDisponibilidadDto {
}
exports.CreateServicioDisponibilidadDto = CreateServicioDisponibilidadDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del servicio',
        example: 1,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateServicioDisponibilidadDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de disponibilidad (YYYY-MM-DD)',
        example: '2024-03-15',
        required: true,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServicioDisponibilidadDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cupos disponibles para la fecha',
        example: 10,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateServicioDisponibilidadDto.prototype, "cuposDisponibles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio especial para la fecha (opcional)',
        example: 45.50,
        required: false,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateServicioDisponibilidadDto.prototype, "precioEspecial", void 0);
//# sourceMappingURL=create-servicio-disponibilidad.dto.js.map