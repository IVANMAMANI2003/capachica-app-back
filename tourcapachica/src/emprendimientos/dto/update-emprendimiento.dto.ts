import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEmprendimientoDto } from './create-emprendimiento.dto';
import { ImageDto } from './create-emprendimiento.dto';

export class UpdateEmprendimientoDto extends PartialType(CreateEmprendimientoDto) {
  @ApiProperty({
    description: 'ID del usuario propietario del emprendimiento',
    example: 1,
    required: false,
    type: Number
  })
  usuarioId?: number;

  @ApiProperty({
    description: 'Nombre del emprendimiento',
    example: 'Restaurante La Isla',
    required: false,
    maxLength: 200,
    type: String
  })
  nombre?: string;

  @ApiProperty({
    description: 'Descripción del emprendimiento',
    example: 'Restaurante especializado en comida local',
    required: false,
    type: String
  })
  descripcion?: string;

  @ApiProperty({
    description: 'Tipo de emprendimiento',
    example: 'restaurante',
    required: false,
    enum: ['restaurante', 'hospedaje', 'artesania', 'otro'],
    type: String
  })
  tipo?: string;

  @ApiProperty({
    description: 'Dirección del emprendimiento',
    example: 'Av. Principal 123, Capachica',
    required: false,
    type: String
  })
  direccion?: string;

  @ApiProperty({
    description: 'Coordenadas geográficas del emprendimiento',
    example: '-15.7667, -69.6833',
    required: false,
    type: String
  })
  coordenadas?: string;

  @ApiProperty({
    description: 'Teléfono de contacto',
    example: '+51 987654321',
    required: false,
    type: String
  })
  contactoTelefono?: string;

  @ApiProperty({
    description: 'Correo electrónico de contacto',
    example: 'contacto@restaurante.com',
    required: false,
    type: String
  })
  contactoEmail?: string;

  @ApiProperty({
    description: 'Sitio web del emprendimiento',
    example: 'https://restaurante.com',
    required: false,
    type: String
  })
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
  redesSociales?: string;

  @ApiProperty({
    description: 'Estado del emprendimiento',
    example: 'pendiente',
    required: false,
    enum: ['pendiente', 'aprobado', 'rechazado'],
    type: String
  })
  estado?: string;

  @ApiProperty({
    description: 'Fecha de aprobación del emprendimiento',
    example: '2024-03-20T00:00:00.000Z',
    required: false,
    type: Date
  })
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
  imagenes?: ImageDto[];
} 