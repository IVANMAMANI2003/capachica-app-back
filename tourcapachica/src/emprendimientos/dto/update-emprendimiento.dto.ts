import { PartialType } from '@nestjs/swagger';
import { CreateEmprendimientoDto } from './create-emprendimiento.dto';

export class UpdateEmprendimientoDto extends PartialType(CreateEmprendimientoDto) {} 