import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEmprendimientoDto, ImageDto } from './create-emprendimiento.dto';
import {IsOptional, IsString, IsNumber, IsEnum, IsEmail, IsUrl, IsObject, ValidateNested, IsArray
} from 'class-validator';
import { Type } from 'class-transformer';


export class UpdateEmprendimientoDto extends PartialType(CreateEmprendimientoDto) {
  @ApiProperty({ description: 'ID del usuario propietario', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  usuarioId?: number;

  @ApiProperty({ description: 'ID adicional del lugar turístico', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  lugarTuristicoIdId?: number;

  @ApiProperty({ description: 'Nombre del emprendimiento', example: 'Restaurante La Isla', required: false })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiProperty({ description: 'Descripción del emprendimiento', example: 'Comida local', required: false })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiProperty({
    description: 'Tipo de emprendimiento',
    example: 'Turismo',
    required: false,
  })
  @IsOptional()
  tipo?: string;

  @ApiProperty({ description: 'Dirección', example: 'Av. Principal 123', required: false })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({ description: 'Latitud', example: -15.7667, required: false })
  @IsOptional()
  @IsNumber()
  latitud?: number;

  @ApiProperty({ description: 'Longitud', example: -69.6833, required: false })
  @IsOptional()
  @IsNumber()
  longitud?: number;

  @ApiProperty({ description: 'Teléfono de contacto', example: '+51 987654321', required: false })
  @IsOptional()
  @IsString()
  contactoTelefono?: string;

  @ApiProperty({ description: 'Correo electrónico', example: 'correo@ejemplo.com', required: false })
  @IsOptional()
  @IsEmail()
  contactoEmail?: string;

  @ApiProperty({ description: 'Sitio web', example: 'https://miweb.com', required: false })
  @IsOptional()
  @IsUrl()
  sitioWeb?: string;

  @ApiProperty({
    description: 'Redes sociales como objeto clave:valor',
    example: {
      facebook: 'https://facebook.com/ejemplo',
      instagram: 'https://instagram.com/ejemplo'
    },
    required: false,
    type: 'object'
  })
  @IsOptional()
  @IsObject()
  redesSociales?: { [key: string]: string };

  @ApiProperty({
    description: 'Estado del emprendimiento',
    example: 'Activo',
    required: false,
    enum: ['Activo', 'Inactivo', 'Suspendido', 'Eliminado',  'Rechazado']
  })
  @IsOptional()
  @IsEnum(['Activo', 'Inactivo', 'Suspendido', 'Eliminado',  'Rechazado'])
  estado?: string;

  @ApiProperty({
    description: 'Fecha de aprobación',
    example: '2024-03-20T00:00:00.000Z',
    required: false,
    type: Date
  })
  @IsOptional()
  fechaAprobacion?: Date;

  @ApiProperty({
    description: 'Lista de imágenes',
    type: [ImageDto],
    required: false
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  imagenes?: ImageDto[];
}
