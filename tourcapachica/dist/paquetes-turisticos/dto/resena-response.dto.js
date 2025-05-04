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
exports.ResenaResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const usuario_response_dto_1 = require("./usuario-response.dto");
class ResenaResponseDto {
}
exports.ResenaResponseDto = ResenaResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reseña' }),
    __metadata("design:type", Number)
], ResenaResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario que realizó la reseña' }),
    __metadata("design:type", Number)
], ResenaResponseDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de objeto reseñado' }),
    __metadata("design:type", String)
], ResenaResponseDto.prototype, "tipoObjeto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del objeto reseñado' }),
    __metadata("design:type", Number)
], ResenaResponseDto.prototype, "objetoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calificación de la reseña' }),
    __metadata("design:type", Number)
], ResenaResponseDto.prototype, "calificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comentario de la reseña' }),
    __metadata("design:type", String)
], ResenaResponseDto.prototype, "comentario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Información del usuario que realizó la reseña', type: usuario_response_dto_1.UsuarioResponseDto }),
    __metadata("design:type", usuario_response_dto_1.UsuarioResponseDto)
], ResenaResponseDto.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación de la reseña' }),
    __metadata("design:type", Date)
], ResenaResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización de la reseña' }),
    __metadata("design:type", Date)
], ResenaResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=resena-response.dto.js.map