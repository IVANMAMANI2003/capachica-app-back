import { SlidersService } from './sliders.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
export declare class SlidersController {
    private readonly slidersService;
    constructor(slidersService: SlidersService);
    create(createSliderDto: CreateSliderDto): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: string, updateSliderDto: UpdateSliderDto): Promise<{
        imagenes: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            url: string;
            imageableId: number;
            imageableType: string;
        }[];
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        descripcion: string | null;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
