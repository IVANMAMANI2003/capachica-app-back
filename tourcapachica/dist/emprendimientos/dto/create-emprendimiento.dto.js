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
const class_transformer_1 = require("class-transformer");
class ImageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL de la imagen',
        example: 'https://example.com/image.jpg',
        required: true,
    }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsNotEmpty)(),
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
        description: 'ID del usuario propietario del emprendimiento',
        example: 1,
        required: true,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateEmprendimientoDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del emprendimiento',
        example: 'Restaurante La Isla',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del emprendimiento',
        example: 'Restaurante especializado en comida local',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de emprendimiento',
        example: 'restaurante',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(['restaurante', 'hospedaje', 'artesania', 'otro']),
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
        description: 'Coordenadas geográficas del emprendimiento',
        example: '-15.7667, -69.6833',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "coordenadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Teléfono de contacto',
        example: '+51 987654321',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "contactoTelefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico de contacto',
        example: 'contacto@restaurante.com',
        required: false,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "contactoEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sitio web del emprendimiento',
        example: 'https://restaurante.com',
        required: false,
    }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "sitioWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Redes sociales del emprendimiento',
        example: '{"facebook": "https://facebook.com/restaurante", "instagram": "https://instagram.com/restaurante"}',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "redesSociales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del emprendimiento',
        example: 'pendiente',
        default: 'pendiente',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['pendiente', 'aprobado', 'rechazado']),
    __metadata("design:type", String)
], CreateEmprendimientoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de aprobación del emprendimiento',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateEmprendimientoDto.prototype, "fechaAprobacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes del emprendimiento',
        type: [ImageDto],
        required: false,
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateEmprendimientoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-emprendimiento.dto.js.map