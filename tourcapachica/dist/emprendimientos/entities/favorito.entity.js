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
exports.FavoritoEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class FavoritoEntity {
}
exports.FavoritoEntity = FavoritoEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único del favorito' }),
    __metadata("design:type", Number)
], FavoritoEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del emprendimiento favorito' }),
    __metadata("design:type", Number)
], FavoritoEntity.prototype, "emprendimientoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del favorito' }),
    __metadata("design:type", String)
], FavoritoEntity.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del favorito' }),
    __metadata("design:type", Date)
], FavoritoEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Emprendimiento favorito' }),
    __metadata("design:type", Object)
], FavoritoEntity.prototype, "emprendimiento", void 0);
//# sourceMappingURL=favorito.entity.js.map