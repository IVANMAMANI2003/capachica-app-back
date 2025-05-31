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
exports.PaqueteTuristicoEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const estado_paquete_enum_1 = require("../enums/estado-paquete.enum");
class ImageEntity {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la imagen' }),
    __metadata("design:type", Number)
], ImageEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de la imagen' }),
    __metadata("design:type", String)
], ImageEntity.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del elemento al que pertenece la imagen' }),
    __metadata("design:type", Number)
], ImageEntity.prototype, "imageableId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de elemento al que pertenece la imagen' }),
    __metadata("design:type", String)
], ImageEntity.prototype, "imageableType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación de la imagen' }),
    __metadata("design:type", Date)
], ImageEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización de la imagen' }),
    __metadata("design:type", Date)
], ImageEntity.prototype, "updatedAt", void 0);
class PaqueteTuristicoEntity {
}
exports.PaqueteTuristicoEntity = PaqueteTuristicoEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del paquete turístico' }),
    __metadata("design:type", Number)
], PaqueteTuristicoEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del paquete turístico' }),
    __metadata("design:type", String)
], PaqueteTuristicoEntity.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del paquete turístico' }),
    __metadata("design:type", String)
], PaqueteTuristicoEntity.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio del paquete turístico' }),
    __metadata("design:type", Number)
], PaqueteTuristicoEntity.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del paquete turístico', enum: estado_paquete_enum_1.EstadoPaquete }),
    __metadata("design:type", String)
], PaqueteTuristicoEntity.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del emprendimiento al que pertenece el paquete' }),
    __metadata("design:type", Number)
], PaqueteTuristicoEntity.prototype, "emprendimientoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del paquete' }),
    __metadata("design:type", Date)
], PaqueteTuristicoEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización del paquete' }),
    __metadata("design:type", Date)
], PaqueteTuristicoEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Imágenes del paquete', type: [ImageEntity] }),
    __metadata("design:type", Array)
], PaqueteTuristicoEntity.prototype, "images", void 0);
//# sourceMappingURL=paquete-turistico.entity.js.map