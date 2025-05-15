import { ApiProperty } from '@nestjs/swagger';


export class Reserva {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  usuarioId: number;

  @ApiProperty({ example: 'ABC123' })
  codigoReserva: string;

  @ApiProperty({ example: 'tipo_reserva' })
  tipoReserva: string;

  @ApiProperty({ example: '2023-10-01T00:00:00Z' })
  fechaReserva: Date;

  @ApiProperty({ example: '2023-10-01T00:00:00Z' })
  fechaInicio: Date;

  @ApiProperty({ example: '2023-10-02T00:00:00Z' })
  fechaFin: Date | null;

  @ApiProperty({ example: 2 })
  cantidadPersonas: number;

  @ApiProperty({ example: 100.00 })
  precioTotal: number;

  @ApiProperty({ example: 'PEN' })
  moneda: string;

  @ApiProperty({ example: 'pendiente' })
  estado: string;

  @ApiProperty({ example: 'Notas adicionales' })
  notas: string | null;

  @ApiProperty({ example: 'Motivo de cancelación' })
  motivoCancelacion: string | null;

  @ApiProperty({ example: '2023-10-01T00:00:00Z' })
  fechaCancelacion: Date | null;

}