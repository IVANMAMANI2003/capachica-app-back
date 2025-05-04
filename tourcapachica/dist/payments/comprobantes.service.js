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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprobantesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ComprobantesService = class ComprobantesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createComprobanteDto) {
        const pago = await this.prisma.pago.findUnique({
            where: { id: createComprobanteDto.pagoId },
        });
        if (!pago) {
            throw new common_1.NotFoundException('Pago no encontrado');
        }
        const comprobanteExistente = await this.prisma.comprobante.findUnique({
            where: { pagoId: createComprobanteDto.pagoId },
        });
        if (comprobanteExistente) {
            throw new common_1.BadRequestException('Ya existe un comprobante para este pago');
        }
        const serieNumeroExistente = await this.prisma.comprobante.findFirst({
            where: {
                serie: createComprobanteDto.serie,
                numero: createComprobanteDto.numero,
            },
        });
        if (serieNumeroExistente) {
            throw new common_1.BadRequestException('Ya existe un comprobante con esta serie y número');
        }
        return this.prisma.comprobante.create({
            data: {
                pago: {
                    connect: { id: createComprobanteDto.pagoId }
                },
                tipoComprobante: createComprobanteDto.tipo,
                serie: createComprobanteDto.serie,
                numero: createComprobanteDto.numero,
                rucCliente: createComprobanteDto.rucCliente,
                razonSocial: createComprobanteDto.razonSocial,
                direccionCliente: createComprobanteDto.direccionCliente,
                subtotal: createComprobanteDto.subtotal,
                igv: createComprobanteDto.igv,
                total: createComprobanteDto.total,
                moneda: createComprobanteDto.moneda || 'PEN',
                estado: createComprobanteDto.estado || 'emitido',
                codigoSunat: createComprobanteDto.codigoSunat,
                codigoHash: createComprobanteDto.codigoHash,
                xmlUrl: createComprobanteDto.xmlUrl,
                pdfUrl: createComprobanteDto.pdfUrl,
            },
            include: {
                pago: true,
            },
        });
    }
    async findAll() {
        return this.prisma.comprobante.findMany({
            include: {
                pago: true,
            },
        });
    }
    async findOne(id) {
        const comprobante = await this.prisma.comprobante.findUnique({
            where: { id },
            include: {
                pago: true,
            },
        });
        if (!comprobante) {
            throw new common_1.NotFoundException('Comprobante no encontrado');
        }
        return comprobante;
    }
    async findByPagoId(pagoId) {
        const comprobante = await this.prisma.comprobante.findUnique({
            where: { pagoId },
            include: {
                pago: true,
            },
        });
        if (!comprobante) {
            throw new common_1.NotFoundException('Comprobante no encontrado para este pago');
        }
        return comprobante;
    }
    async update(id, updateComprobanteDto) {
        await this.findOne(id);
        if (updateComprobanteDto.serie && updateComprobanteDto.numero) {
            const serieNumeroExistente = await this.prisma.comprobante.findFirst({
                where: {
                    serie: updateComprobanteDto.serie,
                    numero: updateComprobanteDto.numero,
                    id: { not: id },
                },
            });
            if (serieNumeroExistente) {
                throw new common_1.BadRequestException('Ya existe un comprobante con esta serie y número');
            }
        }
        const { pagoId } = updateComprobanteDto, data = __rest(updateComprobanteDto, ["pagoId"]);
        return this.prisma.comprobante.update({
            where: { id },
            data: Object.assign(Object.assign({}, data), { pago: pagoId ? { connect: { id: pagoId } } : undefined }),
            include: {
                pago: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.comprobante.delete({
            where: { id },
        });
    }
    async updateEstado(id, estado) {
        await this.findOne(id);
        return this.prisma.comprobante.update({
            where: { id },
            data: { estado },
            include: {
                pago: true,
            },
        });
    }
};
exports.ComprobantesService = ComprobantesService;
exports.ComprobantesService = ComprobantesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComprobantesService);
//# sourceMappingURL=comprobantes.service.js.map