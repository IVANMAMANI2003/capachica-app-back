import { ItinerarioReservaService } from '../services/itinerario-reserva.service';
import { UpdateItinerarioReservaDto } from '../dto/update-itinerario-reserva.dto';
import { CreateItinerariosForReservaDto } from '../dto/create-itinerarios-for-reserva.dto';
export declare class ItinerarioReservaController {
    private readonly itinerarioReservaService;
    constructor(itinerarioReservaService: ItinerarioReservaService);
    createMany(dto: CreateItinerariosForReservaDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        reservaId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        reservaId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, null, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateItinerarioReservaDto: UpdateItinerarioReservaDto): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        reservaId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        descripcion: string | null;
        createdAt: Date;
        updatedAt: Date;
        servicioId: number;
        reservaId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
