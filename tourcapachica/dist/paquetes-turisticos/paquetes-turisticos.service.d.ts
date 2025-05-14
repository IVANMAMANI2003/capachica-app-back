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
        disponibilidad: {
            estado: string;
            id: number;
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
        emprendimiento: {
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                id: number;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                id: number;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            estado: string;
            id: number;
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
        emprendimiento: {
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                id: number;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
    }>;
    findByEmprendimiento(emprendimientoId: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            estado: string;
            id: number;
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
        emprendimiento: {
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                id: number;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
    }[]>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            estado: string;
            id: number;
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
        emprendimiento: {
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                id: number;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        emprendimiento: {
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
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                id: number;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
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
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, userId: number): Promise<{
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
                estado: string;
                id: number;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
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
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
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
            disponibilidad: {
                estado: string;
                id: number;
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
            emprendimiento: {
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
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
            servicios: ({
                servicio: {
                    nombre: string;
                    descripcion: string | null;
                    latitud: number | null;
                    longitud: number | null;
                    estado: string;
                    id: number;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                servicioId: number;
                paqueteTuristicoId: number;
                orden: number;
            })[];
            nombre: string;
            descripcion: string;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            precio: import(".prisma/client/runtime/library").Decimal | null;
            emprendimientoId: number;
        };
        reservas: ({
            itinerarios: ({
                servicio: {
                    nombre: string;
                    descripcion: string | null;
                    latitud: number | null;
                    longitud: number | null;
                    estado: string;
                    id: number;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                descripcion: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                reservaId: number;
                servicioId: number;
                fechaInicioActividad: Date;
                fechaFinActividad: Date;
                horaInicio: Date | null;
                horaFin: Date | null;
                lugarEncuentro: string;
                observaciones: string | null;
                tipoEvento: string;
            })[];
            usuario: {
                persona: {
                    nombre: string;
                    direccion: string | null;
                    id: number;
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
        } & {
            usuarioId: number;
            estado: string;
            id: number;
            moneda: string;
            createdAt: Date;
            updatedAt: Date;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            fechaFin: Date | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            notas: string | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
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
        estado: string;
        id: number;
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
        estado: string;
        id: number;
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
        estado: string;
        id: number;
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
        estado: string;
        id: number;
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
        estado: string;
        id: number;
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
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        precio: import(".prisma/client/runtime/library").Decimal | null;
        emprendimientoId: number;
    })[]>;
}
