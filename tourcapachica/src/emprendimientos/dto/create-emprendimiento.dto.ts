import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEmail, IsUrl, IsObject, IsEnum, IsArray, IsPhoneNumber, IsJSON, MaxLength, IsInt } from 'class-validator';

class ImageDto {
  @IsUrl()
  url: string;
}

export class CreateEmprendimientoDto {
  @ApiProperty({
    description: 'ID del usuario emprendedor',
    example: 1,
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({
    description: 'Nombre del emprendimiento',
    example: 'Tour Capachica',
    required: true,
    maxLength: 200,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({
    description: 'Descripción del emprendimiento',
    example: 'Empresa de turismo en Capachica',
    required: false,
  })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({
    description: 'Tipo de emprendimiento',
    example: 'turismo',
    required: true,
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  tipo: string;

  @ApiProperty({
    description: 'Dirección del emprendimiento',
    example: 'Av. Principal 123, Capachica',
    required: false,
  })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiProperty({
    description: 'Coordenadas geográficas',
    example: '-15.8200,-70.0200',
    required: false,
  })
  @IsString()
  @IsOptional()
  coordenadas?: string;

  @ApiProperty({
    description: 'Teléfono de contacto',
    example: '+51987654321',
    required: false,
    maxLength: 20,
  })
  @IsString()
  @IsOptional()
  @IsPhoneNumber()
  @MaxLength(20)
  contactoTelefono?: string;

  @ApiProperty({
    description: 'Email de contacto',
    example: 'contacto@tourcapachica.com',
    required: false,
    maxLength: 100,
  })
  @IsString()
  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  contactoEmail?: string;

  @ApiProperty({
    description: 'Sitio web del emprendimiento',
    example: 'https://www.tourcapachica.com',
    required: false,
    maxLength: 200,
  })
  @IsString()
  @IsOptional()
  @IsUrl()
  @MaxLength(200)
  sitioWeb?: string;

  @ApiProperty({
    description: 'Redes sociales en formato JSON',
    example: '{"facebook": "https://facebook.com/tourcapachica", "instagram": "https://instagram.com/tourcapachica"}',
    required: false,
  })
  @IsString()
  @IsOptional()
  @IsJSON()
  redesSociales?: string;

  @ApiProperty({
    description: 'Estado del emprendimiento',
    example: 'pendiente',
    enum: ['pendiente', 'aprobado', 'rechazado'],
    default: 'pendiente',
    required: false,
    maxLength: 20,
  })
  @IsString()
  @IsOptional()
  @IsEnum(['pendiente', 'aprobado', 'rechazado'])
  @MaxLength(20)
  estado?: string = 'pendiente';

  @ApiProperty({ 
    description: 'Imágenes del emprendimiento', 
    required: false,
    type: [ImageDto]
  })
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 