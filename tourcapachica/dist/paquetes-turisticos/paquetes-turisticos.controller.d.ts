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
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
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
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }[]>;
    findByEmprendimiento(emprendimientoId: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
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
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
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
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    update(id: string, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
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
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    updateEstado(id: string, estado: string): Promise<{
        emprendimiento: {
            id: number;
            usuarioId: number;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            estado: string;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
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
            emprendimiento: {
                id: number;
                usuarioId: number;
                nombre: string;
                descripcion: string | null;
                tipo: string;
                direccion: string | null;
                coordenadas: string | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                estado: string;
                fechaAprobacion: Date | null;
                createdAt: Date;
                updatedAt: Date;
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
                usuarioId: number;
                createdAt: Date;
                updatedAt: Date;
            };
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
                servicioId: number | null;
                notas: string | null;
                hora: Date | null;
                fecha: Date;
                tipoEvento: string;
                duracion: number | null;
                reservaId: number;
            })[];
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
            usuarioId: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
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
