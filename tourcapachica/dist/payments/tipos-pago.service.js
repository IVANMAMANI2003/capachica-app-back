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
exports.TipoPagoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TipoPagoService = class TipoPagoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTipoPagoDto) {
        return this.prisma.tipoPago.create({
            data: {
                nombre: createTipoPagoDto.nombre,
                descripcion: createTipoPagoDto.descripcion,
                requiereVerificacion: createTipoPagoDto.requiereVerificacion,
                comisionPorcentaje: createTipoPagoDto.comisionPorcentaje,
                activo: createTipoPagoDto.activo,
            },
        });
    }
    async findAll() {
        return this.prisma.tipoPago.findMany({
            include: {
                pagoDetalles: true,
            },
        });
    }
    async findOne(id) {
        const tipoPago = await this.prisma.tipoPago.findUnique({
            where: { id },
            include: {
                pagoDetalles: true,
            },
        });
        if (!tipoPago) {
            throw new common_1.NotFoundException(`Tipo de pago con ID ${id} no encontrado`);
        }
        return tipoPago;
    }
    async update(id, updateTipoPagoDto) {
        await this.findOne(id);
        return this.prisma.tipoPago.update({
            where: { id },
            data: {
                nombre: updateTipoPagoDto.nombre,
                descripcion: updateTipoPagoDto.descripcion,
                requiereVerificacion: updateTipoPagoDto.requiereVerificacion,
                comisionPorcentaje: updateTipoPagoDto.comisionPorcentaje,
                activo: updateTipoPagoDto.activo,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.tipoPago.delete({
            where: { id },
        });
    }
};
exports.TipoPagoService = TipoPagoService;
exports.TipoPagoService = TipoPagoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TipoPagoService);
//# sourceMappingURL=tipos-pago.service.js.map