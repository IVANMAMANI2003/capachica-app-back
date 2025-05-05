import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
export declare class PaquetesTuristicosController {
    private readonly paquetesTuristicosService;
    constructor(paquetesTuristicosService: PaquetesTuristicosService);
    create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto, files: {
        files?: Express.Multer.File[];
    }): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            nombre: string;
            descripcion: string | null;
            estado: string;
            id: number;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
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
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
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
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
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
            nombre: string;
            descripcion: string | null;
            estado: string;
            id: number;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
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
        emprendimientoId: number;
        precio: number;
    }[]>;
    findByEmprendimiento(emprendimientoId: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            nombre: string;
            descripcion: string | null;
            estado: string;
            id: number;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
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
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
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
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
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
            nombre: string;
            descripcion: string | null;
            estado: string;
            id: number;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
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
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
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
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    update(id: string, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto, files: {
        files?: Express.Multer.File[];
    }): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            nombre: string;
            descripcion: string | null;
            estado: string;
            id: number;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
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
            servicioId: number;
            paqueteTuristicoId: number;
            orden: number;
        })[];
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
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        descripcion: string;
        estado: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: number;
    }>;
    updateEstado(id: string, estado: string): Promise<{
        emprendimiento: {
            nombre: string;
            descripcion: string | null;
            estado: string;
            id: number;
            usuarioId: number;
            tipo: string;
            direccion: string | null;
            coordenadas: string | null;
            contactoTelefono: string | null;
            contactoEmail: string | null;
            sitioWeb: string | null;
            redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
            fechaAprobacion: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
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
    addServicios(id: number, addServiciosDto: AddServiciosDto, req: any): Promise<{
        servicios: ({
            servicio: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
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
    removeServicio(id: number, servicioId: number, req: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
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
            emprendimiento: {
                nombre: string;
                descripcion: string | null;
                estado: string;
                id: number;
                usuarioId: number;
                tipo: string;
                direccion: string | null;
                coordenadas: string | null;
                contactoTelefono: string | null;
                contactoEmail: string | null;
                sitioWeb: string | null;
                redesSociales: import(".prisma/client/runtime/library").JsonValue | null;
                fechaAprobacion: Date | null;
                createdAt: Date;
                updatedAt: Date;
            };
            servicios: ({
                servicio: {
                    nombre: string;
                    descripcion: string | null;
                    estado: string;
                    id: number;
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
                servicioId: number;
                paqueteTuristicoId: number;
                orden: number;
            })[];
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
                    nombre: string;
                    descripcion: string | null;
                    estado: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    tipoServicioId: number;
                    precioBase: import(".prisma/client/runtime/library").Decimal;
                    moneda: string;
                    detallesServicio: import(".prisma/client/runtime/library").JsonValue;
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
        } & {
            estado: string;
            id: number;
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
            estado: string;
            id: number;
            usuarioId: number;
            createdAt: Date;
            updatedAt: Date;
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
    }[]>;
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
