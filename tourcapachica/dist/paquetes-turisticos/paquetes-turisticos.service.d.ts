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
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteId: number;
        }[];
        emprendimiento: {
            estado: string;
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        servicios: ({
            servicio: {
                estado: string;
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
        estado: string;
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            estado: string;
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        servicios: ({
            servicio: {
                estado: string;
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
        estado: string;
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteId: number;
        }[];
        emprendimiento: {
            estado: string;
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        servicios: ({
            servicio: {
                estado: string;
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
        estado: string;
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    findByEmprendimiento(emprendimientoId: number): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteId: number;
        }[];
        emprendimiento: {
            estado: string;
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        servicios: ({
            servicio: {
                estado: string;
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
        estado: string;
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }[]>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteId: number;
        }[];
        emprendimiento: {
            estado: string;
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        servicios: ({
            servicio: {
                estado: string;
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
        estado: string;
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    remove(id: number): Promise<{
        estado: string;
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    updateEstado(id: number, estado: string): Promise<{
        emprendimiento: {
            estado: string;
            id: number;
            nombre: string;
            descripcion: string | null;
            createdAt: Date;
            updatedAt: Date;
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
        servicios: ({
            servicio: {
                estado: string;
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
    } & {
        estado: string;
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, userId: number): Promise<{
        servicios: ({
            servicio: {
                estado: string;
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
    } & {
        estado: string;
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    removeServicio(id: number, servicioId: number, userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
        servicioId: number;
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
                fechaInicio: Date;
                fechaFin: Date;
                cuposDisponibles: number;
                cuposMaximos: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                notas: string | null;
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                paqueteId: number;
            }[];
            emprendimiento: {
                estado: string;
                id: number;
                nombre: string;
                descripcion: string | null;
                createdAt: Date;
                updatedAt: Date;
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
            servicios: ({
                servicio: {
                    estado: string;
                    id: number;
                    nombre: string;
                    descripcion: string | null;
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
                paqueteTuristicoId: number;
                servicioId: number;
                orden: number;
            })[];
            estado: string;
            id: number;
            nombre: string;
            descripcion: string;
            precio: number;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
        };
        reservas: ({
            itinerarios: ({
                servicio: {
                    estado: string;
                    id: number;
                    nombre: string;
                    descripcion: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                };
            } & {
                notas: string | null;
                id: number;
                descripcion: string;
                createdAt: Date;
                updatedAt: Date;
                servicioId: number | null;
                hora: Date | null;
                fecha: Date;
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
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
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
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            servicioId: number;
            calificacion: number;
            comentario: string | null;
        })[];
    }>;
    createDisponibilidad(id: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
    }[]>;
    getDisponibilidad(paqueteId: number): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
    }[]>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
    }>;
}
