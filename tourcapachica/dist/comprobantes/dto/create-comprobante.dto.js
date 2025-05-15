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
    (0, swagger_1.ApiProperty)({ description: 'ID del pago asociado', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "pagoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de comprobante', example: 'Factura' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "tipoComprobante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'RUC del cliente', example: '12345678901', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "rucCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Razón social del cliente', example: 'Empresa SAC', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "razonSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subtotal del comprobante', example: 100.00 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'IGV del comprobante', example: 18.00 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "igv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total del comprobante', example: 118.00 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del comprobante', example: 'emitido' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de emisión del comprobante', example: '2023-01-01T00:00:00Z' }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateComprobanteDto.prototype, "fechaEmision", void 0);
//# sourceMappingURL=create-comprobante.dto.js.map