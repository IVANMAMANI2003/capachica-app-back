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
class ResenaResponseDto {
}
exports.ResenaResponseDto = ResenaResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la reseña' }),
    __metadata("design:type", Number)
], ResenaResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del servicio' }),
    __metadata("design:type", Number)
], ResenaResponseDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario' }),
    __metadata("design:type", Number)
], ResenaResponseDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calificación de la reseña' }),
    __metadata("design:type", Number)
], ResenaResponseDto.prototype, "calificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comentario de la reseña', required: false }),
    __metadata("design:type", String)
], ResenaResponseDto.prototype, "comentario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado de la reseña' }),
    __metadata("design:type", String)
], ResenaResponseDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    __metadata("design:type", Date)
], ResenaResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de actualización' }),
    __metadata("design:type", Date)
], ResenaResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=resena-response.dto.js.map