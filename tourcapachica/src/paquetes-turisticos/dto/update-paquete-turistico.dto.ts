import { PartialType } from '@nestjs/swagger';
import { CreatePaqueteTuristicoDto } from './create-paquete-turistico.dto';

export class UpdatePaqueteTuristicoDto extends PartialType(CreatePaqueteTuristicoDto) {} 