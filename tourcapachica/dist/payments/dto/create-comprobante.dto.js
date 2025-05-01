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
exports.CreateComprobanteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateComprobanteDto {
}
exports.CreateComprobanteDto = CreateComprobanteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del pago asociado al comprobante' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "pagoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Serie del comprobante' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "serie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número del comprobante' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de comprobante' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'RUC del cliente', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "rucCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Razón social del cliente', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "razonSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dirección del cliente', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "direccionCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subtotal del comprobante' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'IGV del comprobante', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "igv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total del comprobante' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda del comprobante', default: 'PEN' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del comprobante', default: 'emitido' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Código SUNAT', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "codigoSunat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Código hash del comprobante', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "codigoHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL del XML del comprobante', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "xmlUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL del PDF del comprobante', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "pdfUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Notas adicionales', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "notas", void 0);
//# sourceMappingURL=create-comprobante.dto.js.map