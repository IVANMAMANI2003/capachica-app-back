import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        usuario: {
            id: number;
            email: string;
            nombre: string;
            apellidos: string;
            roles: string[];
            emprendimientoId: number;
        };
    }>;
    refreshToken(user: any): Promise<{
        access_token: string;
    }>;
}
