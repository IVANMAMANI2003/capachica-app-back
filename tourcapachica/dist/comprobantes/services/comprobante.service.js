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
exports.ComprobanteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ComprobanteService = class ComprobanteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createComprobante(pagoId, total, rucCliente) {
        const pago = await this.prisma.pago.findUnique({
            where: { id: pagoId },
        });
        if (!pago || pago.estado !== 'completado') {
            throw new Error('Pago no encontrado o no está completado');
        }
        const tipoComprobante = rucCliente ? 'factura' : 'boleta';
        const serie = rucCliente ? 'F001' : 'B001';
        const ultimoComprobante = await this.prisma.comprobante.findFirst({
            where: { serie },
            orderBy: { numero: 'desc' },
        });
        const numero = ultimoComprobante ? ultimoComprobante.numero + 1 : 1;
        const igv = tipoComprobante === 'factura' ? total * 0.18 : 0;
        const subtotal = tipoComprobante === 'factura' ? total / 1.18 : total;
        return this.prisma.comprobante.create({
            data: {
                pagoId,
                tipoComprobante,
                serie,
                numero,
                subtotal,
                igv,
                total,
            },
        });
    }
    async validateComprobanteUniqueness(serie, numero) {
        const comprobante = await this.prisma.comprobante.findUnique({
            where: { serie_numero: { serie, numero } },
        });
        if (comprobante) {
            throw new Error('La combinación de serie y número ya existe');
        }
    }
};
exports.ComprobanteService = ComprobanteService;
exports.ComprobanteService = ComprobanteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComprobanteService);
//# sourceMappingURL=comprobante.service.js.map