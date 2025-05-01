import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEmail, IsUrl, IsObject, IsEnum, IsArray, IsPhoneNumber, IsJSON, MaxLength } from 'class-validator';

class ImageDto {
  @IsUrl()
  url: string;
}

export class CreateEmprendimientoDto {
  @ApiProperty({ description: 'Nombre del emprendimiento', example: 'Restaurante La Casona' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre: string;

  @ApiProperty({ description: 'Descripción detallada del emprendimiento', required: false })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiProperty({ description: 'Tipo de emprendimiento', example: 'restaurante' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  tipo: string;

  @ApiProperty({ description: 'Dirección física del emprendimiento', required: false })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiProperty({ description: 'Coordenadas geográficas del emprendimiento', required: false })
  @IsString()
  @IsOptional()
  coordenadas?: string;

  @ApiProperty({ description: 'Teléfono de contacto', required: false })
  @IsPhoneNumber()
  @IsOptional()
  @MaxLength(20)
  contactoTelefono?: string;

  @ApiProperty({ description: 'Email de contacto', required: false })
  @IsEmail()
  @IsOptional()
  @MaxLength(100)
  contactoEmail?: string;

  @ApiProperty({ description: 'URL del sitio web', required: false })
  @IsUrl()
  @IsOptional()
  @MaxLength(200)
  sitioWeb?: string;

  @ApiProperty({ description: 'Redes sociales del emprendimiento', required: false })
  @IsJSON()
  @IsOptional()
  redesSociales?: any;

  @ApiProperty({ description: 'Estado del emprendimiento', example: 'pendiente' })
  @IsString()
  @IsOptional()
  @IsEnum(['pendiente', 'aprobado', 'rechazado'])
  @MaxLength(20)
  estado?: string;

  @ApiProperty({ description: 'Imágenes del emprendimiento', required: false })
  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 