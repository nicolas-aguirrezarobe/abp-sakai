import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CancelReservationDto, CreateReservationDto } from '../reservations/dtos/models';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  apiName = 'Default';

  cancelByInput = (input: CancelReservationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/reservation/cancel',
      body: input,
    },
    { apiName: this.apiName });

  createByInput = (input: CreateReservationDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/reservation',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
