import { RoleCreateRequest, RoleUpdateRequest } from '../entities/roleRequest';
import { RoleResponse } from '../entities/roleResponse';

export interface RoleRepository {
  findAll: () => Promise<RoleResponse[]>;
  findById: (roleId: number) => Promise<RoleResponse>;
  create: (role: RoleCreateRequest) => Promise<RoleResponse>;
  update: (id: number, role: RoleUpdateRequest) => Promise<RoleResponse>;
  delete: (id: number) => Promise<boolean>;
}
