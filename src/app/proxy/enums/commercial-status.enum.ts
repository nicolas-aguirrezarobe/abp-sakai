import { mapEnumToOptions } from '@abp/ng.core';

export enum CommercialStatus {
  Available = 0,
  Reserved = 1,
  Sold = 2,
}

export const commercialStatusOptions = mapEnumToOptions(CommercialStatus);
