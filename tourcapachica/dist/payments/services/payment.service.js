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
const estado_pago_enum_1 = require("../enums/estado-pago.enum");
const comprobantes_service_1 = require("../../comprobantes/services/comprobantes.service");
let PaymentService = class PaymentService {
    constructor(prisma, comprobantesService) {
        this.prisma = prisma;
        this.comprobantesService = comprobantesService;
    }
    async create(createPagoDto) {
        return this.prisma.$transaction(async (prisma) => {
            var _a, _b, _c;
            const totalDetalles = createPagoDto.detalles.reduce((total, detalle) => total + detalle.monto, 0);
            const reserva = await this.prisma.reserva.findUnique({
                where: { id: createPagoDto.reservaId },
            });
            let estado = estado_pago_enum_1.EstadoPago.PENDIENTE;
            if (Number(totalDetalles) >= Number(reserva.precioTotal)) {
                estado = estado_pago_enum_1.EstadoPago.COMPLETADO;
            }
            const transactionId = `TXN-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
            const pago = await prisma.pago.create({
                data: {
                    reservaId: createPagoDto.reservaId,
                    paymentGateway: createPagoDto.paymentGateway,
                    transactionId: transactionId,
                    montoTotal: totalDetalles,
                    moneda: (_a = createPagoDto.moneda) !== null && _a !== void 0 ? _a : 'PEN',
                    estado: estado,
                    fechaPago: new Date(),
                    datosMetodoPago: createPagoDto.datosMetodoPago,
                    metadata: createPagoDto.metadata,
                },
            });
            if (totalDetalles !== totalDetalles) {
                throw new Error('La suma de los montos en los detalles no coincide con el montoTotal del pago principal.');
            }
            for (const detalle of createPagoDto.detalles) {
                await prisma.pagoDetalle.create({
                    data: {
                        pagoId: pago.id,
                        tipoPagoId: detalle.tipoPagoId,
                        concepto: detalle.concepto,
                        monto: detalle.monto,
                        porcentajeImpuesto: (_b = detalle.porcentajeImpuesto) !== null && _b !== void 0 ? _b : 0,
                        cantidad: (_c = detalle.cantidad) !== null && _c !== void 0 ? _c : 1,
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
        const totalDetalles = updatePaymentDto.detalles.reduce((total, detalle) => total + detalle.monto, 0);
        if (!existe) {
            throw new common_1.NotFoundException(`Pago con ID ${id} no encontrado`);
        }
        const reserva = await this.prisma.reserva.findUnique({
            where: { id: updatePaymentDto.reservaId },
        });
        let estado = estado_pago_enum_1.EstadoPago.PENDIENTE;
        if (Number(totalDetalles) >= Number(reserva.precioTotal)) {
            estado = estado_pago_enum_1.EstadoPago.COMPLETADO;
        }
        const pagoActualizado = await this.prisma.pago.update({
            where: { id },
            data: {
                reservaId: updatePaymentDto.reservaId,
                paymentGateway: updatePaymentDto.paymentGateway,
                montoTotal: totalDetalles,
                moneda: updatePaymentDto.moneda,
                estado: estado,
                fechaPago: new Date(),
                datosMetodoPago: updatePaymentDto.datosMetodoPago,
                metadata: updatePaymentDto.metadata,
            },
            include: {
                detalles: true,
                comprobante: true,
                reserva: true,
            },
        });
        await this.prisma.reserva.update({
            where: { id: updatePaymentDto.reservaId },
            data: { estado: Number(totalDetalles) >= Number(reserva.precioTotal) ? 'confirmada' : 'pendiente' }
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
        const totalDetalles = createPagoDto.detalles.reduce((total, detalle) => total + detalle.monto, 0);
        const totalPagado = await this.calculateTotalPaid(createPagoDto.reservaId) + totalDetalles;
        const reserva = await this.prisma.reserva.findUnique({ where: { id: createPagoDto.reservaId } });
        if (!reserva) {
            throw new common_1.NotFoundException(`Reserva con ID ${createPagoDto.reservaId} no encontrada`);
        }
        const estadoPago = Number(totalPagado) >= Number(reserva.precioTotal) ? 'completado' : 'pendiente';
        const estadoReserva = Number(totalPagado) >= Number(reserva.precioTotal) ? 'confirmada' : 'pendiente';
        const transactionId = `TXN-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
        const pago = await this.prisma.pago.create({
            data: {
                reservaId: createPagoDto.reservaId,
                paymentGateway: createPagoDto.paymentGateway,
                transactionId: transactionId,
                montoTotal: totalDetalles,
                moneda: (_a = createPagoDto.moneda) !== null && _a !== void 0 ? _a : 'PEN',
                estado: estadoPago,
                fechaPago: new Date(),
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
    async captureCompletedPayment(paymentId) {
        var _a, _b, _c;
        const pago = await this.prisma.pago.findUnique({
            where: { id: paymentId },
            include: {
                detalles: true,
                reserva: true,
            },
        });
        if (!pago || pago.estado !== estado_pago_enum_1.EstadoPago.COMPLETADO) {
            throw new common_1.NotFoundException(`Pago con ID ${paymentId} no encontrado o no está completado`);
        }
        const pagoConvertido = {
            id: pago.id,
            montoTotal: Number(pago.montoTotal),
            datosMetodoPago: pago.datosMetodoPago
                ? {
                    rucCliente: typeof pago.datosMetodoPago === 'object' ? (_a = pago.datosMetodoPago.rucCliente) !== null && _a !== void 0 ? _a : null : null,
                    razonSocial: typeof pago.datosMetodoPago === 'object' ? (_b = pago.datosMetodoPago.razonSocial) !== null && _b !== void 0 ? _b : null : null,
                    direccion: typeof pago.datosMetodoPago === 'object' ? (_c = pago.datosMetodoPago.direccion) !== null && _c !== void 0 ? _c : null : null,
                }
                : null,
        };
        const comprobante = await this.comprobantesService.generateAutomaticComprobante(pagoConvertido);
        return comprobante;
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, comprobantes_service_1.ComprobantesService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map