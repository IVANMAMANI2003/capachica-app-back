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
exports.PagoResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const comprobante_response_dto_1 = require("./comprobante-response.dto");
class PagoResponseDto {
}
exports.PagoResponseDto = PagoResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del pago' }),
    __metadata("design:type", Number)
], PagoResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reserva asociada' }),
    __metadata("design:type", Number)
], PagoResponseDto.prototype, "reservaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto del pago' }),
    __metadata("design:type", Number)
], PagoResponseDto.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Método de pago' }),
    __metadata("design:type", String)
], PagoResponseDto.prototype, "metodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del pago' }),
    __metadata("design:type", String)
], PagoResponseDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha del pago' }),
    __metadata("design:type", Date)
], PagoResponseDto.prototype, "fechaPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notas adicionales', required: false }),
    __metadata("design:type", String)
], PagoResponseDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comprobante asociado', type: comprobante_response_dto_1.ComprobanteResponseDto, required: false }),
    __metadata("design:type", comprobante_response_dto_1.ComprobanteResponseDto)
], PagoResponseDto.prototype, "comprobante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    __metadata("design:type", Date)
], PagoResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de actualización' }),
    __metadata("design:type", Date)
], PagoResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=pago-response.dto.js.map