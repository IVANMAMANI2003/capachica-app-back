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
exports.ServiciosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const supabase_service_1 = require("../../supabase/supabase.service");
let ServiciosService = class ServiciosService {
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
        this.IMAGEABLE_TYPE = 'Servicio';
        this.BUCKET_NAME = 'servicios';
    }
    async create(createServicioDto, emprendimientoId) {
        if (!emprendimientoId) {
            throw new common_1.BadRequestException('No hay emprendimiento activo');
        }
        const { imagenes } = createServicioDto, servicioData = __rest(createServicioDto, ["imagenes"]);
        const servicio = await this.prisma.$transaction(async (tx) => {
            const creado = await tx.servicio.create({
                data: Object.assign(Object.assign({}, servicioData), { moneda: servicioData.moneda || 'PEN', estado: servicioData.estado || 'activo', serviciosEmprendedores: {
                        create: { emprendimientoId }
                    } })
            });
            if (imagenes === null || imagenes === void 0 ? void 0 : imagenes.length) {
                for (const img of imagenes) {
                    const filePath = `${creado.id}/${Date.now()}-${img.url.split('/').pop()}`;
                    const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, img.url);
                    if (error)
                        throw new common_1.BadRequestException(`Error al subir la imagen: ${error.message}`);
                    const imageDb = await tx.image.create({ data: { url: data.path } });
                    await tx.imageable.create({
                        data: {
                            image_id: imageDb.id,
                            imageable_id: creado.id,
                            imageable_type: this.IMAGEABLE_TYPE
                        }
                    });
                }
            }
            return creado;
        });
        return this.findOne(servicio.id);
    }
    async findAll() {
        const servicios = await this.prisma.servicio.findMany({
            include: {
                tipoServicio: true,
                serviciosEmprendedores: {
                    select: {
                        emprendimientoId: true
                    }
                }
            }
        });
        return Promise.all(servicios.map(async (s) => {
            const imgs = await this.prisma.imageable.findMany({
                where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: s.id },
                include: { image: true }
            });
            return Object.assign(Object.assign({}, s), { imagenes: imgs.map(i => ({ id: i.image.id, url: i.image.url })) });
        }));
    }
    async findOne(id) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id },
            include: {
                tipoServicio: true,
                serviciosEmprendedores: {
                    select: {
                        emprendimientoId: true
                    }
                }
            }
        });
        if (!servicio)
            throw new common_1.NotFoundException(`Servicio ${id} no encontrado`);
        const imgs = await this.prisma.imageable.findMany({
            where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: id },
            include: { image: true }
        });
        return Object.assign(Object.assign({}, servicio), { imagenes: imgs.map(i => ({ id: i.image.id, url: i.image.url })) });
    }
    async findByEmprendimiento(emprendimientoId) {
        return this.prisma.servicio.findMany({
            where: { serviciosEmprendedores: { some: { emprendimientoId } } },
            include: {
                tipoServicio: true,
                serviciosEmprendedores: { include: { emprendimiento: true } }
            }
        });
    }
    async update(id, updateDto, emprendimientoId) {
        const relation = await this.prisma.servicioEmprendedor.findFirst({
            where: { servicioId: id, emprendimientoId }
        });
        if (!relation)
            throw new common_1.NotFoundException('Servicio no encontrado para este emprendimiento');
        const { imagenes } = updateDto, servicioData = __rest(updateDto, ["imagenes"]);
        await this.prisma.servicio.update({ where: { id }, data: servicioData });
        if (imagenes) {
            const old = await this.prisma.imageable.findMany({
                where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: id },
                include: { image: true }
            });
            for (const item of old) {
                await this.supabaseService.deleteFile(this.BUCKET_NAME, item.image.url);
                await this.prisma.imageable.delete({ where: { id: item.id } });
                await this.prisma.image.delete({ where: { id: item.image.id } });
            }
            for (const img of imagenes) {
                const filePath = `${id}/${Date.now()}-${img.url.split('/').pop()}`;
                const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, img.url);
                if (error)
                    throw new common_1.BadRequestException(`Error al subir imagen: ${error.message}`);
                const imageDb = await this.prisma.image.create({ data: { url: data.path } });
                await this.prisma.imageable.create({ data: {
                        image_id: imageDb.id,
                        imageable_id: id,
                        imageable_type: this.IMAGEABLE_TYPE
                    } });
            }
        }
        return this.findOne(id);
    }
    async remove(id, emprendimientoId) {
        const relation = await this.prisma.servicioEmprendedor.findFirst({
            where: { servicioId: id, emprendimientoId }
        });
        if (!relation)
            throw new common_1.NotFoundException('Servicio no encontrado para este emprendimiento');
        const imgs = await this.prisma.imageable.findMany({
            where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: id },
            include: { image: true }
        });
        for (const item of imgs) {
            await this.supabaseService.deleteFile(this.BUCKET_NAME, item.image.url);
            await this.prisma.imageable.delete({ where: { id: item.id } });
            await this.prisma.image.delete({ where: { id: item.image.id } });
        }
        return this.prisma.servicio.delete({ where: { id } });
    }
    async updateEstado(id, estado, emprendimientoId) {
        if (!['activo', 'inactivo'].includes(estado)) {
            throw new common_1.BadRequestException('Estado inválido');
        }
        const relation = await this.prisma.servicioEmprendedor.findFirst({
            where: { servicioId: id, emprendimientoId }
        });
        if (!relation)
            throw new common_1.NotFoundException('Servicio no encontrado para este emprendimiento');
        return this.prisma.servicio.update({
            where: { id },
            data: { estado },
            include: { tipoServicio: true, serviciosEmprendedores: { include: { emprendimiento: true } } }
        });
    }
    async createDisponibilidad(dto) {
        const srv = await this.prisma.servicio.findUnique({ where: { id: dto.servicioId } });
        if (!srv)
            throw new common_1.NotFoundException(`Servicio ${dto.servicioId} no encontrado`);
        return this.prisma.servicioDisponibilidad.create({ data: {
                servicioId: dto.servicioId,
                fechaInicio: new Date(dto.fechaInicio),
                fechaFin: new Date(dto.fechaFin),
                cuposDisponibles: dto.cuposDisponibles,
                precioEspecial: dto.precioEspecial
            } });
    }
    async createDisponibilidades(list) {
        const ids = [...new Set(list.map(d => d.servicioId))];
        const found = await this.prisma.servicio.findMany({ where: { id: { in: ids } } });
        if (found.length !== ids.length) {
            const miss = ids.filter(id => !found.map(f => f.id).includes(id));
            throw new common_1.NotFoundException(`Servicios no encontrados: ${miss.join(',')}`);
        }
        return this.prisma.servicioDisponibilidad.createMany({ data: list.map(d => ({
                servicioId: d.servicioId,
                fechaInicio: new Date(d.fechaInicio),
                fechaFin: new Date(d.fechaFin),
                cuposDisponibles: d.cuposDisponibles,
                precioEspecial: d.precioEspecial
            })) });
    }
    async getDisponibilidad(servicioId) {
        const srv = await this.prisma.servicio.findUnique({ where: { id: servicioId } });
        if (!srv)
            throw new common_1.NotFoundException(`Servicio ${servicioId} no encontrado`);
        return this.prisma.servicioDisponibilidad.findMany({
            where: { servicioId }, orderBy: { fechaInicio: 'asc' }
        });
    }
    async getDisponibilidadByFecha(servicioId, fechaInicio) {
        const srv = await this.prisma.servicio.findUnique({ where: { id: servicioId } });
        if (!srv)
            throw new common_1.NotFoundException(`Servicio ${servicioId} no encontrado`);
        const disp = await this.prisma.servicioDisponibilidad.findFirst({
            where: { servicioId, fechaInicio: new Date(fechaInicio) }
        });
        if (!disp)
            throw new common_1.NotFoundException(`Sin disponibilidad para fecha ${fechaInicio}`);
        return disp;
    }
    async findByTipoServicio(tipoServicioId) {
        const servicios = await this.prisma.servicio.findMany({ where: { tipoServicioId }, include: { tipoServicio: true } });
        return Promise.all(servicios.map(async (s) => {
            const imgs = await this.prisma.imageable.findMany({
                where: { imageable_type: this.IMAGEABLE_TYPE, imageable_id: s.id },
                include: { image: true }
            });
            return Object.assign(Object.assign({}, s), { imagenes: imgs.map(i => ({ id: i.image.id, url: i.image.url })) });
        }));
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], ServiciosService);
//# sourceMappingURL=servicios.service.js.map