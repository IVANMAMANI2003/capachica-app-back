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
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
        }[];
        emprendimiento: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
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
            createdAt: Date;
            updatedAt: Date;
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
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
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
            createdAt: Date;
            updatedAt: Date;
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
    }[]>;
    findByEmprendimiento(emprendimientoId: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
        }[];
        emprendimiento: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
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
            createdAt: Date;
            updatedAt: Date;
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
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
        }[];
        emprendimiento: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
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
            createdAt: Date;
            updatedAt: Date;
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
    update(id: string, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        disponibilidad: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
        }[];
        emprendimiento: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
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
            createdAt: Date;
            updatedAt: Date;
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
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
    }>;
    updateEstado(id: string, body: UpdateEstadoDto): Promise<{
        emprendimiento: {
            id: number;
            nombre: string;
            descripcion: string | null;
            estado: string;
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
            createdAt: Date;
            updatedAt: Date;
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
            createdAt: Date;
            updatedAt: Date;
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
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
        servicioId: number;
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
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                paqueteId: number;
                fechaInicio: Date;
                fechaFin: Date;
                cuposDisponibles: number;
                cuposMaximos: number;
                precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
                notas: string | null;
            }[];
            emprendimiento: {
                id: number;
                nombre: string;
                descripcion: string | null;
                estado: string;
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
                createdAt: Date;
                updatedAt: Date;
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
                notas: string | null;
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
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
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
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            usuarioId: number;
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
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    getDisponibilidadesPaquete(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }[]>;
    getDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }[]>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
    }>;
}
export {};
