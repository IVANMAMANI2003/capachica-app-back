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
exports.ServicioEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class ServicioEntity {
}
exports.ServicioEntity = ServicioEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único del servicio' }),
    __metadata("design:type", Number)
], ServicioEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del tipo de servicio' }),
    __metadata("design:type", Number)
], ServicioEntity.prototype, "tipoServicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del servicio' }),
    __metadata("design:type", String)
], ServicioEntity.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del servicio' }),
    __metadata("design:type", String)
], ServicioEntity.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio base del servicio' }),
    __metadata("design:type", Number)
], ServicioEntity.prototype, "precioBase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Moneda del precio', enum: ['PEN', 'USD'] }),
    __metadata("design:type", String)
], ServicioEntity.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del servicio', enum: ['activo', 'inactivo'] }),
    __metadata("design:type", String)
], ServicioEntity.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de la imagen del servicio' }),
    __metadata("design:type", String)
], ServicioEntity.prototype, "imagenUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detalles adicionales del servicio' }),
    __metadata("design:type", Object)
], ServicioEntity.prototype, "detallesServicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    __metadata("design:type", Date)
], ServicioEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización' }),
    __metadata("design:type", Date)
], ServicioEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de servicio relacionado' }),
    __metadata("design:type", Object)
], ServicioEntity.prototype, "tipoServicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Disponibilidad del servicio' }),
    __metadata("design:type", Array)
], ServicioEntity.prototype, "disponibilidad", void 0);
//# sourceMappingURL=servicio.entity.js.map