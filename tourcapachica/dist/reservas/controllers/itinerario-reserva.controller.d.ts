import { ItinerarioReservaService } from '../services/itinerario-reserva.service';
import { UpdateItinerarioReservaDto } from '../dto/update-itinerario-reserva.dto';
import { CreateItinerariosForReservaDto } from '../dto/create-itinerarios-for-reserva.dto';
export declare class ItinerarioReservaController {
    private readonly itinerarioReservaService;
    constructor(itinerarioReservaService: ItinerarioReservaService);
    createMany(dto: CreateItinerariosForReservaDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        reservaId: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        reservaId: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, null, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateItinerarioReservaDto: UpdateItinerarioReservaDto): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        reservaId: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        reservaId: number;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
