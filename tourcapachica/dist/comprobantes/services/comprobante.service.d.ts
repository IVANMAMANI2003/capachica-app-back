import { ComprobanteDto } from '../dto/comprobante.dto';
import { Comprobante } from '../entities/comprobante.entity';
export declare class ComprobanteService {
    private comprobantes;
    create(comprobanteDto: ComprobanteDto): Comprobante;
    findAll(): Comprobante[];
    findOne(id: number): Comprobante | undefined;
    update(id: number, updateComprobanteDto: Partial<ComprobanteDto>): Comprobante | undefined;
    remove(id: number): void;
}
