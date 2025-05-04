import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServicioDto } from './create-servicio.dto';

export class UpdateServicioDto extends PartialType(CreateServicioDto) {
  @ApiProperty({
    description: 'URL de la imagen del servicio',
    example: 'https://example.com/nueva-imagen.jpg',
    required: false,
  })
  imagenUrl?: string;
} 