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
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateComprobanteDto {
}
exports.CreateComprobanteDto = CreateComprobanteDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "pagoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 20 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "tipoComprobante", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ maxLength: 4 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(4),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "serie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", Date)
], CreateComprobanteDto.prototype, "fechaEmision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 11 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(11),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "rucCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "razonSocial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "direccionCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '2' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, default: 0 }),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '2' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "igv", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    (0, class_validator_1.IsDecimal)({ decimal_digits: '2' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateComprobanteDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'PEN', maxLength: 3 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(3),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'emitido', maxLength: 20 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "codigoSunat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 100 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "codigoHash", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "xmlUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "pdfUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "qrCodeUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 255 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateComprobanteDto.prototype, "tokenSunat", void 0);
//# sourceMappingURL=create-comprobante.dto.js.map