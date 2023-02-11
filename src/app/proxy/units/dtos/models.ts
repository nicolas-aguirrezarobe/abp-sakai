import type { EntityDto } from '@abp/ng.core';
import type { Currency } from '../../enums/currency.enum';
import type { CoordinateDto } from '../../common/models';
import type { CommercialStatus } from '../../enums/commercial-status.enum';
import type { ProjectDto } from '../../projects/dtos/models';
import type { UnitTypeDto } from '../../unit-types/dtos/models';
import type { FilteredResultRequestDto } from '../../inamika/abp/application/dtos/models';

export interface CreateUnitDto extends EntityDto<number> {
  code?: string;
  currency: Currency;
  price: number;
  projectId: number;
  typeId: number;
  coordinates: CoordinateDto[];
  status: CommercialStatus;
}

export interface UnitDto extends EntityDto<number> {
  code?: string;
  currency: Currency;
  price: number;
  project: ProjectDto;
  type: UnitTypeDto;
  coordinates: CoordinateDto[];
  status: CommercialStatus;
}

export interface UnitRequestDto extends FilteredResultRequestDto {
}
