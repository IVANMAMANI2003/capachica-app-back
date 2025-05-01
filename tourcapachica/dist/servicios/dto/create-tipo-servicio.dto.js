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
exports.CreateTipoServicioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTipoServicioDto {
}
exports.CreateTipoServicioDto = CreateTipoServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del tipo de servicio', example: 'Tour' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTipoServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción del tipo de servicio', example: 'Tours guiados por la zona' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTipoServicioDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL de la imagen representativa', example: 'https://example.com/tour.jpg' }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateTipoServicioDto.prototype, "imagenUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si el servicio requiere control de cupos', example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateTipoServicioDto.prototype, "requiereCupo", void 0);
//# sourceMappingURL=create-tipo-servicio.dto.js.map