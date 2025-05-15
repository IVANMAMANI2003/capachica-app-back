import { PrismaService } from '@/prisma/prisma.service';
export declare class ItinerarioReservaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createForReserva(reservaId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
    update(id: number, updateItinerarioReservaDto: any): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
    remove(id: number): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
