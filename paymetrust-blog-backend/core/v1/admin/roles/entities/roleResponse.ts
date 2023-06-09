import { Permission } from '../../permissions/entities/permission.model';

export interface RoleResponse {
  id: number;
  label: string;
  permissions?: Permission[];
  createdBy: {
    id: number;
    username: string;
  };
  createdAt: Date;
}
