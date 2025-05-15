import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadisticasPaqueteDto } from './dto/estadisticas.dto';
import { CreateFavoritoDto } from './dto/create-favorito-paquete.dto';
import { FavoritoPaqueteTuristico } from '@prisma/client';
export declare class PaquetesTuristicosService {
    private readonly prisma;
    private readonly supabaseService;
    private readonly IMAGEABLE_TYPE;
    private readonly BUCKET_NAME;
    constructor(prisma: PrismaService, supabaseService: SupabaseService);
    create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            usuarioId: number;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            lugarTuristicoId: number | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
            servicio: {
                moneda: string;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        disponibilidad: {
            fechaInicio: Date;
            fechaFin: Date;
            estado: string;
            notas: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
        }[];
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            usuarioId: number;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            lugarTuristicoId: number | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
            servicio: {
                moneda: string;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            usuarioId: number;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            lugarTuristicoId: number | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
            servicio: {
                moneda: string;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        disponibilidad: {
            fechaInicio: Date;
            fechaFin: Date;
            estado: string;
            notas: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
        }[];
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findByEmprendimiento(emprendimientoId: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            usuarioId: number;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            lugarTuristicoId: number | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
            servicio: {
                moneda: string;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        disponibilidad: {
            fechaInicio: Date;
            fechaFin: Date;
            estado: string;
            notas: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
        }[];
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            usuarioId: number;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            lugarTuristicoId: number | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
            servicio: {
                moneda: string;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        disponibilidad: {
            fechaInicio: Date;
            fechaFin: Date;
            estado: string;
            notas: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
        }[];
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: number): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        emprendimiento: {
            usuarioId: number;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            lugarTuristicoId: number | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        servicios: ({
            servicio: {
                moneda: string;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
    } & {
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, userId: number): Promise<{
        servicios: ({
            servicio: {
                moneda: string;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
    } & {
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    removeServicio(id: number, servicioId: number, userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        paqueteTuristicoId: number;
        orden: number;
    }>;
    getEstadisticas(id: number, userId: number): Promise<EstadisticasPaqueteDto>;
    exportarDatos(id: number, userId: number): Promise<{
        paquete: {
            imagenes: {
                id: number;
                url: string;
            }[];
            emprendimiento: {
                usuarioId: number;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                lugarTuristicoId: number | null;
                tipo: string;
                direccion: string | null;
                latitud: number | null;
                longitud: number | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                fechaAprobacion: Date | null;
            };
            servicios: ({
                servicio: {
                    moneda: string;
                    estado: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    nombre: string;
                    descripcion: string | null;
                    latitud: number | null;
                    longitud: number | null;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                servicioId: number;
                paqueteTuristicoId: number;
                orden: number;
            })[];
            disponibilidad: {
                fechaInicio: Date;
                fechaFin: Date;
                estado: string;
                notas: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                cuposMaximos: number;
                cuposDisponibles: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                paqueteId: number;
            }[];
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string;
            emprendimientoId: number;
            precio: import(".prisma/client/runtime/library").Decimal | null;
        };
        reservas: ({
            itinerarios: ({
                servicio: {
                    moneda: string;
                    estado: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    nombre: string;
                    descripcion: string | null;
                    latitud: number | null;
                    longitud: number | null;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                reservaId: number;
                servicioId: number;
                fechaInicioActividad: Date;
                fechaFinActividad: Date;
                lugarEncuentro: string;
                observaciones: string | null;
                tipoEvento: string;
                descripcion: string | null;
            })[];
            usuario: {
                persona: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    nombre: string;
                    direccion: string | null;
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
        } & {
            usuarioId: number;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            fechaFin: Date | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            moneda: string;
            estado: string;
            notas: string | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
            id: number;
            codigoReserva: string;
            createdAt: Date;
            updatedAt: Date;
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
            usuarioId: number | null;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            calificacion: number;
            comentario: string | null;
        })[];
    }>;
    createDisponibilidad(id: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }[]>;
    getDisponibilidad(paqueteId: number): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }[]>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        estado: string;
        notas: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }>;
    marcarFavorito(createFavoritoDto: CreateFavoritoDto): Promise<FavoritoPaqueteTuristico>;
    desmarcarFavorito(id: number): Promise<void>;
    getFavoritos(): Promise<{
        usuarioId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosPaqueteTuristico(paqueteTuristicoId: number): Promise<{
        usuarioId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosUsuario(usuarioId: number): Promise<{
        usuarioId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosPaqueteTuristicoPorUsuario(usuarioId: number, paqueteTuristicoId: number): Promise<{
        usuarioId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }>;
    getFavoritosPaqueteTuristicoPorUsuarioId(usuarioId: number): Promise<{
        usuarioId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosPaqueteTuristicoPorPaqueteTuristicoId(paqueteTuristicoId: number): Promise<{
        usuarioId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosPaqueteTuristicoPorUsuarioIdYPaqueteTuristicoId(usuarioId: number, paqueteTuristicoId: number): Promise<{
        usuarioId: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }>;
    getTopFavoritos(): Promise<({
        favoritosPaqueteTuristico: {
            usuarioId: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
        }[];
    } & {
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
}
