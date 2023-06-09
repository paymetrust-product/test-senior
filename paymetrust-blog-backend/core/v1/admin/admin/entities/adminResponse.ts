import { RoleResponse } from '../../roles/entities/roleResponse';

export interface AdminResponse {
  id: number;
  username: string;
  role: RoleResponse;
  createdAt: Date;
}
