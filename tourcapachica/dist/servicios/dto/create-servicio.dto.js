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
exports.CreateServicioDto = exports.ImageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ImageDto {
}
exports.ImageDto = ImageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL de la imagen',
        example: 'https://example.com/image.jpg',
        required: true,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ImageDto.prototype, "url", void 0);
class CreateServicioDto {
    constructor() {
        this.moneda = 'PEN';
        this.estado = 'activo';
    }
}
exports.CreateServicioDto = CreateServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del tipo de servicio', example: 1 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "tipoServicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del Emprendimiento (solo si eres Admin)', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "emprendimientoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del servicio', example: 'Tour guiado por la isla' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del servicio', example: 'Tour guiado por los principales atractivos de la isla', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio base del servicio', example: 50.00 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "precioBase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda del precio', example: 'PEN', enum: ['PEN', 'USD'], required: false, default: 'PEN' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del servicio', example: 'activo', enum: ['activo', 'inactivo'], required: false, default: 'activo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['activo', 'inactivo']),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detalles adicionales del servicio',
        example: {
            duracion: '2 horas',
            capacidad: 10,
            incluye: ['Guía local', 'Transporte', 'Refrigerio'],
            requisitos: ['Ropa cómoda', 'Zapatillas']
        },
        required: false
    }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateServicioDto.prototype, "detallesServicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes del servicio',
        type: [ImageDto],
        required: false,
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
    (0, class_transformer_1.Type)(() => ImageDto),
    __metadata("design:type", Array)
], CreateServicioDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-servicio.dto.js.map