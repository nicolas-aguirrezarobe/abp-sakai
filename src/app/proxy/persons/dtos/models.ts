import type { EntityDto } from '@abp/ng.core';
import type { FilteredResultRequestDto } from '../../inamika/abp/application/dtos/models';

export interface CustomerDto extends EntityDto<number> {
  firstName?: string;
  lastName?: string;
  documentNumber?: string;
  email?: string;
  phoneNumber?: string;
}

export interface CustomerRequestDto extends FilteredResultRequestDto {
}
