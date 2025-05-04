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
exports.AddServiciosDto = exports.ServicioPaqueteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ServicioPaqueteDto {
}
exports.ServicioPaqueteDto = ServicioPaqueteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del servicio a agregar' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ServicioPaqueteDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Orden del servicio en el paquete', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ServicioPaqueteDto.prototype, "orden", void 0);
class AddServiciosDto {
}
exports.AddServiciosDto = AddServiciosDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Lista de servicios a agregar', type: [ServicioPaqueteDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ServicioPaqueteDto),
    __metadata("design:type", Array)
], AddServiciosDto.prototype, "servicios", void 0);
//# sourceMappingURL=add-servicios.dto.js.map