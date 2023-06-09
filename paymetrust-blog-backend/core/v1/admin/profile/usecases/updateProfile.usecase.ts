import { ProfileRequest } from '../entitites/profileRequest';
import { ProfileRepository } from './../repositories/profile.repository';

export class UpdateProfileUseCase {
  constructor(private profileRepository: ProfileRepository) {}

  execute(id, profileRequest: ProfileRequest) {
    return this.profileRepository.updateProfile(id, profileRequest);
  }
}
