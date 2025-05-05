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
exports.CreatePaqueteTuristicoDto = exports.ImageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
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
class CreatePaqueteTuristicoDto {
    constructor() {
        this.estado = 'activo';
    }
}
exports.CreatePaqueteTuristicoDto = CreatePaqueteTuristicoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del emprendimiento',
        example: 1,
        required: true,
        type: Number
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaqueteTuristicoDto.prototype, "emprendimientoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del paquete turístico',
        example: 'Tour por la isla de Capachica',
        required: true,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del paquete turístico',
        example: 'Recorrido completo por los principales atractivos de la isla',
        required: true,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio del paquete turístico',
        example: 150.00,
        required: true,
        type: Number
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaqueteTuristicoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del paquete turístico',
        example: 'activo',
        default: 'activo',
        required: false,
        enum: ['activo', 'inactivo'],
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['activo', 'inactivo']),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IDs de los servicios incluidos en el paquete',
        type: [Number],
        required: false,
        example: [1, 2, 3]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreatePaqueteTuristicoDto.prototype, "servicios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes del paquete turístico',
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
    __metadata("design:type", Array)
], CreatePaqueteTuristicoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-paquete-turistico.dto.js.map