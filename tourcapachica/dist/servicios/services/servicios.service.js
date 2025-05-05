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
    async create(createServicioDto) {
        const { imagenes } = createServicioDto, servicioData = __rest(createServicioDto, ["imagenes"]);
        const servicio = await this.prisma.servicio.create({
            data: {
                tipoServicioId: servicioData.tipoServicioId,
                nombre: servicioData.nombre,
                descripcion: servicioData.descripcion,
                precioBase: servicioData.precioBase,
                moneda: servicioData.moneda || 'PEN',
                estado: servicioData.estado || 'activo',
                detallesServicio: servicioData.detallesServicio || {},
            },
        });
        if (imagenes && imagenes.length > 0) {
            for (const imagen of imagenes) {
                const filePath = `${servicio.id}/${Date.now()}-${imagen.url.split('/').pop()}`;
                const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, imagen.url);
                if (error) {
                    throw new common_1.BadRequestException(`Error al subir la imagen: ${error.message}`);
                }
                const imagenDb = await this.prisma.image.create({
                    data: {
                        url: data.path
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: imagenDb.id,
                        imageable_id: servicio.id,
                        imageable_type: this.IMAGEABLE_TYPE
                    }
                });
            }
        }
        return this.findOne(servicio.id);
    }
    async findAll() {
        const servicios = await this.prisma.servicio.findMany({
            include: {
                tipoServicio: true
            }
        });
        const serviciosWithImages = await Promise.all(servicios.map(async (servicio) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: servicio.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, servicio), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return serviciosWithImages;
    }
    async findOne(id) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id },
            include: {
                tipoServicio: true
            }
        });
        if (!servicio) {
            return null;
        }
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: servicio.id,
            },
            include: {
                image: true
            }
        });
        return Object.assign(Object.assign({}, servicio), { imagenes: imageables.map(imageable => ({
                id: imageable.image.id,
                url: imageable.image.url
            })) });
    }
    async findByEmprendimiento(emprendimientoId) {
        return this.prisma.servicio.findMany({
            where: {
                serviciosEmprendedores: {
                    some: {
                        emprendimientoId,
                    },
                },
            },
            include: {
                tipoServicio: true,
                serviciosEmprendedores: {
                    include: {
                        emprendimiento: true,
                    },
                },
            },
        });
    }
    async update(id, updateServicioDto) {
        const { imagenes } = updateServicioDto, servicioData = __rest(updateServicioDto, ["imagenes"]);
        await this.prisma.servicio.update({
            where: { id },
            data: {
                tipoServicioId: servicioData.tipoServicioId,
                nombre: servicioData.nombre,
                descripcion: servicioData.descripcion,
                precioBase: servicioData.precioBase,
                moneda: servicioData.moneda,
                estado: servicioData.estado,
                detallesServicio: servicioData.detallesServicio,
            },
        });
        if (imagenes) {
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
                const { error } = await this.supabaseService.deleteFile(this.BUCKET_NAME, imageable.image.url);
                if (error) {
                    console.error(`Error al eliminar la imagen de Supabase: ${error.message}`);
                }
                await this.prisma.imageable.delete({
                    where: { id: imageable.id }
                });
                await this.prisma.image.delete({
                    where: { id: imageable.image.id }
                });
            }
            for (const imagen of imagenes) {
                const filePath = `${id}/${Date.now()}-${imagen.url.split('/').pop()}`;
                const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, imagen.url);
                if (error) {
                    throw new common_1.BadRequestException(`Error al subir la imagen: ${error.message}`);
                }
                const imagenDb = await this.prisma.image.create({
                    data: {
                        url: data.path
                    }
                });
                await this.prisma.imageable.create({
                    data: {
                        image_id: imagenDb.id,
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
            const { error } = await this.supabaseService.deleteFile(this.BUCKET_NAME, imageable.image.url);
            if (error) {
                console.error(`Error al eliminar la imagen de Supabase: ${error.message}`);
            }
            await this.prisma.imageable.delete({
                where: { id: imageable.id }
            });
            await this.prisma.image.delete({
                where: { id: imageable.image.id }
            });
        }
        return this.prisma.servicio.delete({
            where: { id },
        });
    }
    async updateEstado(id, estado) {
        if (!['activo', 'inactivo'].includes(estado)) {
            throw new common_1.BadRequestException('Estado inválido. Debe ser "activo" o "inactivo"');
        }
        try {
            return await this.prisma.servicio.update({
                where: { id },
                data: { estado },
                include: {
                    tipoServicio: true,
                    serviciosEmprendedores: {
                        include: {
                            emprendimiento: true,
                        },
                    },
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Servicio con ID ${id} no encontrado`);
        }
    }
    async createDisponibilidad(createDisponibilidadDto) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: createDisponibilidadDto.servicioId },
        });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${createDisponibilidadDto.servicioId} no encontrado`);
        }
        return this.prisma.servicioDisponibilidad.create({
            data: {
                servicioId: createDisponibilidadDto.servicioId,
                fecha: new Date(createDisponibilidadDto.fecha),
                cuposDisponibles: createDisponibilidadDto.cuposDisponibles,
                precioEspecial: createDisponibilidadDto.precioEspecial,
            },
        });
    }
    async createDisponibilidades(disponibilidades) {
        const servicioIds = [...new Set(disponibilidades.map(d => d.servicioId))];
        const servicios = await this.prisma.servicio.findMany({
            where: { id: { in: servicioIds } },
        });
        if (servicios.length !== servicioIds.length) {
            const serviciosEncontrados = servicios.map(s => s.id);
            const serviciosNoEncontrados = servicioIds.filter(id => !serviciosEncontrados.includes(id));
            throw new common_1.NotFoundException(`Servicios con IDs ${serviciosNoEncontrados.join(', ')} no encontrados`);
        }
        return this.prisma.servicioDisponibilidad.createMany({
            data: disponibilidades.map(d => ({
                servicioId: d.servicioId,
                fecha: new Date(d.fecha),
                cuposDisponibles: d.cuposDisponibles,
                precioEspecial: d.precioEspecial,
            })),
        });
    }
    async getDisponibilidad(servicioId) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: servicioId },
        });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
        }
        return this.prisma.servicioDisponibilidad.findMany({
            where: { servicioId },
            orderBy: { fecha: 'asc' },
        });
    }
    async getDisponibilidadByFecha(servicioId, fecha) {
        const servicio = await this.prisma.servicio.findUnique({
            where: { id: servicioId },
        });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${servicioId} no encontrado`);
        }
        const disponibilidad = await this.prisma.servicioDisponibilidad.findFirst({
            where: {
                servicioId,
                fecha: new Date(fecha),
            },
        });
        if (!disponibilidad) {
            throw new common_1.NotFoundException(`No hay disponibilidad para el servicio ${servicioId} en la fecha ${fecha}`);
        }
        return disponibilidad;
    }
    async findByTipoServicio(tipoServicioId) {
        const servicios = await this.prisma.servicio.findMany({
            where: { tipoServicioId },
            include: {
                tipoServicio: true
            }
        });
        const serviciosWithImages = await Promise.all(servicios.map(async (servicio) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: servicio.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, servicio), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return serviciosWithImages;
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], ServiciosService);
//# sourceMappingURL=servicios.service.js.map