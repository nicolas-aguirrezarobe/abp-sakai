import type { EntityDto } from '@abp/ng.core';
import type { ProjectDto } from '../../projects/dtos/models';
import type { FilteredResultRequestDto } from '../../inamika/abp/application/dtos/models';

export interface RealEstateDto extends EntityDto<number> {
  name?: string;
  projects: ProjectDto[];
}

export interface RealEstateRequestDto extends FilteredResultRequestDto {
}
