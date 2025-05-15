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
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            descripcion: string | null;
            nombre: string;
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
                id: number;
                moneda: string;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
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
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            notas: string | null;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            descripcion: string | null;
            nombre: string;
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
                id: number;
                moneda: string;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
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
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            descripcion: string | null;
            nombre: string;
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
                id: number;
                moneda: string;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
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
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            notas: string | null;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findByEmprendimiento(emprendimientoId: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            descripcion: string | null;
            nombre: string;
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
                id: number;
                moneda: string;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
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
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            notas: string | null;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            descripcion: string | null;
            nombre: string;
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
                id: number;
                moneda: string;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
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
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date;
            notas: string | null;
            cuposMaximos: number;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            descripcion: string | null;
            nombre: string;
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
                id: number;
                moneda: string;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
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
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, userId: number): Promise<{
        servicios: ({
            servicio: {
                id: number;
                moneda: string;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                nombre: string;
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
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
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
                id: number;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                usuarioId: number;
                descripcion: string | null;
                nombre: string;
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
                    id: number;
                    moneda: string;
                    estado: string;
                    createdAt: Date;
                    updatedAt: Date;
                    descripcion: string | null;
                    nombre: string;
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
                id: number;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                fechaInicio: Date;
                fechaFin: Date;
                notas: string | null;
                cuposMaximos: number;
                cuposDisponibles: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                paqueteId: number;
            }[];
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            descripcion: string;
            nombre: string;
            emprendimientoId: number;
            precio: import(".prisma/client/runtime/library").Decimal | null;
        };
        reservas: ({
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
            itinerarios: ({
                servicio: {
                    id: number;
                    moneda: string;
                    estado: string;
                    createdAt: Date;
                    updatedAt: Date;
                    descripcion: string | null;
                    nombre: string;
                    latitud: number | null;
                    longitud: number | null;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                id: number;
                reservaId: number;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string | null;
                servicioId: number;
                fechaInicioActividad: Date;
                fechaFinActividad: Date;
                lugarEncuentro: string;
                observaciones: string | null;
                tipoEvento: string;
            })[];
        } & {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            fechaFin: Date | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            notas: string | null;
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
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number | null;
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
        notas: string | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }[]>;
    getDisponibilidad(paqueteId: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }[]>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        cuposMaximos: number;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
    }>;
    marcarFavorito(createFavoritoDto: CreateFavoritoDto): Promise<FavoritoPaqueteTuristico>;
    desmarcarFavorito(id: number): Promise<void>;
    getFavoritos(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosPaqueteTuristico(paqueteTuristicoId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosUsuario(usuarioId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosPaqueteTuristicoPorUsuario(usuarioId: number, paqueteTuristicoId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        paqueteTuristicoId: number;
    }>;
    getFavoritosPaqueteTuristicoPorUsuarioId(usuarioId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosPaqueteTuristicoPorPaqueteTuristicoId(paqueteTuristicoId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        paqueteTuristicoId: number;
    }[]>;
    getFavoritosPaqueteTuristicoPorUsuarioIdYPaqueteTuristicoId(usuarioId: number, paqueteTuristicoId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        usuarioId: number;
        paqueteTuristicoId: number;
    }>;
    getTopFavoritos(): Promise<({
        favoritosPaqueteTuristico: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            paqueteTuristicoId: number;
        }[];
    } & {
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string;
        nombre: string;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
}
