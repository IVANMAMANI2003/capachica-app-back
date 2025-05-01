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
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], ImageDto.prototype, "url", void 0);
class CreateServicioDto {
}
exports.CreateServicioDto = CreateServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del tipo de servicio', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "tipoServicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del servicio', example: 'Tour en bote' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del servicio', example: 'Tour en bote por el lago Titicaca' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio base del servicio', example: 50.00 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "precioBase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda del precio', example: 'PEN', enum: ['PEN', 'USD'] }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(3),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del servicio', example: 'activo', enum: ['activo', 'inactivo'] }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['activo', 'inactivo']),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de la imagen del servicio', example: 'https://example.com/image.jpg' }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "imagenUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detalles adicionales del servicio', example: { duracion: '2 horas', incluye: ['Guía', 'Equipo'] } }),
    (0, class_validator_1.IsJSON)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateServicioDto.prototype, "detallesServicio", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateServicioDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-servicio.dto.js.map