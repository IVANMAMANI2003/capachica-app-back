import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
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
