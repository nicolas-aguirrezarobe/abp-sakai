import type { LocalizedStringDbItemDto, LocalizedStringDbItemRequest } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationsService {
  apiName = 'Default';

  create = (input: LocalizedStringDbItemDto) =>
    this.restService.request<any, LocalizedStringDbItemDto>({
      method: 'POST',
      url: '/api/app/localizations',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/localizations/${id}`,
    },
    { apiName: this.apiName });

  get = (id: number) =>
    this.restService.request<any, LocalizedStringDbItemDto>({
      method: 'GET',
      url: `/api/app/localizations/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: LocalizedStringDbItemRequest) =>
    this.restService.request<any, PagedResultDto<LocalizedStringDbItemDto>>({
      method: 'GET',
      url: '/api/app/localizations',
      params: { filters: input.filters, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: number, input: LocalizedStringDbItemDto) =>
    this.restService.request<any, LocalizedStringDbItemDto>({
      method: 'PUT',
      url: `/api/app/localizations/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
