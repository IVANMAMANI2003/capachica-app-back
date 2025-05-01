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
exports.EmprendimientoEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class EmprendimientoEntity {
}
exports.EmprendimientoEntity = EmprendimientoEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único del emprendimiento' }),
    __metadata("design:type", Number)
], EmprendimientoEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario propietario del emprendimiento' }),
    __metadata("design:type", Number)
], EmprendimientoEntity.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del emprendimiento' }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción detallada del emprendimiento', required: false }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de emprendimiento' }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dirección física del emprendimiento', required: false }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Coordenadas geográficas del emprendimiento', required: false }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "coordenadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Teléfono de contacto', required: false }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "contactoTelefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email de contacto', required: false }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "contactoEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL del sitio web', required: false }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "sitioWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Redes sociales del emprendimiento', required: false }),
    __metadata("design:type", Object)
], EmprendimientoEntity.prototype, "redesSociales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado actual del emprendimiento' }),
    __metadata("design:type", String)
], EmprendimientoEntity.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de aprobación del emprendimiento', required: false }),
    __metadata("design:type", Date)
], EmprendimientoEntity.prototype, "fechaAprobacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del registro' }),
    __metadata("design:type", Date)
], EmprendimientoEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización' }),
    __metadata("design:type", Date)
], EmprendimientoEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=emprendimiento.entity.js.map