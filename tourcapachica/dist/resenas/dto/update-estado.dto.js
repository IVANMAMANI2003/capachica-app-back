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
exports.UpdateEstadoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const resena_estado_enum_1 = require("../resena-estado.enum");
class UpdateEstadoDto {
}
exports.UpdateEstadoDto = UpdateEstadoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado de la reseña', enum: resena_estado_enum_1.ResenaEstado }),
    (0, class_validator_1.IsEnum)(resena_estado_enum_1.ResenaEstado, { message: 'El estado debe ser visible u oculto' }),
    __metadata("design:type", String)
], UpdateEstadoDto.prototype, "estado", void 0);
//# sourceMappingURL=update-estado.dto.js.map