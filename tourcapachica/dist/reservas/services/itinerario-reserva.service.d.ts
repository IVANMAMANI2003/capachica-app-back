import { PrismaService } from '@/prisma/prisma.service';
import { CreateItinerarioReservaDto } from '../dto/create-itinerario-reserva.dto';
export declare class ItinerarioReservaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createMany(reservaId: number, itinerarios: CreateItinerarioReservaDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
    update(id: number, updateItinerarioReservaDto: any): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
    remove(id: number): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
