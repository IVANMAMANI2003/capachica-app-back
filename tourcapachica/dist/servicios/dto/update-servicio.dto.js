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
exports.UpdateServicioPayloadDto = exports.UpdateServicioDto = exports.ImageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ImageDto {
}
exports.ImageDto = ImageDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'URL de la imagen',
        example: 'https://example.com/image.jpg'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ImageDto.prototype, "url", void 0);
class UpdateServicioDto {
}
exports.UpdateServicioDto = UpdateServicioDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID del tipo de servicio', example: 1 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateServicioDto.prototype, "tipoServicioId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre del servicio', example: 'Tour guiado por la isla' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Descripción del servicio', example: 'Tour guiado por los principales atractivos de la isla' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Latitud del servicio',
        example: -15.7667
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateServicioDto.prototype, "latitud", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Longitud del servicio',
        example: -69.6833
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateServicioDto.prototype, "longitud", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Precio base del servicio', example: 50.00 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateServicioDto.prototype, "precioBase", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Moneda del precio',
        example: 'PEN',
        enum: ['PEN', 'USD']
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['PEN', 'USD']),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Estado del servicio',
        example: 'activo',
        enum: ['activo', 'inactivo']
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['activo', 'inactivo']),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Detalles adicionales del servicio',
        example: {
            duracion: '2 horas',
            capacidad: 10,
            incluye: ['Guía local', 'Transporte', 'Refrigerio'],
            requisitos: ['Ropa cómoda', 'Zapatillas']
        }
    }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateServicioDto.prototype, "detallesServicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lista de imágenes nuevas para actualizar el servicio',
        type: [ImageDto],
        example: [
            {
                url: 'https://example.com/image1.jpg'
            },
            {
                url: 'https://example.com/image2.jpg'
            }
        ]
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ImageDto),
    __metadata("design:type", Array)
], UpdateServicioDto.prototype, "imagenes", void 0);
class UpdateServicioPayloadDto {
}
exports.UpdateServicioPayloadDto = UpdateServicioPayloadDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Datos a actualizar del servicio',
        type: UpdateServicioDto
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateServicioDto),
    __metadata("design:type", UpdateServicioDto)
], UpdateServicioPayloadDto.prototype, "servicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID del emprendimiento (solo SuperAdmin puede enviarlo)',
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateServicioPayloadDto.prototype, "emprendimientoId", void 0);
//# sourceMappingURL=update-servicio.dto.js.map