import type { RealEstateDto, RealEstateRequestDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RealEstateService {
  apiName = 'Default';

  create = (input: RealEstateDto) =>
    this.restService.request<any, RealEstateDto>({
      method: 'POST',
      url: '/api/app/real-estate',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/real-estate/${id}`,
    },
    { apiName: this.apiName });

  get = (id: number) =>
    this.restService.request<any, RealEstateDto>({
      method: 'GET',
      url: `/api/app/real-estate/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: RealEstateRequestDto) =>
    this.restService.request<any, PagedResultDto<RealEstateDto>>({
      method: 'GET',
      url: '/api/app/real-estate',
      params: { filters: input.filters, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: number, input: RealEstateDto) =>
    this.restService.request<any, RealEstateDto>({
      method: 'PUT',
      url: `/api/app/real-estate/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
