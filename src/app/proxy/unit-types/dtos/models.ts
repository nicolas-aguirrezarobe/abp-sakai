import type { EntityDto } from '@abp/ng.core';
import type { FilteredResultRequestDto } from '../../inamika/abp/application/dtos/models';

export interface UnitTypeDto extends EntityDto<number> {
  name?: string;
}

export interface UnitTypeRequestDto extends FilteredResultRequestDto {
}
