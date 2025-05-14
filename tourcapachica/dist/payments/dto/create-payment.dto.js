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
const estado_pago_enum_1 = require("../enums/estado-pago.enum");
const create_payment_detail_dto_1 = require("./create-payment-detail.dto");
class CreatePaymentDto {
}
exports.CreatePaymentDto = CreatePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reserva asociada', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pasarela de pago utilizada', example: 'Yape' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "paymentGateway", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único de la transacción', example: 'txn_1234567890' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto total pagado', example: 150.00 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "montoTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda utilizada', example: 'PEN', default: 'PEN' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: estado_pago_enum_1.EstadoPago, example: estado_pago_enum_1.EstadoPago.PENDIENTE }),
    (0, class_validator_1.IsEnum)(estado_pago_enum_1.EstadoPago, { message: 'El estado debe ser uno válido del enum EstadoPago' }),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de pago (si aplica)', example: '2024-05-15T10:30:00.000Z', required: false }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePaymentDto.prototype, "fechaPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Datos del método de pago', example: { numero: '123456789' }, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePaymentDto.prototype, "datosMetodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metadatos adicionales', example: { ip: '127.0.0.1' }, required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePaymentDto.prototype, "metadata", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_payment_detail_dto_1.CreatePaymentDetailDto),
    __metadata("design:type", Array)
], CreatePaymentDto.prototype, "detalles", void 0);
//# sourceMappingURL=create-payment.dto.js.map