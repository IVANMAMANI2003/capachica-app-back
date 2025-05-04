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
exports.LugaresTuristicosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LugaresTuristicosService = class LugaresTuristicosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createLugarTuristicoDto) {
        const { imagenes } = createLugarTuristicoDto, lugarData = __rest(createLugarTuristicoDto, ["imagenes"]);
        try {
            const lugar = await this.prisma.lugarTuristico.create({
                data: Object.assign(Object.assign({}, lugarData), { estado: lugarData.estado || 'activo', esDestacado: lugarData.esDestacado || false }),
            });
            if (imagenes && imagenes.length > 0) {
                await this.prisma.image.createMany({
                    data: imagenes.map(img => ({
                        url: img.url,
                        imageableId: lugar.id,
                        imageableType: 'LugarTuristico',
                    })),
                });
            }
            return this.findOne(lugar.id);
        }
        catch (error) {
            console.error('Error al crear lugar turístico:', error);
            throw error;
        }
    }
    async findAll() {
        const lugares = await this.prisma.lugarTuristico.findMany();
        const lugaresWithImages = await Promise.all(lugares.map(async (lugar) => {
            const imagenes = await this.prisma.image.findMany({
                where: {
                    imageableId: lugar.id,
                    imageableType: 'LugarTuristico',
                },
            });
            return Object.assign(Object.assign({}, lugar), { imagenes });
        }));
        return lugaresWithImages;
    }
    async findOne(id) {
        const lugar = await this.prisma.lugarTuristico.findUnique({
            where: { id },
        });
        if (!lugar) {
            return null;
        }
        const imagenes = await this.prisma.image.findMany({
            where: {
                imageableId: lugar.id,
                imageableType: 'LugarTuristico',
            },
        });
        return Object.assign(Object.assign({}, lugar), { imagenes });
    }
    async update(id, updateLugarTuristicoDto) {
        const { imagenes } = updateLugarTuristicoDto, lugarData = __rest(updateLugarTuristicoDto, ["imagenes"]);
        const lugar = await this.prisma.lugarTuristico.update({
            where: { id },
            data: lugarData,
        });
        if (imagenes) {
            await this.prisma.image.deleteMany({
                where: {
                    imageableId: id,
                    imageableType: 'LugarTuristico',
                },
            });
            if (imagenes.length > 0) {
                await this.prisma.image.createMany({
                    data: imagenes.map(img => ({
                        url: img.url,
                        imageableId: id,
                        imageableType: 'LugarTuristico',
                    })),
                });
            }
        }
        return this.findOne(id);
    }
    async remove(id) {
        await this.prisma.image.deleteMany({
            where: {
                imageableId: id,
                imageableType: 'LugarTuristico',
            },
        });
        return this.prisma.lugarTuristico.delete({
            where: { id },
        });
    }
    async findDestacados() {
        return this.prisma.lugarTuristico.findMany({
            where: { esDestacado: true },
        });
    }
};
exports.LugaresTuristicosService = LugaresTuristicosService;
exports.LugaresTuristicosService = LugaresTuristicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LugaresTuristicosService);
//# sourceMappingURL=lugares-turisticos.service.js.map