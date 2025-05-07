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
exports.CreateResenaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateResenaDto {
}
exports.CreateResenaDto = CreateResenaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del servicio', example: 1 }),
    __metadata("design:type", Number)
], CreateResenaDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario', example: 1 }),
    __metadata("design:type", Number)
], CreateResenaDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Calificación', example: 5 }),
    __metadata("design:type", Number)
], CreateResenaDto.prototype, "calificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comentario', example: 'Excelente servicio', required: false }),
    __metadata("design:type", String)
], CreateResenaDto.prototype, "comentario", void 0);
//# sourceMappingURL=create-resena.dto.js.map