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
exports.CreateReservaDto = exports.EstadoReserva = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var EstadoReserva;
(function (EstadoReserva) {
    EstadoReserva["PENDIENTE"] = "pendiente";
    EstadoReserva["CONFIRMADA"] = "confirmada";
    EstadoReserva["CANCELADA"] = "cancelada";
    EstadoReserva["COMPLETADA"] = "completada";
})(EstadoReserva || (exports.EstadoReserva = EstadoReserva = {}));
class CreateReservaDto {
}
exports.CreateReservaDto = CreateReservaDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del turista que realiza la reserva',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateReservaDto.prototype, "turistaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Código único de la reserva',
        example: 'RES-202403150001',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "codigoReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de reserva',
        example: 'estandar',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "tipoReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de la reserva',
        example: '2024-05-15T00:00:00.000Z',
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateReservaDto.prototype, "fechaReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de inicio de la reserva',
        example: '2024-05-15T00:00:00.000Z',
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateReservaDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Hora de la reserva',
        example: '09:00:00',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de fin de la reserva',
        example: '2024-05-15T00:00:00.000Z',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateReservaDto.prototype, "fechaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cantidad de personas',
        example: 2,
        default: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReservaDto.prototype, "cantidadPersonas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado de la reserva',
        example: 'pendiente',
        enum: EstadoReserva,
        default: EstadoReserva.PENDIENTE,
    }),
    (0, class_validator_1.IsEnum)(EstadoReserva),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio total de la reserva',
        example: 150.00,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateReservaDto.prototype, "precioTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moneda del precio total',
        example: 'PEN',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Método de pago',
        example: 'tarjeta',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "metodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Datos del pago',
        example: { 'numeroTarjeta': '****1234' },
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateReservaDto.prototype, "datosPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Notas adicionales sobre la reserva',
        example: 'Cliente con necesidades especiales',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Motivo de cancelación',
        example: 'Cambio de planes',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "motivoCancelacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de cancelación',
        example: '2024-05-15T00:00:00.000Z',
        required: false,
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateReservaDto.prototype, "fechaCancelacion", void 0);
//# sourceMappingURL=create-reserva.dto.js.map