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
exports.EstadisticasPaqueteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class EstadisticasPaqueteDto {
}
exports.EstadisticasPaqueteDto = EstadisticasPaqueteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de reservas del paquete' }),
    __metadata("design:type", Number)
], EstadisticasPaqueteDto.prototype, "totalReservas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de ingresos generados' }),
    __metadata("design:type", Number)
], EstadisticasPaqueteDto.prototype, "totalIngresos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Promedio de calificación del paquete' }),
    __metadata("design:type", Number)
], EstadisticasPaqueteDto.prototype, "promedioCalificacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de reseñas' }),
    __metadata("design:type", Number)
], EstadisticasPaqueteDto.prototype, "totalResenas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tasa de ocupación promedio' }),
    __metadata("design:type", Number)
], EstadisticasPaqueteDto.prototype, "tasaOcupacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Servicios más populares', type: [Object] }),
    __metadata("design:type", Array)
], EstadisticasPaqueteDto.prototype, "serviciosPopulares", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estadísticas por mes', type: [Object] }),
    __metadata("design:type", Array)
], EstadisticasPaqueteDto.prototype, "estadisticasMensuales", void 0);
//# sourceMappingURL=estadisticas.dto.js.map