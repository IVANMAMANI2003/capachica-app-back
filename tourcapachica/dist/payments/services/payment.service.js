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
        return this.prisma.$transaction(async (prisma) => {
            var _a, _b, _c, _d;
            const pago = await prisma.pago.create({
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
            });
            const totalDetalles = createPagoDto.detalles.reduce((total, detalle) => total + detalle.monto, 0);
            if (totalDetalles !== createPagoDto.montoTotal) {
                throw new Error('La suma de los montos en los detalles no coincide con el montoTotal del pago principal.');
            }
            for (const detalle of createPagoDto.detalles) {
                await prisma.pagoDetalle.create({
                    data: {
                        pagoId: pago.id,
                        tipoPagoId: detalle.tipoPagoId,
                        concepto: detalle.concepto,
                        monto: detalle.monto,
                        porcentajeImpuesto: (_c = detalle.porcentajeImpuesto) !== null && _c !== void 0 ? _c : 0,
                        cantidad: (_d = detalle.cantidad) !== null && _d !== void 0 ? _d : 1,
                        descripcion: detalle.descripcion,
                    },
                });
            }
            return pago;
        });
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
    async calculateTotalPaid(reservaId) {
        const pagos = await this.prisma.pago.findMany({
            where: { reservaId },
            select: { montoTotal: true }
        });
        return pagos.reduce((total, pago) => Number(total) + Number(pago.montoTotal), 0);
    }
    async registerPayment(createPagoDto) {
        var _a;
        const totalPagado = await this.calculateTotalPaid(createPagoDto.reservaId) + createPagoDto.montoTotal;
        const reserva = await this.prisma.reserva.findUnique({ where: { id: createPagoDto.reservaId } });
        if (!reserva) {
            throw new common_1.NotFoundException(`Reserva con ID ${createPagoDto.reservaId} no encontrada`);
        }
        const estadoPago = Number(totalPagado) >= Number(reserva.precioTotal) ? 'completado' : 'pendiente';
        const estadoReserva = Number(totalPagado) >= Number(reserva.precioTotal) ? 'confirmada' : 'pendiente';
        const pago = await this.prisma.pago.create({
            data: {
                reservaId: createPagoDto.reservaId,
                paymentGateway: createPagoDto.paymentGateway,
                transactionId: createPagoDto.transactionId,
                montoTotal: createPagoDto.montoTotal,
                moneda: (_a = createPagoDto.moneda) !== null && _a !== void 0 ? _a : 'PEN',
                estado: estadoPago,
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
        await this.prisma.reserva.update({
            where: { id: createPagoDto.reservaId },
            data: { estado: estadoReserva }
        });
        return pago;
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map