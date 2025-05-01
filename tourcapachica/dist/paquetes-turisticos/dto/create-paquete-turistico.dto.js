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
const class_validator_1 = require("class-validator");
class ImageDto {
}
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], ImageDto.prototype, "url", void 0);
class CreatePaqueteTuristicoDto {
}
exports.CreatePaqueteTuristicoDto = CreatePaqueteTuristicoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePaqueteTuristicoDto.prototype, "precio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['activo', 'inactivo']),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreatePaqueteTuristicoDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePaqueteTuristicoDto.prototype, "emprendimientoId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePaqueteTuristicoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=create-paquete-turistico.dto.js.map