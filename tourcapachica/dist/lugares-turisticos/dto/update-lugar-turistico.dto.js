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
exports.UpdateLugarTuristicoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_lugar_turistico_dto_1 = require("./create-lugar-turistico.dto");
const create_lugar_turistico_dto_2 = require("./create-lugar-turistico.dto");
class UpdateLugarTuristicoDto extends (0, swagger_1.PartialType)(create_lugar_turistico_dto_1.CreateLugarTuristicoDto) {
}
exports.UpdateLugarTuristicoDto = UpdateLugarTuristicoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del lugar turístico',
        example: 'Isla Taquile',
        required: false,
        maxLength: 200,
        type: String
    }),
    __metadata("design:type", String)
], UpdateLugarTuristicoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del lugar turístico',
        example: 'Isla ubicada en el lago Titicaca, conocida por sus tejidos tradicionales.',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateLugarTuristicoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dirección del lugar turístico',
        example: 'Isla Taquile, Lago Titicaca, Puno',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateLugarTuristicoDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Coordenadas geográficas del lugar',
        example: '-15.7667, -69.6833',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateLugarTuristicoDto.prototype, "coordenadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del lugar turístico',
        example: 'activo',
        required: false,
        enum: ['activo', 'inactivo'],
        type: String
    }),
    __metadata("design:type", String)
], UpdateLugarTuristicoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indica si el lugar es destacado',
        example: true,
        required: false,
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], UpdateLugarTuristicoDto.prototype, "esDestacado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Horario de apertura',
        example: '2024-03-20T08:00:00.000Z',
        required: false,
        type: Date
    }),
    __metadata("design:type", Date)
], UpdateLugarTuristicoDto.prototype, "horarioApertura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Horario de cierre',
        example: '2024-03-20T17:00:00.000Z',
        required: false,
        type: Date
    }),
    __metadata("design:type", Date)
], UpdateLugarTuristicoDto.prototype, "horarioCierre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Costo de entrada',
        example: 20.00,
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateLugarTuristicoDto.prototype, "costoEntrada", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Recomendaciones para visitar el lugar',
        example: 'Llevar protector solar y agua',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateLugarTuristicoDto.prototype, "recomendaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Restricciones del lugar',
        example: 'No se permite el ingreso con mascotas',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateLugarTuristicoDto.prototype, "restricciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes del lugar',
        type: [create_lugar_turistico_dto_2.ImageDto],
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
    __metadata("design:type", Array)
], UpdateLugarTuristicoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=update-lugar-turistico.dto.js.map