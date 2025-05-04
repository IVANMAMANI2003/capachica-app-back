import { SlidersService } from './sliders.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
export declare class SlidersController {
    private readonly slidersService;
    constructor(slidersService: SlidersService);
    create(createSliderDto: CreateSliderDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        id: number;
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        id: number;
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        id: number;
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateSliderDto: UpdateSliderDto): Promise<{
        imagenes: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        id: number;
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
