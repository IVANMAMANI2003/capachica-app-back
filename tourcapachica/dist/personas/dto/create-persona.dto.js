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
exports.CreatePersonaDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreatePersonaDto {
}
exports.CreatePersonaDto = CreatePersonaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de la persona' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Apellidos de la persona' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "apellidos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Teléfono de la persona' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Dirección de la persona' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'URL de la foto de perfil' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "fotoPerfilUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fecha de nacimiento' }),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePersonaDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la subdivisión' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePersonaDto.prototype, "subdivisionId", void 0);
//# sourceMappingURL=create-persona.dto.js.map