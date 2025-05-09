import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadoPaquete } from './enums/estado-paquete.enum';
declare class UpdateEstadoDto {
    estado: EstadoPaquete;
}
export declare class PaquetesTuristicosController {
    private readonly paquetesTuristicosService;
    constructor(paquetesTuristicosService: PaquetesTuristicosService);
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
    findByEmprendimiento(emprendimientoId: string): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
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
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        estado: string;
        emprendimientoId: number;
        precio: number;
    }>;
    updateEstado(id: string, body: UpdateEstadoDto): Promise<{
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
    addServicios(id: number, addServiciosDto: AddServiciosDto, req: any): Promise<{
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
    removeServicio(id: number, servicioId: number, req: any): Promise<{
        id: number;
        servicioId: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
        orden: number;
    }>;
    getEstadisticas(id: number, req: any): Promise<import("./dto/estadisticas.dto").EstadisticasPaqueteDto>;
    exportarDatos(id: number, req: any): Promise<{
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
    getDisponibilidad(id: number): Promise<{
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
export {};
