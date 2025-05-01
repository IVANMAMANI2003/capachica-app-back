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
exports.CreateEmprendimientoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ImageDto {
}
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], ImageDto.prototype, "url", void 0);
class CreateEmprendimientoDto {
}
exports.CreateEmprendimientoDto = CreateEmprendimientoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del emprendimiento', example: 'Restaurante La Casona' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción detallada del emprendimiento', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de emprendimiento', example: 'restaurante' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dirección física del emprendimiento', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Coordenadas geográficas del emprendimiento', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "coordenadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Teléfono de contacto', required: false }),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "contactoTelefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email de contacto', required: false }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "contactoEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL del sitio web', required: false }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "sitioWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Redes sociales del emprendimiento', required: false }),
    (0, class_validator_1.IsJSON)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateEmprendimientoDto.prototype, "redesSociales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del emprendimiento', example: 'pendiente' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['pendiente', 'aprobado', 'rechazado']),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Imágenes del emprendimiento', required: false }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateEmprendimientoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-emprendimiento.dto.js.map