import type { FileS3Dto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IFormFile } from '../microsoft/asp-net-core/http/models';

@Injectable({
  providedIn: 'root',
})
export class FileS3Service {
  apiName = 'Default';

  uploadByFile = (file: IFormFile) =>
    this.restService.request<any, FileS3Dto>({
      method: 'POST',
      url: '/api/app/file-s3/upload',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
