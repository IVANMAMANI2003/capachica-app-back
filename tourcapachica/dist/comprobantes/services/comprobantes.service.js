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
exports.ComprobantesService = void 0;
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let ComprobantesService = class ComprobantesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateAutomaticComprobante(payment) {
        var _a, _b, _c, _d, _e, _f;
        const montoTotal = Number(payment.montoTotal);
        const igv = this.calculateIgv(montoTotal);
        const comprobante = await this.prisma.comprobante.create({
            data: {
                pagoId: payment.id,
                tipoComprobante: 'Factura',
                serie: 'F001',
                numero: await this.getNextNumero(),
                rucCliente: (_b = (_a = payment.datosMetodoPago) === null || _a === void 0 ? void 0 : _a.rucCliente) !== null && _b !== void 0 ? _b : null,
                razonSocial: (_d = (_c = payment.datosMetodoPago) === null || _c === void 0 ? void 0 : _c.razonSocial) !== null && _d !== void 0 ? _d : null,
                direccionCliente: (_f = (_e = payment.datosMetodoPago) === null || _e === void 0 ? void 0 : _e.direccion) !== null && _f !== void 0 ? _f : null,
                subtotal: montoTotal - igv,
                igv,
                total: montoTotal,
            }
        });
        return comprobante;
    }
    async create(data) {
        return this.prisma.comprobante.create({ data });
    }
    async findAll() {
        return this.prisma.comprobante.findMany();
    }
    async findOne(id) {
        return this.prisma.comprobante.findUnique({ where: { id } });
    }
    async update(id, data) {
        return this.prisma.comprobante.update({ where: { id }, data });
    }
    async remove(id) {
        return this.prisma.comprobante.delete({ where: { id } });
    }
    async getNextNumero() {
        const ultimo = await this.prisma.comprobante.findFirst({
            orderBy: { numero: 'desc' },
            select: { numero: true },
            where: { serie: 'F001' }
        });
        return ultimo ? ultimo.numero + 1 : 1;
    }
    calculateIgv(total) {
        return parseFloat((total * 0.18).toFixed(2));
    }
};
exports.ComprobantesService = ComprobantesService;
exports.ComprobantesService = ComprobantesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComprobantesService);
//# sourceMappingURL=comprobantes.service.js.map