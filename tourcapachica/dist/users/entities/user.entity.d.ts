export declare class UserEntity {
    id: number;
    personaId: number;
    email: string;
    emailVerified: boolean;
    estaActivo: boolean;
    ultimoAcceso?: Date;
    preferencias: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
    persona?: any;
    usuariosRoles?: any[];
}
