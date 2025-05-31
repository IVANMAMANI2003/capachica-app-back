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
exports.ServicioResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ServicioResponseDto {
}
exports.ServicioResponseDto = ServicioResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del servicio' }),
    __metadata("design:type", Number)
], ServicioResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del servicio' }),
    __metadata("design:type", String)
], ServicioResponseDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del servicio' }),
    __metadata("design:type", String)
], ServicioResponseDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio del servicio' }),
    __metadata("design:type", Number)
], ServicioResponseDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duración del servicio en horas' }),
    __metadata("design:type", Number)
], ServicioResponseDto.prototype, "duracion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de la imagen del servicio' }),
    __metadata("design:type", String)
], ServicioResponseDto.prototype, "imagenUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si el servicio está activo' }),
    __metadata("design:type", Boolean)
], ServicioResponseDto.prototype, "activo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Orden del servicio en el paquete' }),
    __metadata("design:type", Number)
], ServicioResponseDto.prototype, "orden", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del servicio' }),
    __metadata("design:type", Date)
], ServicioResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización del servicio' }),
    __metadata("design:type", Date)
], ServicioResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=servicio-response.dto.js.map