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
exports.UserEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserEntity {
}
exports.UserEntity = UserEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la persona asociada' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "personaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email del usuario' }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si el email está verificado' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "emailVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si el usuario está activo' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "estaActivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha del último acceso' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "ultimoAcceso", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Preferencias del usuario' }),
    __metadata("design:type", Object)
], UserEntity.prototype, "preferencias", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de actualización' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Persona asociada al usuario' }),
    __metadata("design:type", Object)
], UserEntity.prototype, "persona", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Roles del usuario' }),
    __metadata("design:type", Array)
], UserEntity.prototype, "usuariosRoles", void 0);
//# sourceMappingURL=user.entity.js.map