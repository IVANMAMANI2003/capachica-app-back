import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        usuario: {
            id: number;
            email: string;
            nombre: string;
            apellidos: string;
            roles: string[];
        };
    }>;
    refreshToken(refreshToken: string): Promise<{
        access_token: string;
    }>;
}
