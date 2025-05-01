import { IsString, IsOptional, IsEnum, IsArray, IsUrl, MaxLength, IsNumber } from 'class-validator';

class ImageDto {
  @IsUrl()
  url: string;
}

export class CreatePaqueteTuristicoDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo'])
  @MaxLength(20)
  estado?: string;

  @IsNumber()
  emprendimientoId: number;

  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 