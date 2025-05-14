export class Comprobante {
  id: number;
  paymentId: number;
  userId: number;
  reservationCode: string;
  reservationType: string;
  reservationDate: Date;
  startDate: Date;
  endDate: Date | null;
  totalAmount: number;
  currency: string;
  paymentMethod: string | null;
  createdAt: Date;
  updatedAt: Date;
}