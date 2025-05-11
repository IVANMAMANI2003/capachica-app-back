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
exports.CreatePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const create_pago_detalle_dto_1 = require("./create-pago-detalle.dto");
class CreatePaymentDto {
}
exports.CreatePaymentDto = CreatePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reserva relacionada' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pasarela de pago utilizada', example: 'Visa', maxLength: 50 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "paymentGateway", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único de transacción', example: 'txn_123456789', maxLength: 100 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: 'Monto total del pago' }),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "montoTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'PEN', maxLength: 3 }),
    (0, class_validator_1.IsISO4217CurrencyCode)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'pendiente', maxLength: 20 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, format: 'date-time', required: false }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePaymentDto.prototype, "fechaPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePaymentDto.prototype, "datosMetodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePaymentDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [create_pago_detalle_dto_1.CreatePagoDetalleDto] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_pago_detalle_dto_1.CreatePagoDetalleDto),
    __metadata("design:type", Array)
], CreatePaymentDto.prototype, "detalles", void 0);
//# sourceMappingURL=create-payment.dto.js.map