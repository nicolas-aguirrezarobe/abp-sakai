import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface FilteredResultRequestDto extends PagedAndSortedResultRequestDto {
  filters: string[];
  search?: string;
}
