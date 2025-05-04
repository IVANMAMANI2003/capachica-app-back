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
exports.CreateLugarTuristicoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ImageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL de la imagen',
        example: 'https://example.com/image.jpg',
        required: true,
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
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateLugarTuristicoDto.prototype, "esDestacado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Horario de apertura en formato HH:mm',
        example: '08:00',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        message: 'El horario debe estar en formato HH:mm',
    }),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "horarioApertura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Horario de cierre en formato HH:mm',
        example: '17:00',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Matches)(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
        message: 'El horario debe estar en formato HH:mm',
    }),
    __metadata("design:type", String)
], CreateLugarTuristicoDto.prototype, "horarioCierre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Costo de entrada',
        example: 20.00,
        required: false,
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
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateLugarTuristicoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-lugar-turistico.dto.js.map