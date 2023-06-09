import { ProfileRequest } from '../entitites/profileRequest';
import { ProfileResponse } from '../entitites/profileResponse';
import { ProfileWithRoleResponse } from '../entitites/profileWithRoleResponse';

export interface ProfileRepository {
  getProfile(id: number): Promise<ProfileResponse>;
  getProfileWithRole(id: number): Promise<ProfileWithRoleResponse>;
  updateProfile(id: number, profile: ProfileRequest): Promise<ProfileResponse>;
}
