import { PaquetesTuristicosService } from './paquetes-turisticos.service';
import { CreateDisponibilidadDto } from './dto/create-disponibilidad.dto';
import { UpdateDisponibilidadDto } from './dto/update-disponibilidad.dto';
import { CreatePaqueteTuristicoDto } from './dto/create-paquete-turistico.dto';
import { UpdatePaqueteTuristicoDto } from './dto/update-paquete-turistico.dto';
import { AddServiciosDto } from './dto/add-servicios.dto';
import { EstadoPaquete } from './enums/estado-paquete.enum';
import { CreateFavoritoDto } from './dto/create-favorito-paquete.dto';
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
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
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
                latitud: number | null;
                longitud: number | null;
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
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
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
                latitud: number | null;
                longitud: number | null;
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
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    findByEmprendimiento(emprendimientoId: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
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
                latitud: number | null;
                longitud: number | null;
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
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
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
                latitud: number | null;
                longitud: number | null;
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
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: string, updatePaqueteTuristicoDto: UpdatePaqueteTuristicoDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
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
                latitud: number | null;
                longitud: number | null;
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
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    updateEstado(id: string, body: UpdateEstadoDto): Promise<{
        emprendimiento: {
            id: number;
            usuarioId: number;
            lugarTuristicoId: number | null;
            nombre: string;
            descripcion: string | null;
            tipo: string;
            direccion: string | null;
            latitud: number | null;
            longitud: number | null;
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
                latitud: number | null;
                longitud: number | null;
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
        precio: import(".prisma/client/runtime/library").Decimal | null;
    }>;
    addServicios(id: number, addServiciosDto: AddServiciosDto, req: any): Promise<{
        servicios: ({
            servicio: {
                id: number;
                nombre: string;
                descripcion: string | null;
                latitud: number | null;
                longitud: number | null;
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
        precio: import(".prisma/client/runtime/library").Decimal | null;
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
                lugarTuristicoId: number | null;
                nombre: string;
                descripcion: string | null;
                tipo: string;
                direccion: string | null;
                latitud: number | null;
                longitud: number | null;
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
                    latitud: number | null;
                    longitud: number | null;
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
            precio: import(".prisma/client/runtime/library").Decimal | null;
        };
        reservas: ({
            usuario: {
                persona: {
                    id: number;
                    nombre: string;
                    direccion: string | null;
                    createdAt: Date;
                    updatedAt: Date;
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
                emailVerified: boolean | null;
                estaActivo: boolean | null;
                ultimoAcceso: Date | null;
                preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            };
            itinerarios: ({
                servicio: {
                    id: number;
                    nombre: string;
                    descripcion: string | null;
                    latitud: number | null;
                    longitud: number | null;
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
                fecha: Date;
                horarioCierre: Date | null;
                tipoEvento: string;
                duracion: number | null;
                reservaId: number;
            })[];
        } & {
            id: number;
            usuarioId: number;
            estado: string;
            createdAt: Date;
            updatedAt: Date;
            fechaInicio: Date;
            fechaFin: Date | null;
            notas: string | null;
            moneda: string;
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
                emailVerified: boolean | null;
                estaActivo: boolean | null;
                ultimoAcceso: Date | null;
                preferencias: import(".prisma/client/runtime/library").JsonValue | null;
            };
        } & {
            id: number;
            usuarioId: number | null;
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
    marcarFavorito(createFavoritoDto: CreateFavoritoDto): Promise<{
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }>;
    desmarcarFavorito(id: number): Promise<void>;
    getTopFavoritos(): Promise<({
        favoritosPaqueteTuristico: {
            id: number;
            usuarioId: number;
            createdAt: Date;
            updatedAt: Date;
            paqueteTuristicoId: number;
        }[];
    } & {
        id: number;
        nombre: string;
        descripcion: string;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        emprendimientoId: number;
        precio: import(".prisma/client/runtime/library").Decimal | null;
    })[]>;
    getFavoritos(): Promise<{
        id: number;
        usuarioId: number;
        createdAt: Date;
        updatedAt: Date;
        paqueteTuristicoId: number;
    }[]>;
}
export {};
