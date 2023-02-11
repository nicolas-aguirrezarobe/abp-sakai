import type { EntityDto } from '@abp/ng.core';
import type { FilteredResultRequestDto } from '../../inamika/abp/application/dtos/models';

export interface ProjectTypeDto extends EntityDto<number> {
  name?: string;
}

export interface ProjectTypeRequestDto extends FilteredResultRequestDto {
}
