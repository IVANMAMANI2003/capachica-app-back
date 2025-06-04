import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadoPaquete } from './enums/estado-paquete.enum';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { PrismaService } from '../prisma/prisma.service';
declare class UpdateEstadoDto {
    estado: EstadoPaquete;
}
export declare class PaquetesTuristicosController {
    private readonly paquetesTuristicosService;
    private readonly prisma;
    constructor(paquetesTuristicosService: PaquetesTuristicosService, prisma: PrismaService);
    create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto, req: RequestWithUser): Promise<{
        precio: number;
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            orden: number;
            paqueteTuristicoId: number;
        })[];
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            paqueteId: number;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    findAll(): Promise<{
        precio: number;
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            orden: number;
            paqueteTuristicoId: number;
        })[];
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }[]>;
    findByEmprendimiento(emprendimientoId: string): Promise<{
        precio: number;
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            orden: number;
            paqueteTuristicoId: number;
        })[];
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            paqueteId: number;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }[]>;
    findOne(id: string): Promise<{
        precio: number;
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            orden: number;
            paqueteTuristicoId: number;
        })[];
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            paqueteId: number;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    update(id: string, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto, req: RequestWithUser): Promise<{
        precio: number;
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            orden: number;
            paqueteTuristicoId: number;
        })[];
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            paqueteId: number;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    remove(id: string, req: RequestWithUser): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    updateEstado(id: string, body: UpdateEstadoDto): Promise<{
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            orden: number;
            paqueteTuristicoId: number;
        })[];
    } & {
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, req: any): Promise<{
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            orden: number;
            paqueteTuristicoId: number;
        })[];
    } & {
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    removeServicio(id: number, servicioId: number, req: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        orden: number;
        paqueteTuristicoId: number;
    }>;
    getEstadisticas(id: number, req: any): Promise<import("./dto/estadisticas.dto").EstadisticasPaqueteDto>;
    exportarDatos(id: number, req: any): Promise<{
        paquete: {
            precio: number;
            imagenes: {
                id: number;
                url: string;
            }[];
            emprendimiento: {
                id: number;
                usuarioId: number;
                lugarTuristicoId: number | null;
                nombre: string;
                descripcion: string | null;
                tipo: string;
                direccion: string | null;
                latitud: number | null;
                longitud: number | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                estado: string;
                fechaAprobacion: Date | null;
                createdAt: Date;
                updatedAt: Date;
            };
            servicios: ({
                servicio: {
                    id: number;
                    nombre: string;
                    descripcion: string | null;
                    latitud: number | null;
                    longitud: number | null;
                    estado: string;
                    createdAt: Date;
                    updatedAt: Date;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                servicioId: number;
                orden: number;
                paqueteTuristicoId: number;
            })[];
            disponibilidad: {
                id: number;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                fechaInicio: Date;
                fechaFin: Date;
                cuposMaximos: number;
                cuposDisponibles: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                notas: string | null;
                paqueteId: number;
            }[];
            id: number;
            nombre: string;
            descripcion: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
        };
        reservas: ({
            usuario: {
                persona: {
                    id: number;
                    nombre: string;
                    direccion: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    apellidos: string;
                    telefono: string | null;
                    fotoPerfilUrl: string | null;
                    fechaNacimiento: Date | null;
                    subdivisionId: number;
                };
            } & {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                personaId: number;
                email: string;
                passwordHash: string;
                recoveryToken: string | null;
                recoveryTokenExpiresAt: Date | null;
                emailVerificationToken: string | null;
                emailVerified: boolean | null;
                estaActivo: boolean | null;
                ultimoAcceso: Date | null;
                preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            };
            itinerarios: ({
                servicio: {
                    id: number;
                    nombre: string;
                    descripcion: string | null;
                    latitud: number | null;
                    longitud: number | null;
                    estado: string;
                    createdAt: Date;
                    updatedAt: Date;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                id: number;
                descripcion: string | null;
                createdAt: Date;
                updatedAt: Date;
                servicioId: number;
                reservaId: number;
                fechaInicioActividad: Date;
                fechaFinActividad: Date;
                lugarEncuentro: string;
                observaciones: string | null;
                tipoEvento: string;
            })[];
        } & {
            id: number;
            usuarioId: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
            fechaExpiracion: Date | null;
        })[];
        resenas: ({
            usuario: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                personaId: number;
                email: string;
                passwordHash: string;
                recoveryToken: string | null;
                recoveryTokenExpiresAt: Date | null;
                emailVerificationToken: string | null;
                emailVerified: boolean | null;
                estaActivo: boolean | null;
                ultimoAcceso: Date | null;
                preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            };
        } & {
            id: number;
            usuarioId: number | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            calificacion: number;
            comentario: string | null;
        })[];
    }>;
    createDisponibilidad(id: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        paqueteId: number;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        paqueteId: number;
    }[]>;
    getDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        paqueteId: number;
    }[]>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        paqueteId: number;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        paqueteId: number;
    }>;
    addFavorite(id: string, req: RequestWithUser): Promise<{
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }>;
    removeFavorite(id: string, req: RequestWithUser): Promise<{
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }>;
    findFavorites(req: any): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            orden: number;
            paqueteTuristicoId: number;
        })[];
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            paqueteId: number;
        }[];
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
}
export {};
