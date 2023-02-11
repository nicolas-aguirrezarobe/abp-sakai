import type { EntityDto } from '@abp/ng.core';

export interface UserDto extends EntityDto<string> {
  email?: string;
  userName?: string;
  name?: string;
  surname?: string;
}
