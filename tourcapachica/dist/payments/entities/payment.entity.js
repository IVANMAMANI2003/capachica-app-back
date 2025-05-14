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
exports.Payment = void 0;
const swagger_1 = require("@nestjs/swagger");
const payment_detail_entity_1 = require("./payment-detail.entity");
class Payment {
}
exports.Payment = Payment;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único del pago' }),
    __metadata("design:type", Number)
], Payment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reserva asociada' }),
    __metadata("design:type", Number)
], Payment.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Pasarela de pago utilizada', example: 'Yape, Plin, PayPal, Stripe' }),
    __metadata("design:type", String)
], Payment.prototype, "paymentGateway", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la transacción del proveedor de pago' }),
    __metadata("design:type", String)
], Payment.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto total pagado', example: 150.00 }),
    __metadata("design:type", Number)
], Payment.prototype, "montoTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda utilizada en el pago', enum: ['PEN', 'USD'], default: 'PEN' }),
    __metadata("design:type", String)
], Payment.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado actual del pago', enum: ['pendiente', 'completado', 'fallido'], default: 'pendiente' }),
    __metadata("design:type", String)
], Payment.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha en que se realizó el pago', required: false, type: String, format: 'date-time' }),
    __metadata("design:type", Date)
], Payment.prototype, "fechaPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Datos del método de pago', type: Object, required: false }),
    __metadata("design:type", Object)
], Payment.prototype, "datosMetodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Información adicional del pago', type: Object, required: false }),
    __metadata("design:type", Object)
], Payment.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del registro' }),
    __metadata("design:type", Date)
], Payment.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización del registro' }),
    __metadata("design:type", Date)
], Payment.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detalles del comprobante asociado', required: false }),
    __metadata("design:type", Object)
], Payment.prototype, "comprobante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detalles del pago (desglose)', type: () => [payment_detail_entity_1.PaymentDetails] }),
    __metadata("design:type", Array)
], Payment.prototype, "detalles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reserva asociada al pago' }),
    __metadata("design:type", Object)
], Payment.prototype, "reserva", void 0);
//# sourceMappingURL=payment.entity.js.map