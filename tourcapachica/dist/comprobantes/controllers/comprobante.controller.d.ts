import { ComprobanteService } from '../services/comprobante.service';
import { ComprobanteDto } from '../dto/comprobante.dto';
export declare class ComprobanteController {
    private readonly comprobanteService;
    constructor(comprobanteService: ComprobanteService);
    create(comprobanteDto: ComprobanteDto): import("../entities/comprobante.entity").Comprobante;
    findAll(): import("../entities/comprobante.entity").Comprobante[];
    findOne(id: string): import("../entities/comprobante.entity").Comprobante;
    update(id: string, comprobanteDto: ComprobanteDto): import("../entities/comprobante.entity").Comprobante;
    remove(id: string): void;
}
