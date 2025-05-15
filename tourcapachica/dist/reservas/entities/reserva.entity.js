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
exports.Reserva = void 0;
const swagger_1 = require("@nestjs/swagger");
class Reserva {
}
exports.Reserva = Reserva;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], Reserva.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], Reserva.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ABC123' }),
    __metadata("design:type", String)
], Reserva.prototype, "codigoReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'tipo_reserva' }),
    __metadata("design:type", String)
], Reserva.prototype, "tipoReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z' }),
    __metadata("design:type", Date)
], Reserva.prototype, "fechaReserva", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z' }),
    __metadata("design:type", Date)
], Reserva.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-02T00:00:00Z' }),
    __metadata("design:type", Date)
], Reserva.prototype, "fechaFin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], Reserva.prototype, "cantidadPersonas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100.00 }),
    __metadata("design:type", Number)
], Reserva.prototype, "precioTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PEN' }),
    __metadata("design:type", String)
], Reserva.prototype, "moneda", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pendiente' }),
    __metadata("design:type", String)
], Reserva.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Notas adicionales' }),
    __metadata("design:type", String)
], Reserva.prototype, "notas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Motivo de cancelación' }),
    __metadata("design:type", String)
], Reserva.prototype, "motivoCancelacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z' }),
    __metadata("design:type", Date)
], Reserva.prototype, "fechaCancelacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z' }),
    __metadata("design:type", Date)
], Reserva.prototype, "fechaExpiracion", void 0);
//# sourceMappingURL=reserva.entity.js.map