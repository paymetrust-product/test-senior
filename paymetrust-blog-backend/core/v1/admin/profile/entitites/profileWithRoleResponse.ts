import { RoleResponse } from '../../roles/entities/roleResponse';

export interface ProfileWithRoleResponse {
  username: string;
  role: RoleResponse;
}
