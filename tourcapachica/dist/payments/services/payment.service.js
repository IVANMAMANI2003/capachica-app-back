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
exports.PaymentService = void 0;
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let PaymentService = class PaymentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPagoDto) {
        var _a, _b;
        const pago = await this.prisma.pago.create({
            data: {
                reservaId: createPagoDto.reservaId,
                paymentGateway: createPagoDto.paymentGateway,
                transactionId: createPagoDto.transactionId,
                montoTotal: createPagoDto.montoTotal,
                moneda: (_a = createPagoDto.moneda) !== null && _a !== void 0 ? _a : 'PEN',
                estado: (_b = createPagoDto.estado) !== null && _b !== void 0 ? _b : 'pendiente',
                fechaPago: createPagoDto.fechaPago,
                datosMetodoPago: createPagoDto.datosMetodoPago,
                metadata: createPagoDto.metadata,
            },
            include: {
                detalles: true,
                comprobante: true,
                reserva: true,
            },
        });
        return pago;
    }
    async findAll() {
        return this.prisma.pago.findMany({
            include: {
                detalles: true,
                comprobante: true,
                reserva: true,
            },
        });
    }
    async findOne(id) {
        const pago = await this.prisma.pago.findUnique({
            where: { id },
            include: {
                detalles: true,
                comprobante: true,
                reserva: true,
            },
        });
        if (!pago) {
            throw new common_1.NotFoundException(`Pago con ID ${id} no encontrado`);
        }
        return pago;
    }
    async update(id, updatePaymentDto) {
        const existe = await this.prisma.pago.findUnique({ where: { id } });
        if (!existe) {
            throw new common_1.NotFoundException(`Pago con ID ${id} no encontrado`);
        }
        const pagoActualizado = await this.prisma.pago.update({
            where: { id },
            data: {
                reservaId: updatePaymentDto.reservaId,
                paymentGateway: updatePaymentDto.paymentGateway,
                transactionId: updatePaymentDto.transactionId,
                montoTotal: updatePaymentDto.montoTotal,
                moneda: updatePaymentDto.moneda,
                estado: updatePaymentDto.estado,
                fechaPago: updatePaymentDto.fechaPago,
                datosMetodoPago: updatePaymentDto.datosMetodoPago,
                metadata: updatePaymentDto.metadata,
            },
            include: {
                detalles: true,
                comprobante: true,
                reserva: true,
            },
        });
        return pagoActualizado;
    }
    async remove(id) {
        const existe = await this.prisma.pago.findUnique({ where: { id } });
        if (!existe) {
            throw new common_1.NotFoundException(`Pago con ID ${id} no encontrado`);
        }
        return this.prisma.pago.delete({
            where: { id },
        });
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map