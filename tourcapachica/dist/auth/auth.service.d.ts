import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        access_token: string;
        usuario: {
            id: number;
            email: string;
            nombre: string;
            apellidos: string;
            roles: string[];
        };
    }>;
    refreshToken(user: any): Promise<{
        access_token: string;
    }>;
}
