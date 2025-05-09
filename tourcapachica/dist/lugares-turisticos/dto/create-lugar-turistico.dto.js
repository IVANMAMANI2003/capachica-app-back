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
exports.CreateLugarTuristicoDto = exports.ImageDto = void 0;
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
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ImageDto.prototype, "url", void 0);
class CreateLugarTuristicoDto {
    constructor() {
        this.estado = 'activo';
        this.esDestacado = false;
    }
}
exports.CreateLugarTuristicoDto = CreateLugarTuristicoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del lugar turístico',
        example: 'Isla Taquile',
        required: true,
        maxLength: 200,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del lugar turístico',
        example: 'Isla ubicada en el lago Titicaca, conocida por sus tejidos tradicionales.',
        required: true,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dirección del lugar turístico',
        example: 'Isla Taquile, Lago Titicaca, Puno',
        required: true,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Coordenadas geográficas del lugar',
        example: '-15.7667, -69.6833',
        required: true,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "coordenadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del lugar turístico',
        example: 'activo',
        default: 'activo',
        required: false,
        enum: ['activo', 'inactivo'],
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['activo', 'inactivo']),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si el lugar es destacado',
        example: true,
        default: false,
        required: false,
        type: Boolean
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateLugarTuristicoDto.prototype, "esDestacado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Horario de apertura',
        example: '2024-03-20T08:00:00.000Z',
        required: false,
        type: Date
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateLugarTuristicoDto.prototype, "horarioApertura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Horario de cierre',
        example: '2024-03-20T17:00:00.000Z',
        required: false,
        type: Date
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateLugarTuristicoDto.prototype, "horarioCierre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Costo de entrada',
        example: 20.00,
        required: false,
        type: Number
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateLugarTuristicoDto.prototype, "costoEntrada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Recomendaciones para visitar el lugar',
        example: 'Llevar protector solar y agua',
        required: false,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "recomendaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Restricciones del lugar',
        example: 'No se permite el ingreso con mascotas',
        required: false,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "restricciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes del lugar',
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
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateLugarTuristicoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-lugar-turistico.dto.js.map