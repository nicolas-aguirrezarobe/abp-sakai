import type { UnitTypeDto, UnitTypeRequestDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitTypeService {
  apiName = 'Default';

  create = (input: UnitTypeDto) =>
    this.restService.request<any, UnitTypeDto>({
      method: 'POST',
      url: '/api/app/unit-type',
      body: input,
    },
    { apiName: this.apiName });

  createUnitType = (input: UnitTypeDto) =>
    this.restService.request<any, UnitTypeDto>({
      method: 'POST',
      url: '/api/app/unit-type/unit-type',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/unit-type/${id}`,
    },
    { apiName: this.apiName });

  get = (id: number) =>
    this.restService.request<any, UnitTypeDto>({
      method: 'GET',
      url: `/api/app/unit-type/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: UnitTypeRequestDto) =>
    this.restService.request<any, PagedResultDto<UnitTypeDto>>({
      method: 'GET',
      url: '/api/app/unit-type',
      params: { filters: input.filters, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: number, input: UnitTypeDto) =>
    this.restService.request<any, UnitTypeDto>({
      method: 'PUT',
      url: `/api/app/unit-type/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
