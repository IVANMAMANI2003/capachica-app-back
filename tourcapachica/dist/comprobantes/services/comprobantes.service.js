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
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ComprobantesService = class ComprobantesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateAutomaticComprobante(payment) {
        var _a, _b, _c, _d, _e, _f, _g;
        const total = Number(payment.montoTotal);
        const isFactura = !!((_a = payment.datosMetodoPago) === null || _a === void 0 ? void 0 : _a.rucCliente);
        const tipoComprobante = isFactura ? 'Factura' : 'Boleta';
        const serie = isFactura ? 'F001' : 'B001';
        const numero = await this.getNextNumero(serie);
        const subtotal = isFactura ? +(total / 1.18).toFixed(2) : total;
        const igv = isFactura ? +(total - subtotal).toFixed(2) : 0;
        return this.prisma.comprobante.create({
            data: {
                pagoId: payment.id,
                tipoComprobante,
                serie,
                numero,
                rucCliente: (_c = (_b = payment.datosMetodoPago) === null || _b === void 0 ? void 0 : _b.rucCliente) !== null && _c !== void 0 ? _c : null,
                razonSocial: (_e = (_d = payment.datosMetodoPago) === null || _d === void 0 ? void 0 : _d.razonSocial) !== null && _e !== void 0 ? _e : null,
                direccionCliente: (_g = (_f = payment.datosMetodoPago) === null || _f === void 0 ? void 0 : _f.direccion) !== null && _g !== void 0 ? _g : null,
                subtotal,
                igv,
                total,
            },
        });
    }
    async create(data) {
        return this.prisma.comprobante.create({ data });
    }
    async validateComprobanteUniqueness(serie, numero) {
        const comprobante = await this.prisma.comprobante.findUnique({
            where: { serie_numero: { serie, numero } },
        });
        if (comprobante) {
            throw new Error('La combinación de serie y número ya existe');
        }
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
    async getNextNumero(serie) {
        const ultimo = await this.prisma.comprobante.findFirst({
            orderBy: { numero: 'desc' },
            select: { numero: true },
            where: { serie },
        });
        return ultimo ? ultimo.numero + 1 : 1;
    }
};
exports.ComprobantesService = ComprobantesService;
exports.ComprobantesService = ComprobantesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComprobantesService);
//# sourceMappingURL=comprobantes.service.js.map