import { PermissionType } from '../entities/permission.model';

export interface PermissionRepository {
  findAll: () => Promise<PermissionRepositoryResponse[]>;
  findByRoleId: (roleId: number) => Promise<PermissionRepositoryResponse[]>;
  create: (permission: string) => PermissionRepositoryResponse;
  update: (id: number, name: string) => PermissionRepositoryResponse;
  delete: (id: number) => boolean;
}

export interface PermissionRepositoryResponse {
  id: number;
  name: PermissionType;
}
