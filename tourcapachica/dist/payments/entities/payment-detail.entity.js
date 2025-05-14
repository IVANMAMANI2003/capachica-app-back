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
exports.PaymentDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
class PaymentDetails {
}
exports.PaymentDetails = PaymentDetails;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único del detalle de pago' }),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del pago asociado' }),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "pagoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del tipo de pago' }),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "tipoPagoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Concepto del detalle', example: 'Pago por transporte turístico' }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "concepto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto del concepto específico', example: 50.00 }),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Porcentaje de impuesto aplicado', example: 18.00 }),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "porcentajeImpuesto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad de ítems o unidades', example: 1 }),
    __metadata("design:type", Number)
], PaymentDetails.prototype, "cantidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción adicional', required: false }),
    __metadata("design:type", String)
], PaymentDetails.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del registro' }),
    __metadata("design:type", Date)
], PaymentDetails.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización del registro' }),
    __metadata("design:type", Date)
], PaymentDetails.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Referencia al pago principal' }),
    __metadata("design:type", Object)
], PaymentDetails.prototype, "pago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de pago asociado' }),
    __metadata("design:type", Object)
], PaymentDetails.prototype, "tipoPago", void 0);
//# sourceMappingURL=payment-detail.entity.js.map