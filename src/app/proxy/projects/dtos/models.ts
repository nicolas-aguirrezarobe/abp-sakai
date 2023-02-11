import type { EntityDto } from '@abp/ng.core';
import type { ProjectTypeDto } from '../../project-types/dtos/models';
import type { FilteredResultRequestDto } from '../../inamika/abp/application/dtos/models';

export interface CreateProjectDto extends EntityDto<number> {
  name?: string;
  description?: string;
  mapUrl?: string;
  url?: string;
  imageUrl?: string;
  street?: string;
  number?: string;
  complement?: string;
  postalCode?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;
  typeId: number;
}

export interface ProjectDto extends EntityDto<number> {
  name?: string;
  description?: string;
  mapUrl?: string;
  url?: string;
  imageUrl?: string;
  street?: string;
  number?: string;
  complement?: string;
  postalCode?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;
  type: ProjectTypeDto;
}

export interface ProjectRequestDto extends FilteredResultRequestDto {
}
