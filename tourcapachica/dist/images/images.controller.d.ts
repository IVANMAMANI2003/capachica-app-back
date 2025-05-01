import { ImagesService } from './images.service';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    uploadImage(file: Express.Multer.File, imageableType: string, imageableId: number): Promise<string>;
    deleteImage(id: number): Promise<void>;
}
