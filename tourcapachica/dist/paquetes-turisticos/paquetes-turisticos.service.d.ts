import { PrismaService } from '../prisma/prisma.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadisticasPaqueteDto } from './dto/estadisticas.dto';
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
            id: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            cuposMaximos: number;
            notas: string | null;
            paqueteId: number;
        }[];
        servicios: ({
            servicio: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        servicios: ({
            servicio: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            id: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            cuposMaximos: number;
            notas: string | null;
            paqueteId: number;
        }[];
        servicios: ({
            servicio: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    findByEmprendimiento(emprendimientoId: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            id: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            cuposMaximos: number;
            notas: string | null;
            paqueteId: number;
        }[];
        servicios: ({
            servicio: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }[]>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            id: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            cuposMaximos: number;
            notas: string | null;
            paqueteId: number;
        }[];
        servicios: ({
            servicio: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        servicios: ({
            servicio: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
            orden: number;
        })[];
        emprendimiento: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
            estado: string;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, userId: number): Promise<{
        servicios: ({
            servicio: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
            orden: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    removeServicio(id: number, servicioId: number, userId: number): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
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
                id: number;
                fechaInicio: Date;
                fechaFin: Date;
                cuposDisponibles: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                createdAt: Date;
                updatedAt: Date;
                estado: string;
                cuposMaximos: number;
                notas: string | null;
                paqueteId: number;
            }[];
            servicios: ({
                servicio: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    tipoServicioId: number;
                    nombre: string;
                    descripcion: string | null;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    estado: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                id: number;
                servicioId: number;
                createdAt: Date;
                updatedAt: Date;
                paqueteTuristicoId: number;
                orden: number;
            })[];
            emprendimiento: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
                estado: string;
                usuarioId: number;
                tipo: string;
                direccion: string | null;
                coordenadas: string | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                fechaAprobacion: Date | null;
            };
            id: number;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string;
            estado: string;
            emprendimientoId: number;
            precio: number;
        };
        reservas: ({
            itinerarios: ({
                servicio: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    tipoServicioId: number;
                    nombre: string;
                    descripcion: string | null;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    estado: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                id: number;
                servicioId: number | null;
                createdAt: Date;
                updatedAt: Date;
                descripcion: string;
                fecha: Date;
                notas: string | null;
                hora: Date | null;
                tipoEvento: string;
                duracion: number | null;
                reservaId: number;
            })[];
            turista: {
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
                    emailVerified: boolean;
                    estaActivo: boolean;
                    ultimoAcceso: Date | null;
                    preferencias: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                usuarioId: number;
            };
        } & {
            id: number;
            fechaInicio: Date;
            fechaFin: Date | null;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            estado: string;
            notas: string | null;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            hora: string | null;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
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
                emailVerified: boolean;
                estaActivo: boolean;
                ultimoAcceso: Date | null;
                preferencias: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            servicioId: number;
            createdAt: Date;
            updatedAt: Date;
            estado: string;
            usuarioId: number;
            calificacion: number;
            comentario: string | null;
        })[];
    }>;
    createDisponibilidad(id: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        id: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposMaximos: number;
        notas: string | null;
        paqueteId: number;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        id: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposMaximos: number;
        notas: string | null;
        paqueteId: number;
    }[]>;
    getDisponibilidad(paqueteId: number): Promise<{
        id: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposMaximos: number;
        notas: string | null;
        paqueteId: number;
    }[]>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposMaximos: number;
        notas: string | null;
        paqueteId: number;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        createdAt: Date;
        updatedAt: Date;
        estado: string;
        cuposMaximos: number;
        notas: string | null;
        paqueteId: number;
    }>;
}
