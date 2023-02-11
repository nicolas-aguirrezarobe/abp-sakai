import type { EntityDto } from '@abp/ng.core';

export interface CoordinateDto extends EntityDto<number> {
  lat: number;
  long: number;
}
