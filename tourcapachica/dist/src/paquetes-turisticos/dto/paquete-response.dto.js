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
exports.PaqueteResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const servicio_response_dto_1 = require("./servicio-response.dto");
class PaqueteResponseDto {
}
exports.PaqueteResponseDto = PaqueteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del paquete turístico' }),
    __metadata("design:type", Number)
], PaqueteResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del paquete turístico' }),
    __metadata("design:type", String)
], PaqueteResponseDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del paquete turístico' }),
    __metadata("design:type", String)
], PaqueteResponseDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio base del paquete turístico' }),
    __metadata("design:type", Number)
], PaqueteResponseDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del paquete turístico' }),
    __metadata("design:type", String)
], PaqueteResponseDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del emprendimiento al que pertenece el paquete' }),
    __metadata("design:type", Number)
], PaqueteResponseDto.prototype, "emprendimientoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de la imagen principal' }),
    __metadata("design:type", String)
], PaqueteResponseDto.prototype, "imagenUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si el paquete está activo' }),
    __metadata("design:type", Boolean)
], PaqueteResponseDto.prototype, "activo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cupos máximos del paquete' }),
    __metadata("design:type", Number)
], PaqueteResponseDto.prototype, "cuposMaximos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duración del paquete en días' }),
    __metadata("design:type", Number)
], PaqueteResponseDto.prototype, "duracion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URLs de imágenes adicionales', type: [String] }),
    __metadata("design:type", Array)
], PaqueteResponseDto.prototype, "imagenes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Servicios incluidos en el paquete', type: [servicio_response_dto_1.ServicioResponseDto] }),
    __metadata("design:type", Array)
], PaqueteResponseDto.prototype, "servicios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del paquete' }),
    __metadata("design:type", Date)
], PaqueteResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización del paquete' }),
    __metadata("design:type", Date)
], PaqueteResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=paquete-response.dto.js.map