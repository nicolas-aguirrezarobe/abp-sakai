import type { EntityDto } from '@abp/ng.core';
import type { FilteredResultRequestDto } from '../../inamika/abp/application/dtos/models';

export interface LocalizedStringDbItemDto extends EntityDto<number> {
  key?: string;
  defaultValue?: string;
  resource?: string;
  cultureName?: string;
}

export interface LocalizedStringDbItemRequest extends FilteredResultRequestDto {
}
