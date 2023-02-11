import type { EntityDto } from '@abp/ng.core';
import type { FilteredResultRequestDto } from '../../inamika/abp/application/dtos/models';
import type { EntityChangeType } from '../../volo/abp/auditing/entity-change-type.enum';

export interface AuditLogActionsDto extends EntityDto<string> {
  tenantId?: string;
  auditLogId?: string;
  serviceName?: string;
  methodName?: string;
  parameters?: string;
  executionTime?: string;
  executionDuration: number;
}

export interface AuditLogDto extends EntityDto<string> {
  applicationName?: string;
  userId?: string;
  userName?: string;
  tenantId?: string;
  tenantName?: string;
  impersonatorUserId?: string;
  impersonatorUserName?: string;
  impersonatorTenantId?: string;
  impersonatorTenantName?: string;
  executionTime?: string;
  executionDuration: number;
  clientIpAddress?: string;
  clientName?: string;
  clientId?: string;
  correlationId?: string;
  browserInfo?: string;
  httpMethod?: string;
  url?: string;
  exceptions?: string;
  comments?: string;
  httpStatusCode?: number;
  actions: AuditLogActionsDto[];
  entityChanges: EntityChangeDto[];
}

export interface AuditLogRequestDto extends FilteredResultRequestDto {
}

export interface EntityChangeDto extends EntityDto<string> {
  auditLogId?: string;
  tenantId?: string;
  changeTime?: string;
  changeType: EntityChangeType;
  entityTenantId?: string;
  entityId?: string;
  entityTypeFullName?: string;
  propertyChanges: EntityPropertyChangeDto[];
  extraProperties: Record<string, object>;
}

export interface EntityPropertyChangeDto extends EntityDto<string> {
  tenantId?: string;
  entityChangeId?: string;
  newValue?: string;
  originalValue?: string;
  propertyName?: string;
  propertyTypeFullName?: string;
}
