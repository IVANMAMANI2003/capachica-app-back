import { PartialType } from '@nestjs/mapped-types';
import { CreatePaqueteTuristicoDto } from './create-paquete-turistico.dto';

export class UpdatePaqueteTuristicoDto extends PartialType(CreatePaqueteTuristicoDto) {} 