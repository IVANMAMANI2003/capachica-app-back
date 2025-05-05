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
exports.UpdateServicioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_servicio_dto_1 = require("./create-servicio.dto");
const create_servicio_dto_2 = require("./create-servicio.dto");
class UpdateServicioDto extends (0, swagger_1.PartialType)(create_servicio_dto_1.CreateServicioDto) {
}
exports.UpdateServicioDto = UpdateServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del tipo de servicio',
        example: 1,
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateServicioDto.prototype, "tipoServicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del servicio',
        example: 'Tour guiado por la isla',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del servicio',
        example: 'Tour guiado por los principales atractivos de la isla',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio base del servicio',
        example: 50.00,
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateServicioDto.prototype, "precioBase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moneda del precio',
        example: 'PEN',
        required: false,
        enum: ['PEN', 'USD'],
        type: String
    }),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del servicio',
        example: 'activo',
        required: false,
        enum: ['activo', 'inactivo'],
        type: String
    }),
    __metadata("design:type", String)
], UpdateServicioDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detalles adicionales del servicio',
        example: {
            duracion: '2 horas',
            capacidad: 10,
            incluye: ['Guía local', 'Transporte', 'Refrigerio'],
            requisitos: ['Ropa cómoda', 'Zapatillas']
        },
        required: false,
        type: Object
    }),
    __metadata("design:type", Object)
], UpdateServicioDto.prototype, "detallesServicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes del servicio',
        type: [create_servicio_dto_2.ImageDto],
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
], UpdateServicioDto.prototype, "imagenes", void 0);
//# sourceMappingURL=update-servicio.dto.js.map