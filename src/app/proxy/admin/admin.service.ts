import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiName = 'Default';

  getEnvironment = () =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: '/api/app/admin/environment',
    },
    { apiName: this.apiName });

  runDbMigrations = () =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/admin/run-db-migrations',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
