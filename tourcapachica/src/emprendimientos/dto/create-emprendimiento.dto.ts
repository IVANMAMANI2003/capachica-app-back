import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber, IsUrl, IsEnum, IsArray, MaxLength, IsEmail, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

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
    example: 'restaurante',
    required: true,
    enum: ['restaurante', 'hospedaje', 'artesania', 'otro'],
    type: String
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(['restaurante', 'hospedaje', 'artesania', 'otro'])
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
    description: 'Coordenadas geográficas del emprendimiento',
    example: '-15.7667, -69.6833',
    required: false,
    type: String
  })
  @IsString()
  @IsOptional()
  coordenadas?: string;

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
    description: 'Redes sociales del emprendimiento',
    example: {
      facebook: 'https://facebook.com/restaurante',
      instagram: 'https://instagram.com/restaurante'
    },
    required: false,
    type: Object
  })
  @IsString()
  @IsOptional()
  redesSociales?: string;

  @ApiProperty({
    description: 'Estado del emprendimiento',
    example: 'pendiente',
    default: 'pendiente',
    required: false,
    enum: ['pendiente', 'aprobado', 'rechazado'],
    type: String
  })
  @IsString()
  @IsOptional()
  @IsEnum(['pendiente', 'aprobado', 'rechazado'])
  estado?: string = 'pendiente';

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