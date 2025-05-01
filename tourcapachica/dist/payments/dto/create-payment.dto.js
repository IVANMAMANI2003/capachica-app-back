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
exports.CreatePaymentDto = exports.PaymentDetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class PaymentDetailDto {
}
exports.PaymentDetailDto = PaymentDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del tipo de pago' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PaymentDetailDto.prototype, "tipoPagoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Concepto del pago' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PaymentDetailDto.prototype, "concepto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto del pago' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PaymentDetailDto.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Porcentaje de impuesto', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaymentDetailDto.prototype, "porcentajeImpuesto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaymentDetailDto.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción adicional', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaymentDetailDto.prototype, "descripcion", void 0);
class CreatePaymentDto {
}
exports.CreatePaymentDto = CreatePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reserva' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Código de transacción' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "codigoTransaccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto total del pago' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "montoTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda del pago' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del pago' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha del pago' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "fechaPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Datos del método de pago', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "datosMetodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metadatos adicionales', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detalles del pago', type: [PaymentDetailDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PaymentDetailDto),
    __metadata("design:type", Array)
], CreatePaymentDto.prototype, "detalles", void 0);
//# sourceMappingURL=create-payment.dto.js.map