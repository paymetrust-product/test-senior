import { ProfileWithRoleResponse } from 'core/v1/admin/profile/entitites/profileWithRoleResponse';

export interface SignInResponse {
  profile: ProfileWithRoleResponse;
  token: string;
  expiresIn: number;
}
