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
exports.CreateServicioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ImageDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ImageDto.prototype, "url", void 0);
class CreateServicioDto {
    constructor() {
        this.estado = 'activo';
        this.detallesServicio = '{}';
    }
}
exports.CreateServicioDto = CreateServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del tipo de servicio',
        example: 1,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "tipoServicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del servicio',
        example: 'Hotel Capachica',
        required: true,
        maxLength: 200,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del servicio',
        example: 'Hotel con vista al lago Titicaca',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio base del servicio',
        example: 100.50,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "precioBase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Moneda del precio',
        example: 'PEN',
        required: true,
        maxLength: 3,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(3),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del servicio',
        example: 'activo',
        enum: ['activo', 'inactivo', 'pendiente'],
        default: 'activo',
        required: false,
        maxLength: 20,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['activo', 'inactivo', 'pendiente']),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detalles del servicio en formato JSON',
        example: '{"duracion": "12 horas", "incluye": ["camas", "papayas"]}',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsJSON)(),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "detallesServicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Imágenes del servicio',
        required: false,
        type: [ImageDto]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateServicioDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-servicio.dto.js.map