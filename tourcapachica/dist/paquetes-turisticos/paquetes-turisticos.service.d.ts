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
    createDisponibilidad(paqueteId: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
        id: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateDisponibilidad(id: number, updateDisponibilidadDto: UpdateDisponibilidadDto): Promise<{
        id: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteDisponibilidad(id: number): Promise<{
        id: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getDisponibilidadesPaquete(paqueteId: number): Promise<{
        id: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getDisponibilidad(id: number): Promise<{
        id: number;
        paqueteId: number;
        fechaInicio: Date;
        fechaFin: Date;
        cuposDisponibles: number;
        cuposMaximos: number;
        precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
        notas: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createPaqueteTuristicoDto: CreatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
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
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        precio: number;
        emprendimientoId: number;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
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
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        precio: number;
        emprendimientoId: number;
    }[]>;
    findOne(id: number): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
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
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        precio: number;
        emprendimientoId: number;
    }>;
    update(id: number, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
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
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        precio: number;
        emprendimientoId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        precio: number;
        emprendimientoId: number;
    }>;
    verificarPropiedad(paqueteId: number, usuarioId: number): Promise<void>;
    addServicios(paqueteId: number, addServiciosDto: AddServiciosDto, usuarioId: number): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
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
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        precio: number;
        emprendimientoId: number;
    }>;
    removeServicio(paqueteId: number, servicioId: number, usuarioId: number): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        emprendimiento: {
            id: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string | null;
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
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
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
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        descripcion: string;
        precio: number;
        emprendimientoId: number;
    }>;
    getEstadisticas(paqueteId: number, usuarioId: number): Promise<EstadisticasPaqueteDto>;
    exportarDatos(paqueteId: number, usuarioId: number): Promise<{
        paquete: {
            imagenes: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                url: string;
                imageableId: number;
                imageableType: string;
            }[];
            emprendimiento: {
                id: number;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                nombre: string;
                descripcion: string | null;
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
                    estado: string;
                    createdAt: Date;
                    updatedAt: Date;
                    nombre: string;
                    descripcion: string | null;
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
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            nombre: string;
            descripcion: string;
            precio: number;
            emprendimientoId: number;
        };
        reservas: ({
            pagos: {
                id: number;
                estado: string;
                createdAt: Date;
                updatedAt: Date;
                moneda: string;
                reservaId: number;
                montoTotal: import(".prisma/client/runtime/library").Decimal;
                fechaPago: Date | null;
                datosMetodoPago: import(".prisma/client/runtime/library").JsonValue | null;
                metadata: import(".prisma/client/runtime/library").JsonValue | null;
            }[];
            turista: {
                usuario: {
                    persona: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        nombre: string;
                        direccion: string | null;
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
            notas: string | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            moneda: string;
            hora: string | null;
            turistaId: number;
            codigoReserva: string;
            tipoReserva: string;
            fechaReserva: Date;
            cantidadPersonas: number;
            precioTotal: import(".prisma/client/runtime/library").Decimal;
            metodoPago: string | null;
            datosPago: import(".prisma/client/runtime/library").JsonValue | null;
            motivoCancelacion: string | null;
            fechaCancelacion: Date | null;
        })[];
        disponibilidades: {
            id: number;
            paqueteId: number;
            fechaInicio: Date;
            fechaFin: Date;
            cuposDisponibles: number;
            cuposMaximos: number;
            precioEspecial: import(".prisma/client/runtime/library").Decimal | null;
            notas: string | null;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    }>;
}
