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
exports.CreateReservaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateReservaDto {
}
exports.CreateReservaDto = CreateReservaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateReservaDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ABC123' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "codigoReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'tipo_reserva' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "tipoReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "fechaReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-02' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "fechaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateReservaDto.prototype, "cantidadPersonas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100.00 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateReservaDto.prototype, "precioTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PEN' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'tarjeta' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "metodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '{}' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateReservaDto.prototype, "datosPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pendiente' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Notas adicionales' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Motivo de cancelación' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "motivoCancelacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "fechaCancelacion", void 0);
//# sourceMappingURL=create-reserva.dto.js.map