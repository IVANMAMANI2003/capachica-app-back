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
exports.ExportacionResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const paquete_response_dto_1 = require("./paquete-response.dto");
const disponibilidad_response_dto_1 = require("./disponibilidad-response.dto");
const reserva_response_dto_1 = require("./reserva-response.dto");
const resena_response_dto_1 = require("./resena-response.dto");
class ExportacionResponseDto {
}
exports.ExportacionResponseDto = ExportacionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Información del paquete turístico', type: paquete_response_dto_1.PaqueteResponseDto }),
    __metadata("design:type", paquete_response_dto_1.PaqueteResponseDto)
], ExportacionResponseDto.prototype, "paquete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Lista de disponibilidades del paquete', type: [disponibilidad_response_dto_1.DisponibilidadResponseDto] }),
    __metadata("design:type", Array)
], ExportacionResponseDto.prototype, "disponibilidades", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Lista de reservas del paquete', type: [reserva_response_dto_1.ReservaResponseDto] }),
    __metadata("design:type", Array)
], ExportacionResponseDto.prototype, "reservas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Lista de reseñas del paquete', type: [resena_response_dto_1.ResenaResponseDto] }),
    __metadata("design:type", Array)
], ExportacionResponseDto.prototype, "resenas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de generación del reporte' }),
    __metadata("design:type", Date)
], ExportacionResponseDto.prototype, "fechaGeneracion", void 0);
//# sourceMappingURL=exportacion-response.dto.js.map