import type { AuditLogDto, AuditLogRequestDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditLogService {
  apiName = 'Default';

  create = (input: AuditLogDto) =>
    this.restService.request<any, AuditLogDto>({
      method: 'POST',
      url: '/api/app/audit-log',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/audit-log/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, AuditLogDto>({
      method: 'GET',
      url: `/api/app/audit-log/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: AuditLogRequestDto) =>
    this.restService.request<any, PagedResultDto<AuditLogDto>>({
      method: 'GET',
      url: '/api/app/audit-log',
      params: { filters: input.filters, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: AuditLogDto) =>
    this.restService.request<any, AuditLogDto>({
      method: 'PUT',
      url: `/api/app/audit-log/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
