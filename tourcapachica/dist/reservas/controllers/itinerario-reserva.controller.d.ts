import { ItinerarioReservaService } from '../services/itinerario-reserva.service';
import { CreateItinerarioReservaDto } from '../dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from '../dto/update-itinerario-reserva.dto';
export declare class ItinerarioReservaController {
    private readonly itinerarioReservaService;
    constructor(itinerarioReservaService: ItinerarioReservaService);
    create(CreateItinerarioReservaDto: CreateItinerarioReservaDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
        descripcion: string | null;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
        descripcion: string | null;
    }, null, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateItinerarioReservaDto: UpdateItinerarioReservaDto): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
        descripcion: string | null;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
        descripcion: string | null;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
