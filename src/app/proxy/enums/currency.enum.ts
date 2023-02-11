import { mapEnumToOptions } from '@abp/ng.core';

export enum Currency {
  ARS = 1,
  USD = 2,
  EUR = 3,
}

export const currencyOptions = mapEnumToOptions(Currency);
