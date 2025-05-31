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
exports.UsuarioResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UsuarioResponseDto {
}
exports.UsuarioResponseDto = UsuarioResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario' }),
    __metadata("design:type", Number)
], UsuarioResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de usuario' }),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Correo electrónico del usuario' }),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Rol del usuario' }),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "rol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si el usuario está activo' }),
    __metadata("design:type", Boolean)
], UsuarioResponseDto.prototype, "activo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre completo del usuario' }),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "nombreCompleto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de teléfono del usuario' }),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación del usuario' }),
    __metadata("design:type", Date)
], UsuarioResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización del usuario' }),
    __metadata("design:type", Date)
], UsuarioResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=usuario-response.dto.js.map