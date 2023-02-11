import type { ProjectTypeDto, ProjectTypeRequestDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectTypeService {
  apiName = 'Default';

  create = (input: ProjectTypeDto) =>
    this.restService.request<any, ProjectTypeDto>({
      method: 'POST',
      url: '/api/app/project-type',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: number) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/project-type/${id}`,
    },
    { apiName: this.apiName });

  get = (id: number) =>
    this.restService.request<any, ProjectTypeDto>({
      method: 'GET',
      url: `/api/app/project-type/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: ProjectTypeRequestDto) =>
    this.restService.request<any, PagedResultDto<ProjectTypeDto>>({
      method: 'GET',
      url: '/api/app/project-type',
      params: { filters: input.filters, search: input.search, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: number, input: ProjectTypeDto) =>
    this.restService.request<any, ProjectTypeDto>({
      method: 'PUT',
      url: `/api/app/project-type/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
