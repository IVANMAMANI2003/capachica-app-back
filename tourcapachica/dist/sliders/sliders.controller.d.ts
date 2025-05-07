import { SlidersService } from './sliders.service';
import { CreateSliderDto } from './dto/create-slider.dto';
import { UpdateSliderDto } from './dto/update-slider.dto';
export declare class SlidersController {
    private readonly slidersService;
    constructor(slidersService: SlidersService);
    create(createSliderDto: CreateSliderDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }>;
    findAll(): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }[]>;
    findOne(id: string): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }>;
    update(id: string, updateSliderDto: UpdateSliderDto): Promise<{
        imagenes: {
            id: number;
            url: string;
        }[];
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        estado: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        nombre: string;
    }>;
}
