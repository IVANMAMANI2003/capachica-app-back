import { IsString, IsOptional, IsEnum, IsArray, IsUrl, MaxLength } from 'class-validator';

class ImageDto {
  @IsUrl()
  url: string;
}

export class CreateSliderDto {
  @IsString()
  @MaxLength(100)
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  @IsEnum(['activo', 'inactivo'])
  @MaxLength(20)
  estado?: string;

  @IsArray()
  @IsOptional()
  imagenes?: ImageDto[];
} 