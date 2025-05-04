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
                nombre: string;
                descripcion: string | null;
                estado: string;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        emprendimientoId: number;
        precio: number;
    }>;
    findAll(): Promise<({
        disponibilidad: {
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposMaximos: number;
            notas: string | null;
        }[];
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        emprendimientoId: number;
        precio: number;
    })[]>;
    findOne(id: number): Promise<{
        disponibilidad: {
            estado: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposMaximos: number;
            notas: string | null;
        }[];
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        emprendimientoId: number;
        precio: number;
    }>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        emprendimientoId: number;
        precio: number;
    }>;
    remove(id: number): Promise<{
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, userId: number): Promise<{
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                tipoServicioId: number;
                precioBase: import(".prisma/client/runtime/library").Decimal;
                moneda: string;
                detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                id: number;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
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
        emprendimientoId: number;
        precio: number;
    }>;
    removeServicio(id: number, servicioId: number, userId: number): Promise<{
        id: number;
        servicioId: number;
        paqueteTuristicoId: number;
        orden: number;
    }>;
    getEstadisticas(id: number, userId: number): Promise<EstadisticasPaqueteDto>;
    exportarDatos(id: number, userId: number): Promise<{
        paquete: {
            disponibilidad: {
                estado: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                cuposDisponibles: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                paqueteId: number;
                fechaInicio: Date;
                fechaFin: Date;
                cuposMaximos: number;
                notas: string | null;
            }[];
            servicios: ({
                servicio: {
                    nombre: string;
                    descripcion: string | null;
                    estado: string;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: number;
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
            emprendimientoId: number;
            precio: number;
        };
        reservas: ({
            itinerarios: ({
                servicio: {
                    nombre: string;
                    descripcion: string | null;
                    estado: string;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                descripcion: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                servicioId: number | null;
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
            estado: string;
            moneda: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date | null;
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
            estado: string;
            id: number;
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
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        notas: string | null;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        notas: string | null;
    }[]>;
    getDisponibilidad(id: number): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        notas: string | null;
    }>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        notas: string | null;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposMaximos: number;
        notas: string | null;
    }>;
}
