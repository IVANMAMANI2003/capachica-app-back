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
exports.PaquetesTuristicosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_service_1 = require("../supabase/supabase.service");
let PaquetesTuristicosService = class PaquetesTuristicosService {
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
        this.IMAGEABLE_TYPE = 'PaqueteTuristico';
        this.BUCKET_NAME = 'paquetes-turisticos';
    }
    async create(createPaqueteTuristicoDto) {
        const { imagenes, servicios } = createPaqueteTuristicoDto, paqueteData = __rest(createPaqueteTuristicoDto, ["imagenes", "servicios"]);
        const paquete = await this.prisma.paqueteTuristico.create({
            data: {
                nombre: paqueteData.nombre,
                descripcion: paqueteData.descripcion,
                precio: paqueteData.precio,
                estado: paqueteData.estado || 'activo',
                emprendimientoId: paqueteData.emprendimientoId,
            },
        });
        if (servicios && servicios.length > 0) {
            await this.prisma.servicioPaquete.createMany({
                data: servicios.map((servicioId, index) => ({
                    paqueteTuristicoId: paquete.id,
                    servicioId,
                    orden: index + 1,
                })),
            });
        }
        if (imagenes && imagenes.length > 0) {
            for (const imageUrl of imagenes) {
                const filePath = `${paquete.id}/${Date.now()}-${imageUrl.split('/').pop()}`;
                const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, imageUrl);
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
                        imageable_id: paquete.id,
                        imageable_type: this.IMAGEABLE_TYPE
                    }
                });
            }
        }
        return this.findOne(paquete.id);
    }
    async findAll() {
        const paquetes = await this.prisma.paqueteTuristico.findMany({
            include: {
                emprendimiento: true,
                servicios: {
                    include: {
                        servicio: true
                    }
                }
            }
        });
        const paquetesWithImages = await Promise.all(paquetes.map(async (paquete) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: paquete.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, paquete), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return paquetesWithImages;
    }
    async findOne(id) {
        const paquete = await this.prisma.paqueteTuristico.findUnique({
            where: { id },
            include: {
                emprendimiento: true,
                servicios: {
                    include: {
                        servicio: true
                    }
                },
                disponibilidad: true
            }
        });
        if (!paquete) {
            return null;
        }
        const imageables = await this.prisma.imageable.findMany({
            where: {
                imageable_type: this.IMAGEABLE_TYPE,
                imageable_id: paquete.id,
            },
            include: {
                image: true
            }
        });
        return Object.assign(Object.assign({}, paquete), { imagenes: imageables.map(imageable => ({
                id: imageable.image.id,
                url: imageable.image.url
            })) });
    }
    async findByEmprendimiento(emprendimientoId) {
        const paquetes = await this.prisma.paqueteTuristico.findMany({
            where: { emprendimientoId },
            include: {
                emprendimiento: true,
                servicios: {
                    include: {
                        servicio: true
                    }
                },
                disponibilidad: true
            }
        });
        const paquetesWithImages = await Promise.all(paquetes.map(async (paquete) => {
            const imageables = await this.prisma.imageable.findMany({
                where: {
                    imageable_type: this.IMAGEABLE_TYPE,
                    imageable_id: paquete.id,
                },
                include: {
                    image: true
                }
            });
            return Object.assign(Object.assign({}, paquete), { imagenes: imageables.map(imageable => ({
                    id: imageable.image.id,
                    url: imageable.image.url
                })) });
        }));
        return paquetesWithImages;
    }
    async update(id, updatePaqueteTuristicoDto) {
        const { imagenes, servicios } = updatePaqueteTuristicoDto, paqueteData = __rest(updatePaqueteTuristicoDto, ["imagenes", "servicios"]);
        await this.prisma.paqueteTuristico.update({
            where: { id },
            data: {
                nombre: paqueteData.nombre,
                descripcion: paqueteData.descripcion,
                precio: paqueteData.precio,
                estado: paqueteData.estado,
            },
        });
        if (servicios) {
            await this.prisma.servicioPaquete.deleteMany({
                where: { paqueteTuristicoId: id },
            });
            if (servicios.length > 0) {
                await this.prisma.servicioPaquete.createMany({
                    data: servicios.map((servicioId, index) => ({
                        paqueteTuristicoId: id,
                        servicioId,
                        orden: index + 1,
                    })),
                });
            }
        }
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
            for (const imageUrl of imagenes) {
                const filePath = `${id}/${Date.now()}-${imageUrl.split('/').pop()}`;
                const { data, error } = await this.supabaseService.uploadFile(this.BUCKET_NAME, filePath, imageUrl);
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
        return this.prisma.paqueteTuristico.delete({
            where: { id },
        });
    }
    async updateEstado(id, estado) {
        if (!['activo', 'inactivo'].includes(estado)) {
            throw new common_1.BadRequestException('Estado inválido. Debe ser "activo" o "inactivo"');
        }
        try {
            return await this.prisma.paqueteTuristico.update({
                where: { id },
                data: { estado },
                include: {
                    emprendimiento: true,
                    servicios: {
                        include: {
                            servicio: true
                        }
                    }
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
        }
    }
    async addServicios(id, addServiciosDto, userId) {
        const paquete = await this.findOne(id);
        if (paquete.emprendimientoId !== userId) {
            throw new common_1.ForbiddenException('No tienes permiso para modificar este paquete');
        }
        const servicios = await this.prisma.servicio.findMany({
            where: {
                id: {
                    in: addServiciosDto.servicioIds,
                },
            },
        });
        if (servicios.length !== addServiciosDto.servicioIds.length) {
            throw new common_1.BadRequestException('Uno o más servicios no existen');
        }
        return this.prisma.paqueteTuristico.update({
            where: { id },
            data: {
                servicios: {
                    create: addServiciosDto.servicioIds.map((servicioId, index) => ({
                        servicioId,
                        orden: index + 1,
                    })),
                },
            },
            include: {
                servicios: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
    }
    async removeServicio(id, servicioId, userId) {
        const paquete = await this.findOne(id);
        if (paquete.emprendimientoId !== userId) {
            throw new common_1.ForbiddenException('No tienes permiso para modificar este paquete');
        }
        const servicioPaquete = await this.prisma.servicioPaquete.findFirst({
            where: {
                paqueteTuristicoId: id,
                servicioId,
            },
        });
        if (!servicioPaquete) {
            throw new common_1.NotFoundException(`El servicio con ID ${servicioId} no está en este paquete`);
        }
        return this.prisma.servicioPaquete.delete({
            where: {
                id: servicioPaquete.id,
            },
        });
    }
    async getEstadisticas(id, userId) {
        var _a;
        const paquete = await this.findOne(id);
        if (paquete.emprendimientoId !== userId) {
            throw new common_1.ForbiddenException('No tienes permiso para ver las estadísticas de este paquete');
        }
        const reservas = await this.prisma.reserva.findMany({
            where: {
                itinerarios: {
                    some: {
                        servicio: {
                            serviciosPaquetes: {
                                some: {
                                    paqueteTuristicoId: id,
                                },
                            },
                        },
                    },
                },
            },
            include: {
                itinerarios: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
        const resenas = await this.prisma.resena.findMany({
            where: {
                servicioId: {
                    in: paquete.servicios.map((s) => s.servicioId),
                },
            },
            include: {
                usuario: true,
            },
        });
        const totalReservas = reservas.length;
        const totalIngresos = reservas.reduce((sum, reserva) => sum + Number(reserva.precioTotal), 0);
        const promedioCalificacion = resenas.length > 0
            ? resenas.reduce((sum, resena) => sum + resena.calificacion, 0) / resenas.length
            : 0;
        const totalResenas = resenas.length;
        const serviciosPopulares = await this.prisma.servicioPaquete.groupBy({
            by: ['servicioId'],
            where: {
                paqueteTuristicoId: id,
            },
            _count: {
                servicioId: true,
            },
            orderBy: {
                _count: {
                    servicioId: 'desc',
                },
            },
            take: 5,
        });
        const estadisticasMensuales = await this.prisma.reserva.groupBy({
            by: ['fechaReserva'],
            where: {
                itinerarios: {
                    some: {
                        servicio: {
                            serviciosPaquetes: {
                                some: {
                                    paqueteTuristicoId: id,
                                },
                            },
                        },
                    },
                },
            },
            _count: {
                id: true,
            },
            _sum: {
                precioTotal: true,
            },
        });
        return {
            totalReservas,
            totalIngresos,
            promedioCalificacion,
            totalResenas,
            tasaOcupacion: totalReservas > 0 ? (totalReservas / (((_a = paquete.disponibilidad[0]) === null || _a === void 0 ? void 0 : _a.cuposMaximos) || 0)) * 100 : 0,
            serviciosPopulares: await Promise.all(serviciosPopulares.map(async (sp) => {
                const servicio = await this.prisma.servicio.findUnique({
                    where: { id: sp.servicioId },
                });
                return {
                    servicioId: sp.servicioId,
                    nombre: servicio.nombre,
                    cantidadReservas: sp._count.servicioId,
                };
            })),
            estadisticasMensuales: estadisticasMensuales.map(em => ({
                mes: em.fechaReserva,
                totalReservas: em._count.id,
                totalIngresos: Number(em._sum.precioTotal || 0),
            })),
        };
    }
    async exportarDatos(id, userId) {
        const paquete = await this.findOne(id);
        if (paquete.emprendimientoId !== userId) {
            throw new common_1.ForbiddenException('No tienes permiso para exportar los datos de este paquete');
        }
        const reservas = await this.prisma.reserva.findMany({
            where: {
                itinerarios: {
                    some: {
                        servicio: {
                            serviciosPaquetes: {
                                some: {
                                    paqueteTuristicoId: id,
                                },
                            },
                        },
                    },
                },
            },
            include: {
                itinerarios: {
                    include: {
                        servicio: true,
                    },
                },
                turista: {
                    include: {
                        usuario: true,
                    },
                },
            },
        });
        const resenas = await this.prisma.resena.findMany({
            where: {
                servicioId: {
                    in: paquete.servicios.map((s) => s.servicioId),
                },
            },
            include: {
                usuario: true,
            },
        });
        return {
            paquete,
            reservas,
            resenas,
        };
    }
    async createDisponibilidad(id, createDisponibilidadDto) {
        const paquete = await this.prisma.paqueteTuristico.findUnique({
            where: { id },
        });
        if (!paquete) {
            throw new common_1.NotFoundException(`Paquete turístico con ID ${id} no encontrado`);
        }
        return this.prisma.disponibilidadPaquete.create({
            data: {
                paqueteId: id,
                fechaInicio: new Date(createDisponibilidadDto.fechaInicio),
                fechaFin: new Date(createDisponibilidadDto.fechaFin),
                cuposDisponibles: createDisponibilidadDto.cuposDisponibles,
                cuposMaximos: createDisponibilidadDto.cuposMaximos,
                precioEspecial: createDisponibilidadDto.precioEspecial,
                notas: createDisponibilidadDto.notas,
            },
        });
    }
    async getDisponibilidadesPaquete(id) {
        await this.findOne(id);
        return this.prisma.disponibilidadPaquete.findMany({
            where: {
                paqueteId: id,
            },
        });
    }
    async getDisponibilidad(paqueteId) {
        const paquete = await this.prisma.paqueteTuristico.findUnique({
            where: { id: paqueteId },
        });
        if (!paquete) {
            throw new common_1.NotFoundException(`Paquete turístico con ID ${paqueteId} no encontrado`);
        }
        return this.prisma.disponibilidadPaquete.findMany({
            where: { paqueteId },
            orderBy: { fechaInicio: 'asc' },
        });
    }
    async updateDisponibilidad(id, updateDisponibilidadDto) {
        await this.getDisponibilidad(id);
        return this.prisma.disponibilidadPaquete.update({
            where: { id },
            data: updateDisponibilidadDto,
        });
    }
    async deleteDisponibilidad(id) {
        await this.getDisponibilidad(id);
        return this.prisma.disponibilidadPaquete.delete({
            where: { id },
        });
    }
};
exports.PaquetesTuristicosService = PaquetesTuristicosService;
exports.PaquetesTuristicosService = PaquetesTuristicosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], PaquetesTuristicosService);
//# sourceMappingURL=paquetes-turisticos.service.js.map