import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
export declare class PaquetesTuristicosController {
    private readonly paquetesTuristicosService;
    constructor(paquetesTuristicosService: PaquetesTuristicosService);
    create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    findAll(): Promise<({
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            cuposMaximos: number;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
        }[];
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
    } & {
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    })[]>;
    findOne(id: number): Promise<{
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            cuposMaximos: number;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
        }[];
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
    } & {
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
    } & {
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, req: any): Promise<{
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
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
            paqueteTuristicoId: number;
            servicioId: number;
            orden: number;
        })[];
    } & {
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    removeServicio(id: number, servicioId: number, req: any): Promise<{
        id: number;
        paqueteTuristicoId: number;
        servicioId: number;
        orden: number;
    }>;
    getEstadisticas(id: number, req: any): Promise<import("./dto/estadisticas.dto").EstadisticasPaqueteDto>;
    exportarDatos(id: number, req: any): Promise<{
        paquete: {
            disponibilidad: {
                id: number;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                cuposMaximos: number;
                paqueteId: number;
                fechaInicio: Date;
                fechaFin: Date;
                cuposDisponibles: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                notas: string | null;
            }[];
            servicios: ({
                servicio: {
                    id: number;
                    nombre: string;
                    descripcion: string | null;
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
                paqueteTuristicoId: number;
                servicioId: number;
                orden: number;
            })[];
        } & {
            id: number;
            nombre: string;
            descripcion: string;
            precio: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            emprendimientoId: number;
        };
        reservas: ({
            itinerarios: ({
                servicio: {
                    id: number;
                    nombre: string;
                    descripcion: string | null;
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
                descripcion: string;
                createdAt: Date;
                updatedAt: Date;
                duracion: number | null;
                servicioId: number | null;
                notas: string | null;
                hora: Date | null;
                fecha: Date;
                tipoEvento: string;
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
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
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
        cuposMaximos: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }[]>;
    getDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        cuposMaximos: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
}
