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
exports.ComprobanteResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ComprobanteResponseDto {
}
exports.ComprobanteResponseDto = ComprobanteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del comprobante' }),
    __metadata("design:type", Number)
], ComprobanteResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del pago asociado' }),
    __metadata("design:type", Number)
], ComprobanteResponseDto.prototype, "pagoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Serie del comprobante' }),
    __metadata("design:type", String)
], ComprobanteResponseDto.prototype, "serie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número del comprobante' }),
    __metadata("design:type", String)
], ComprobanteResponseDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de comprobante' }),
    __metadata("design:type", String)
], ComprobanteResponseDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del comprobante' }),
    __metadata("design:type", String)
], ComprobanteResponseDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notas adicionales', required: false }),
    __metadata("design:type", String)
], ComprobanteResponseDto.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    __metadata("design:type", Date)
], ComprobanteResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de actualización' }),
    __metadata("design:type", Date)
], ComprobanteResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=comprobante-response.dto.js.map