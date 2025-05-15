import { PrismaService } from '@/prisma/prisma.service';
import { CreateItinerarioReservaDto } from '../dto/create-itinerario-reserva.dto';
export declare class ItinerarioReservaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createMany(reservaId: number, itinerarios: CreateItinerarioReservaDto[]): Promise<import(".prisma/client").Prisma.BatchPayload>;
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
    update(id: number, updateItinerarioReservaDto: any): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
    remove(id: number): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
