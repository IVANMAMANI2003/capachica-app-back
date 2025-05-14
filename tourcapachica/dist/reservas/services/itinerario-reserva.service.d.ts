import { PrismaService } from '@/prisma/prisma.service';
export declare class ItinerarioReservaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createForReserva(reservaId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
    update(id: number, updateItinerarioReservaDto: any): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
    remove(id: number): import(".prisma/client").Prisma.Prisma__ItinerarioReservaClient<{
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
