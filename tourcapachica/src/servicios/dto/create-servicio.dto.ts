import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber, IsJSON, MaxLength, Min, IsUrl } from 'class-validator';

export class CreateServicioDto {
  @ApiProperty({
    description: 'ID del tipo de servicio',
    example: 1,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  tipoServicioId: number;

  @ApiProperty({
    description: 'Nombre del servicio',
    example: 'Hotel Capachica',
    required: true,
    maxLength: 200,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del servicio',
    example: 'Hotel con vista al lago Titicaca',
    required: false,
  })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({
    description: 'Precio base del servicio',
    example: 100.50,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  precioBase: number;

  @ApiProperty({
    description: 'Moneda del precio',
    example: 'PEN',
    required: true,
    maxLength: 3,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  moneda: string;

  @ApiProperty({
    description: 'Estado del servicio',
    example: 'activo',
    enum: ['activo', 'inactivo', 'pendiente'],
    default: 'activo',
    required: false,
    maxLength: 20,
  })
  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo', 'pendiente'])
  @MaxLength(20)
  estado?: string = 'activo';

  @ApiProperty({
    description: 'URL de la imagen del servicio',
    example: 'https://example.com/imagen.jpg',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  imagenUrl: string;

  @ApiProperty({
    description: 'Detalles del servicio en formato JSON',
    example: '{"duracion": "12 horas", "incluye": ["camas", "papayas"]}',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsJSON()
  detallesServicio?: string = '{}';
} 