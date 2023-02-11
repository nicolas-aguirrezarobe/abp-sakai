import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  apiName = 'Default';

  getAuthenticated = () =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/app/example/authenticated',
    },
    { apiName: this.apiName });

  getAuthorized = () =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/app/example/authorized',
    },
    { apiName: this.apiName });

  getException = () =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/app/example/exception',
    },
    { apiName: this.apiName });

  getNotFound = () =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/app/example/not-found',
    },
    { apiName: this.apiName });

  getUIException = () =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/app/example/u-iException',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
