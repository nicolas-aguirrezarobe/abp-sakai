import type { UserDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FilteredResultRequestDto } from '../inamika/abp/application/dtos/models';

@Injectable({
  providedIn: 'root',
})
export class UserCatalogService {
  apiName = 'Default';

  get = (id: string) =>
    this.restService.request<any, UserDto>({
      method: 'GET',
      url: `/api/app/user-catalog/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: FilteredResultRequestDto) =>
    this.restService.request<any, PagedResultDto<UserDto>>({
      method: 'GET',
      url: '/api/app/user-catalog',
      params: { filters: input.filters, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
