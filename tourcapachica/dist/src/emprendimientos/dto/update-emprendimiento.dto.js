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
exports.UpdateEmprendimientoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_emprendimiento_dto_1 = require("./create-emprendimiento.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UpdateEmprendimientoDto extends (0, swagger_1.PartialType)(create_emprendimiento_dto_1.CreateEmprendimientoDto) {
}
exports.UpdateEmprendimientoDto = UpdateEmprendimientoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del usuario propietario', example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateEmprendimientoDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID adicional del lugar turístico', example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateEmprendimientoDto.prototype, "lugarTuristicoIdId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del emprendimiento', example: 'Restaurante La Isla', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del emprendimiento', example: 'Comida local', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de emprendimiento',
        example: 'Turismo',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Dirección', example: 'Av. Principal 123', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Latitud', example: -15.7667, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateEmprendimientoDto.prototype, "latitud", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Longitud', example: -69.6833, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateEmprendimientoDto.prototype, "longitud", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Teléfono de contacto', example: '+51 987654321', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "contactoTelefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Correo electrónico', example: 'correo@ejemplo.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "contactoEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sitio web', example: 'https://miweb.com', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "sitioWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Redes sociales como objeto clave:valor',
        example: {
            facebook: 'https://facebook.com/ejemplo',
            instagram: 'https://instagram.com/ejemplo'
        },
        required: false,
        type: 'object'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], UpdateEmprendimientoDto.prototype, "redesSociales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del emprendimiento',
        example: 'Activo',
        required: false,
        enum: ['Activo', 'Inactivo', 'Suspendido', 'Eliminado', 'Rechazado']
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['Activo', 'Inactivo', 'Suspendido', 'Eliminado', 'Rechazado']),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de aprobación',
        example: '2024-03-20T00:00:00.000Z',
        required: false,
        type: Date
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], UpdateEmprendimientoDto.prototype, "fechaAprobacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes',
        type: [create_emprendimiento_dto_1.ImageDto],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_emprendimiento_dto_1.ImageDto),
    __metadata("design:type", Array)
], UpdateEmprendimientoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=update-emprendimiento.dto.js.map