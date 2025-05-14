export class ComprobanteDto {
  readonly paymentId: number;
  readonly userId: number;
  readonly reservationCode: string;
  readonly reservationType: string;
  readonly reservationDate: Date;
  readonly startDate: Date;
  readonly endDate: Date | null;
  readonly totalAmount: number;
  readonly currency: string;
  readonly paymentMethod: string | null;
}