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
exports.EstadisticasResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const estadisticas_dto_1 = require("./estadisticas.dto");
const estadisticas_dto_2 = require("./estadisticas.dto");
class EstadisticasResponseDto {
}
exports.EstadisticasResponseDto = EstadisticasResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de reservas del paquete' }),
    __metadata("design:type", Number)
], EstadisticasResponseDto.prototype, "totalReservas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de ingresos generados' }),
    __metadata("design:type", Number)
], EstadisticasResponseDto.prototype, "totalIngresos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promedio de calificación del paquete' }),
    __metadata("design:type", Number)
], EstadisticasResponseDto.prototype, "promedioCalificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de reseñas recibidas' }),
    __metadata("design:type", Number)
], EstadisticasResponseDto.prototype, "totalResenas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasa de ocupación del paquete (porcentaje)' }),
    __metadata("design:type", Number)
], EstadisticasResponseDto.prototype, "tasaOcupacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Servicios más populares del paquete', type: [estadisticas_dto_1.ServicioPopularDto] }),
    __metadata("design:type", Array)
], EstadisticasResponseDto.prototype, "serviciosPopulares", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estadísticas mensuales', type: [estadisticas_dto_2.EstadisticaMensualDto] }),
    __metadata("design:type", Array)
], EstadisticasResponseDto.prototype, "estadisticasMensuales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de generación del reporte' }),
    __metadata("design:type", Date)
], EstadisticasResponseDto.prototype, "fechaGeneracion", void 0);
//# sourceMappingURL=estadisticas-response.dto.js.map