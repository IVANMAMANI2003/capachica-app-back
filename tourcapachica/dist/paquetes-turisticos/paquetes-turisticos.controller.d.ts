import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
export declare class PaquetesTuristicosController {
    private readonly paquetesTuristicosService;
    constructor(paquetesTuristicosService: PaquetesTuristicosService);
    createDisponibilidad(id: number, createDisponibilidadDto: CreateDisponibilidadDto): Promise<{
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
    getDisponibilidadesPaquete(id: number): Promise<{
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
    addServicios(id: string, addServiciosDto: AddServiciosDto, req: any): Promise<{
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
    removeServicio(id: string, servicioId: string, req: any): Promise<{
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
    getEstadisticas(id: string, req: any): Promise<import("./dto/estadisticas.dto").EstadisticasPaqueteDto>;
    exportarDatos(id: string, req: any): Promise<{
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
