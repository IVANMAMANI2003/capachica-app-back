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
const class_transformer_1 = require("class-transformer");
class CreateDisponibilidadDto {
}
exports.CreateDisponibilidadDto = CreateDisponibilidadDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del servicio', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de disponibilidad', example: '2024-04-29' }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateDisponibilidadDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de cupos disponibles', example: 10 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "cuposDisponibles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio especial para esta fecha', example: 150.00, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateDisponibilidadDto.prototype, "precioEspecial", void 0);
//# sourceMappingURL=create-disponibilidad.dto.js.map