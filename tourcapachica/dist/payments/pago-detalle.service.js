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
exports.PagoDetalleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PagoDetalleService = class PagoDetalleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPagoDetalleDto) {
        return this.prisma.pagoDetalle.create({
            data: {
                pagoId: createPagoDetalleDto.pagoId,
                tipoPagoId: createPagoDetalleDto.tipoPagoId,
                concepto: createPagoDetalleDto.concepto,
                monto: createPagoDetalleDto.monto,
                porcentajeImpuesto: createPagoDetalleDto.porcentajeImpuesto,
                cantidad: createPagoDetalleDto.cantidad,
                descripcion: createPagoDetalleDto.descripcion,
            },
            include: {
                pago: true,
                tipoPago: true,
            },
        });
    }
    async findAll() {
        return this.prisma.pagoDetalle.findMany({
            include: {
                pago: true,
                tipoPago: true,
            },
        });
    }
    async findOne(id) {
        const pagoDetalle = await this.prisma.pagoDetalle.findUnique({
            where: { id },
            include: {
                pago: true,
                tipoPago: true,
            },
        });
        if (!pagoDetalle) {
            throw new common_1.NotFoundException(`Detalle de pago con ID ${id} no encontrado`);
        }
        return pagoDetalle;
    }
    async findByPagoId(pagoId) {
        return this.prisma.pagoDetalle.findMany({
            where: { pagoId },
            include: {
                tipoPago: true,
            },
        });
    }
    async update(id, updatePagoDetalleDto) {
        await this.findOne(id);
        return this.prisma.pagoDetalle.update({
            where: { id },
            data: {
                concepto: updatePagoDetalleDto.concepto,
                monto: updatePagoDetalleDto.monto,
                porcentajeImpuesto: updatePagoDetalleDto.porcentajeImpuesto,
                cantidad: updatePagoDetalleDto.cantidad,
                descripcion: updatePagoDetalleDto.descripcion,
            },
            include: {
                pago: true,
                tipoPago: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pagoDetalle.delete({
            where: { id },
        });
    }
};
exports.PagoDetalleService = PagoDetalleService;
exports.PagoDetalleService = PagoDetalleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PagoDetalleService);
//# sourceMappingURL=pago-detalle.service.js.map