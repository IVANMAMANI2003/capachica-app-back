import { PrismaService } from '../prisma/prisma.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadisticasPaqueteDto } from './dto/estadisticas.dto';
export declare class PaquetesTuristicosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto): Promise<{
        servicios: ({
            servicio: {
                id: number;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        precio: number;
    }>;
    findAll(): Promise<({
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            fechaInicio: Date;
            fechaFin: Date;
            notas: string | null;
            paqueteId: number;
            cuposMaximos: number;
        }[];
        servicios: ({
            servicio: {
                id: number;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        precio: number;
    })[]>;
    findOne(id: number): Promise<{
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            fechaInicio: Date;
            fechaFin: Date;
            notas: string | null;
            paqueteId: number;
            cuposMaximos: number;
        }[];
        servicios: ({
            servicio: {
                id: number;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        precio: number;
    }>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        servicios: ({
            servicio: {
                id: number;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        precio: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, userId: number): Promise<{
        servicios: ({
            servicio: {
                id: number;
                tipoServicioId: number;
                nombre: string;
                descripcion: string | null;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                estado: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        precio: number;
    }>;
    removeServicio(id: number, servicioId: number, userId: number): Promise<{
        id: number;
        servicioId: number;
        orden: number;
        paqueteTuristicoId: number;
    }>;
    getEstadisticas(id: number, userId: number): Promise<EstadisticasPaqueteDto>;
    exportarDatos(id: number, userId: number): Promise<{
        paquete: {
            disponibilidad: {
                id: number;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                cuposDisponibles: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                fechaInicio: Date;
                fechaFin: Date;
                notas: string | null;
                paqueteId: number;
                cuposMaximos: number;
            }[];
            servicios: ({
                servicio: {
                    id: number;
                    tipoServicioId: number;
                    nombre: string;
                    descripcion: string | null;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    estado: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: number;
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
            precio: number;
        };
        reservas: ({
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
            itinerarios: ({
                servicio: {
                    id: number;
                    tipoServicioId: number;
                    nombre: string;
                    descripcion: string | null;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    estado: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: number;
                descripcion: string;
                createdAt: Date;
                updatedAt: Date;
                servicioId: number | null;
                fecha: Date;
                hora: Date | null;
                notas: string | null;
                tipoEvento: string;
                duracion: number | null;
                reservaId: number;
            })[];
        } & {
            id: number;
            moneda: string;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            fechaInicio: Date;
            hora: string | null;
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
                emailVerified: boolean;
                estaActivo: boolean;
                ultimoAcceso: Date | null;
                preferencias: import(".prisma/client/runtime/library").JsonValue;
            };
        } & {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
            tipoObjeto: string;
            calificacion: number;
            comentario: string | null;
            fechaExperiencia: Date | null;
            respuestaOwner: string | null;
            fechaRespuesta: Date | null;
        })[];
    }>;
    createDisponibilidad(id: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        paqueteId: number;
        cuposMaximos: number;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        paqueteId: number;
        cuposMaximos: number;
    }[]>;
    getDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        paqueteId: number;
        cuposMaximos: number;
    }>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        paqueteId: number;
        cuposMaximos: number;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        fechaInicio: Date;
        fechaFin: Date;
        notas: string | null;
        paqueteId: number;
        cuposMaximos: number;
    }>;
}
