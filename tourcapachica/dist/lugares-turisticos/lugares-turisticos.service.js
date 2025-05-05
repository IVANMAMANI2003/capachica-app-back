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
const supabase_service_1 = require("../supabase/supabase.service");
let LugaresTuristicosService = class LugaresTuristicosService {
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
        this.IMAGEABLE_TYPE = 'LugarTuristico';
    }
    async create(createLugarTuristicoDto, files) {
        const { imagenes } = createLugarTuristicoDto, lugarData = __rest(createLugarTuristicoDto, ["imagenes"]);
        const lugarTuristico = await this.prisma.lugarTuristico.create({
            data: {
                nombre: lugarData.nombre,
                descripcion: lugarData.descripcion,
                direccion: lugarData.direccion,
                coordenadas: lugarData.coordenadas,
                horarioApertura: lugarData.horarioApertura,
                horarioCierre: lugarData.horarioCierre,
                costoEntrada: lugarData.costoEntrada,
                recomendaciones: lugarData.recomendaciones,
                restricciones: lugarData.restricciones,
                esDestacado: lugarData.esDestacado,
                estado: lugarData.estado,
            },
        });
        if (files && files.length > 0) {
            for (const file of files) {
                const imageUrl = await this.supabaseService.uploadFile(file, this.IMAGEABLE_TYPE, lugarTuristico.id);
                const imagen = await this.prisma.image.create({
                    data: {
                        url: imageUrl
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: imagen.id,
                        imageable_id: lugarTuristico.id,
                        imageable_type: this.IMAGEABLE_TYPE
                    }
                });
            }
        }
        return this.findOne(lugarTuristico.id);
    }
    async findAll() {
        const lugares = await this.prisma.lugarTuristico.findMany();
        const lugaresWithImages = await Promise.all(lugares.map(async (lugar) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: lugar.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, lugar), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
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
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: lugar.id,
            },
            include: {
                image: true
            }
        });
        return Object.assign(Object.assign({}, lugar), { imagenes: imageables.map(imageable => ({
                id: imageable.image.id,
                url: imageable.image.url
            })) });
    }
    async update(id, updateLugarTuristicoDto, files) {
        const { imagenes } = updateLugarTuristicoDto, lugarData = __rest(updateLugarTuristicoDto, ["imagenes"]);
        await this.prisma.lugarTuristico.update({
            where: { id },
            data: {
                nombre: lugarData.nombre,
                descripcion: lugarData.descripcion,
                direccion: lugarData.direccion,
                coordenadas: lugarData.coordenadas,
                horarioApertura: lugarData.horarioApertura,
                horarioCierre: lugarData.horarioCierre,
                costoEntrada: lugarData.costoEntrada,
                recomendaciones: lugarData.recomendaciones,
                restricciones: lugarData.restricciones,
                esDestacado: lugarData.esDestacado,
                estado: lugarData.estado,
            },
        });
        if (files && files.length > 0) {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: id,
                },
                include: {
                    image: true
                }
            });
            for (const imageable of imageables) {
                const fileName = imageable.image.url.split('/').pop();
                await this.supabaseService.deleteFile(this.IMAGEABLE_TYPE, id, fileName);
                await this.prisma.imageable.delete({
                    where: { id: imageable.id }
                });
                await this.prisma.image.delete({
                    where: { id: imageable.image.id }
                });
            }
            for (const file of files) {
                const imageUrl = await this.supabaseService.uploadFile(file, this.IMAGEABLE_TYPE, id);
                const imagen = await this.prisma.image.create({
                    data: {
                        url: imageUrl
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: imagen.id,
                        imageable_id: id,
                        imageable_type: this.IMAGEABLE_TYPE
                    }
                });
            }
        }
        return this.findOne(id);
    }
    async remove(id) {
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: id,
            },
            include: {
                image: true
            }
        });
        for (const imageable of imageables) {
            const fileName = imageable.image.url.split('/').pop();
            await this.supabaseService.deleteFile(this.IMAGEABLE_TYPE, id, fileName);
            await this.prisma.imageable.delete({
                where: { id: imageable.id }
            });
            await this.prisma.image.delete({
                where: { id: imageable.image.id }
            });
        }
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], LugaresTuristicosService);
//# sourceMappingURL=lugares-turisticos.service.js.map