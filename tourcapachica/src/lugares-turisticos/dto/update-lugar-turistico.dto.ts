import { PartialType } from '@nestjs/swagger';
import { CreateLugarTuristicoDto } from './create-lugar-turistico.dto';

export class UpdateLugarTuristicoDto extends PartialType(CreateLugarTuristicoDto) {} 