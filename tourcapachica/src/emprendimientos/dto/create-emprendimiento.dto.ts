import { ApiProperty } from '@nestjs/swagger';
import {IsObject, IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsUrl, IsEnum, IsArray, MaxLength, IsEmail, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import {  } from 'class-validator';
export class ImageDto {
  @ApiProperty({
    description: 'URL de la imagen',
    example: 'https://example.com/image.jpg',
    required: true,
    type: String
  })
  @IsUrl()
  @IsNotEmpty()
  url: string;
}




export class CreateEmprendimientoDto {
  @ApiProperty({
    description: 'ID del usuario propietario del emprendimiento',
    example: 1,
    required: true,
    type: Number
  })
  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({
    description: 'ID del Lugarturistico en la que esta el emprendimiento',
    example: 1,
    required: true,
    type: Number
  })
  @IsNumber()
  @IsNotEmpty()
  lugarTuristicoId: number;
  

  @ApiProperty({
    description: 'Nombre del emprendimiento',
    example: 'Restaurante La Isla',
    required: true,
    maxLength: 200,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del emprendimiento',
    example: 'Restaurante especializado en comida local',
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({
    description: 'Tipo de emprendimiento',
    example: 'Turismo',
    required: true,
    type: String
  })
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @ApiProperty({
    description: 'Dirección del emprendimiento',
    example: 'Av. Principal 123, Capachica',
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiProperty({
    description: 'Latitud del emprendimiento',
    example: -15.7667,
    required: false,
    type: Number
  })
  @IsOptional()
  @IsNumber()
  latitud?: number;

  @ApiProperty({
    description: 'Longitud del emprendimiento',
    example: -69.6833,
    required: false,
    type: Number
  })
  @IsOptional()
  @IsNumber()
  longitud?: number;

  @ApiProperty({
    description: 'Teléfono de contacto',
    example: '+51 987654321',
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  contactoTelefono?: string;

  @ApiProperty({
    description: 'Correo electrónico de contacto',
    example: 'contacto@restaurante.com',
    required: false,
    type: String
  })
  @IsEmail()
  @IsOptional()
  contactoEmail?: string;

  @ApiProperty({
    description: 'Sitio web del emprendimiento',
    example: 'https://restaurante.com',
    required: false,
    type: String
  })
  @IsUrl()
  @IsOptional()
  sitioWeb?: string;

  @ApiProperty({
    description: 'Redes sociales del emprendimiento. Cada clave es el nombre de la red social y el valor es su URL.',
    example: {
      facebook: 'https://facebook.com/restaurante',
      instagram: 'https://instagram.com/restaurante',
      tiktok: 'https://tiktok.com/@restaurante',
      youtube: 'https://youtube.com/c/restaurante'
    },
    required: false,
    type: 'object',
    additionalProperties: { type: 'string' }
  })
  @IsOptional()
  @IsObject()
  redesSociales?: { [key: string]: string };

  @ApiProperty({
    description: 'Estado del emprendimiento',
    example: 'Activo',
    default: 'Activo',
    required: false,
    enum: ['Activo', 'Inactivo', 'Suspendido', 'Eliminado',  'Rechazado'],
    type: String
  })
  @IsString()
  @IsOptional()
  @IsEnum(['Activo', 'Inactivo', 'Suspendido', 'Eliminado',  'Rechazado'])
  estado?: string = 'Activo';

  @ApiProperty({
    description: 'Fecha de aprobación del emprendimiento',
    example: '2024-03-20T00:00:00.000Z',
    required: false,
    type: Date
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fechaAprobacion?: Date;

  @ApiProperty({
    description: 'Lista de imágenes del emprendimiento',
    type: [ImageDto],
    required: false,
    example: [
      {
        url: 'https://example.com/image1.jpg'
      },
      {
        url: 'https://example.com/image2.jpg'
      }
    ]
  })
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
}