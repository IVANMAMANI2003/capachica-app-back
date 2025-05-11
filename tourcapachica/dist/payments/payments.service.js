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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const reservas_service_1 = require("../reservas/reservas.service");
const client_1 = require("@prisma/client");
let PaymentsService = class PaymentsService {
    constructor(prisma, reservasService) {
        this.prisma = prisma;
        this.reservasService = reservasService;
    }
    async create(createPaymentDto) {
        const reserva = await this.reservasService.findOne(createPaymentDto.reservaId);
        if (!reserva) {
            throw new common_1.NotFoundException('Reserva no encontrada');
        }
        if (!createPaymentDto.paymentGateway) {
            throw new common_1.BadRequestException('Gateway de pago es requerido');
        }
        const totalDetalles = createPaymentDto.detalles.reduce((sum, detalle) => sum.plus(new client_1.Prisma.Decimal(detalle.monto)), new client_1.Prisma.Decimal(0));
        if (!totalDetalles.equals(new client_1.Prisma.Decimal(createPaymentDto.montoTotal))) {
            throw new common_1.BadRequestException('El monto total no coincide con la suma de los detalles');
        }
        return this.prisma.$transaction(async (prisma) => {
            const pago = await prisma.pago.create({
                data: {
                    reservaId: createPaymentDto.reservaId,
                    paymentGateway: createPaymentDto.paymentGateway,
                    transactionId: createPaymentDto.transactionId,
                    montoTotal: createPaymentDto.montoTotal,
                    moneda: createPaymentDto.moneda,
                    estado: createPaymentDto.estado,
                    fechaPago: createPaymentDto.fechaPago ? new Date(createPaymentDto.fechaPago) : null,
                    datosMetodoPago: createPaymentDto.datosMetodoPago,
                    metadata: createPaymentDto.metadata,
                    detalles: {
                        create: createPaymentDto.detalles.map((detalle) => ({
                            tipoPagoId: detalle.tipoPagoId,
                            concepto: detalle.concepto,
                            monto: detalle.monto,
                            porcentajeImpuesto: detalle.porcentajeImpuesto,
                            cantidad: detalle.cantidad,
                            descripcion: detalle.descripcion,
                        })),
                    },
                },
                include: {
                    detalles: true,
                    reserva: true,
                },
            });
            if (pago.estado === 'COMPLETADO') {
                await prisma.reserva.update({
                    where: { id: pago.reservaId },
                    data: { estado: 'PAGADO' },
                });
            }
            return pago;
        });
    }
    async findAll() {
        return this.prisma.pago.findMany({
            include: {
                detalles: true,
                reserva: true,
            },
        });
    }
    async findOne(id) {
        const pago = await this.prisma.pago.findUnique({
            where: { id },
            include: {
                detalles: true,
                reserva: true,
            },
        });
        if (!pago) {
            throw new common_1.NotFoundException('Pago no encontrado');
        }
        return pago;
    }
    async findByReservaId(reservaId) {
        return this.prisma.pago.findMany({
            where: { reservaId },
            include: {
                detalles: {
                    include: {
                        tipoPago: true,
                    },
                },
            },
        });
    }
    async update(id, updatePaymentDto) {
        await this.findOne(id);
        const estadosValidos = ['PENDIENTE', 'COMPLETADO', 'CANCELADO'];
        if (updatePaymentDto.estado && !estadosValidos.includes(updatePaymentDto.estado)) {
            throw new common_1.BadRequestException('Estado de pago no válido');
        }
        return this.prisma.pago.update({
            where: { id },
            data: {
                paymentGateway: updatePaymentDto.paymentGateway,
                transactionId: updatePaymentDto.transactionId,
                montoTotal: updatePaymentDto.montoTotal,
                moneda: updatePaymentDto.moneda,
                estado: updatePaymentDto.estado,
                fechaPago: updatePaymentDto.fechaPago ? new Date(updatePaymentDto.fechaPago) : undefined,
                datosMetodoPago: updatePaymentDto.datosMetodoPago,
                metadata: updatePaymentDto.metadata,
            },
            include: {
                reserva: true,
                detalles: {
                    include: {
                        tipoPago: true,
                    },
                },
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.pago.delete({
            where: { id },
        });
    }
    async updateEstado(id, estado) {
        const pago = await this.findOne(id);
        return this.prisma.$transaction(async (prisma) => {
            const updatedPago = await prisma.pago.update({
                where: { id },
                data: { estado },
                include: {
                    detalles: true,
                },
            });
            if (estado === 'COMPLETADO') {
                await prisma.reserva.update({
                    where: { id: pago.reservaId },
                    data: { estado: 'PAGADO' },
                });
            }
            return updatedPago;
        });
    }
    async generateReceipt(id) {
        const pago = await this.findOne(id);
        return {
            numeroRecibo: `REC-${pago.id}`,
            fecha: pago.fechaPago,
            monto: pago.montoTotal,
            detalles: pago.detalles,
            reserva: pago.reserva,
        };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        reservas_service_1.ReservasService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map