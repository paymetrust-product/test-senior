import { SetMetadata } from '@nestjs/common';
import { PermissionType } from 'core/v1/admin/permissions/entities/permission.model';

export const AdminPermission = (...args: PermissionType[]) =>
  SetMetadata('permissions', args);
