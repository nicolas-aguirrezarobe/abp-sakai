import type { CreateUnitDto, UnitDto, UnitRequestDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  apiName = 'Default';

  create = (input: CreateUnitDto) =>
    this.restService.request<any, UnitDto>({
      method: 'POST',
      url: '/api/app/unit',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/unit/${id}`,
    },
    { apiName: this.apiName });

  get = (id: number) =>
    this.restService.request<any, UnitDto>({
      method: 'GET',
      url: `/api/app/unit/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: UnitRequestDto) =>
    this.restService.request<any, PagedResultDto<UnitDto>>({
      method: 'GET',
      url: '/api/app/unit',
      params: { filters: input.filters, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: number, input: CreateUnitDto) =>
    this.restService.request<any, UnitDto>({
      method: 'PUT',
      url: `/api/app/unit/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
