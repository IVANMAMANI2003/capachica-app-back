import { CreateSliderDto } from './create-slider.dto';
import { ImageDto } from './create-slider.dto';
declare const UpdateSliderDto_base: import("@nestjs/common").Type<Partial<CreateSliderDto>>;
export declare class UpdateSliderDto extends UpdateSliderDto_base {
    nombre?: string;
    descripcion?: string;
    estado?: string;
    imagenes?: ImageDto[];
}
export {};
