import { ProfileRepository } from './../repositories/profile.repository';

export class GetProfileUseCase {
  constructor(private profileRepository: ProfileRepository) {}

  execute(id) {
    return this.profileRepository.getProfile(id);
  }
}
