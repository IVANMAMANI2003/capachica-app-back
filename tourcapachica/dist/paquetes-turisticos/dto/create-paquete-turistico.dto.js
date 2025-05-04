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
exports.CreatePaqueteTuristicoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const estado_paquete_enum_1 = require("../enums/estado-paquete.enum");
class CreatePaqueteTuristicoDto {
}
exports.CreatePaqueteTuristicoDto = CreatePaqueteTuristicoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del paquete turístico' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del paquete turístico' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio base del paquete turístico' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePaqueteTuristicoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado del paquete turístico', enum: estado_paquete_enum_1.EstadoPaquete }),
    (0, class_validator_1.IsEnum)(estado_paquete_enum_1.EstadoPaquete),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del emprendimiento al que pertenece el paquete' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePaqueteTuristicoDto.prototype, "emprendimientoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de la imagen principal', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "imagenUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cupos máximos del paquete', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePaqueteTuristicoDto.prototype, "cuposMaximos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Duración del paquete en días', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePaqueteTuristicoDto.prototype, "duracion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URLs de imágenes adicionales', required: false, type: [String] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePaqueteTuristicoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-paquete-turistico.dto.js.map