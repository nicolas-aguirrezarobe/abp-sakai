
export interface CancelReservationDto {
  unitId: number;
  observation?: string;
  dateTime?: string;
}

export interface CreateReservationDto {
  unitId: number;
  customerId: number;
  realEstateId: number;
  sellerId?: string;
  dateTime?: string;
}
