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
    constructor() {
        this.estado = 'pendiente';
    }
}
exports.CreateEmprendimientoDto = CreateEmprendimientoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del usuario emprendedor',
        example: 1,
        required: true,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateEmprendimientoDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del emprendimiento',
        example: 'Tour Capachica',
        required: true,
        maxLength: 200,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del emprendimiento',
        example: 'Empresa de turismo en Capachica',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de emprendimiento',
        example: 'turismo',
        required: true,
        maxLength: 50,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dirección del emprendimiento',
        example: 'Av. Principal 123, Capachica',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Coordenadas geográficas',
        example: '-15.8200,-70.0200',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "coordenadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Teléfono de contacto',
        example: '+51987654321',
        required: false,
        maxLength: 20,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "contactoTelefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email de contacto',
        example: 'contacto@tourcapachica.com',
        required: false,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "contactoEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sitio web del emprendimiento',
        example: 'https://www.tourcapachica.com',
        required: false,
        maxLength: 200,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "sitioWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Redes sociales en formato JSON',
        example: '{"facebook": "https://facebook.com/tourcapachica", "instagram": "https://instagram.com/tourcapachica"}',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsJSON)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "redesSociales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del emprendimiento',
        example: 'pendiente',
        enum: ['pendiente', 'aprobado', 'rechazado'],
        default: 'pendiente',
        required: false,
        maxLength: 20,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['pendiente', 'aprobado', 'rechazado']),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Imágenes del emprendimiento',
        required: false,
        type: [ImageDto]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateEmprendimientoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-emprendimiento.dto.js.map