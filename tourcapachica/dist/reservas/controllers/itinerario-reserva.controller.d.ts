import { ItinerarioReservaService } from '../services/itinerario-reserva.service';
import { CreateItinerarioReservaDto } from '../dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from '../dto/update-itinerario-reserva.dto';
declare class CreateItinerariosForReservaDto {
    reservaId: number;
    itinerarios: CreateItinerarioReservaDto[];
}
export declare class ItinerarioReservaController {
    private readonly itinerarioReservaService;
    constructor(itinerarioReservaService: ItinerarioReservaService);
    createMany(dto: CreateItinerariosForReservaDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateItinerarioReservaDto: UpdateItinerarioReservaDto): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
export {};
