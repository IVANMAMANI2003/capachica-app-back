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
exports.UpdatePaqueteTuristicoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_paquete_turistico_dto_1 = require("./create-paquete-turistico.dto");
const create_paquete_turistico_dto_2 = require("./create-paquete-turistico.dto");
class UpdatePaqueteTuristicoDto extends (0, swagger_1.PartialType)(create_paquete_turistico_dto_1.CreatePaqueteTuristicoDto) {
}
exports.UpdatePaqueteTuristicoDto = UpdatePaqueteTuristicoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del emprendimiento',
        example: 1,
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], UpdatePaqueteTuristicoDto.prototype, "emprendimientoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del paquete turístico',
        example: 'Tour por la isla de Capachica',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdatePaqueteTuristicoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del paquete turístico',
        example: 'Recorrido completo por los principales atractivos de la isla',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdatePaqueteTuristicoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio del paquete turístico',
        example: 150.00,
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], UpdatePaqueteTuristicoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del paquete turístico',
        example: 'activo',
        required: false,
        enum: ['activo', 'inactivo'],
        type: String
    }),
    __metadata("design:type", String)
], UpdatePaqueteTuristicoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IDs de los servicios incluidos en el paquete',
        type: [Number],
        required: false,
        example: [1, 2, 3]
    }),
    __metadata("design:type", Array)
], UpdatePaqueteTuristicoDto.prototype, "servicios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes del paquete turístico',
        type: [create_paquete_turistico_dto_2.ImageDto],
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
], UpdatePaqueteTuristicoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=update-paquete-turistico.dto.js.map