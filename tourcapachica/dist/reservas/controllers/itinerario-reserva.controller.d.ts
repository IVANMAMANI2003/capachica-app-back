import { ItinerarioReservaService } from '../services/itinerario-reserva.service';
import { CreateItinerarioReservaDto } from '../dto/create-itinerario-reserva.dto';
import { UpdateItinerarioReservaDto } from '../dto/update-itinerario-reserva.dto';
export declare class ItinerarioReservaController {
    private readonly itinerarioReservaService;
    constructor(itinerarioReservaService: ItinerarioReservaService);
    create(CreateItinerarioReservaDto: CreateItinerarioReservaDto): Promise<import(".prisma/client").Prisma.BatchPayload>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        horaInicio: Date | null;
        horaFin: Date | null;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        horaInicio: Date | null;
        horaFin: Date | null;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, null, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateItinerarioReservaDto: UpdateItinerarioReservaDto): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        horaInicio: Date | null;
        horaFin: Date | null;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
        descripcion: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        reservaId: number;
        servicioId: number;
        fechaInicioActividad: Date;
        fechaFinActividad: Date;
        horaInicio: Date | null;
        horaFin: Date | null;
        lugarEncuentro: string;
        observaciones: string | null;
        tipoEvento: string;
    }, never, import(".prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
