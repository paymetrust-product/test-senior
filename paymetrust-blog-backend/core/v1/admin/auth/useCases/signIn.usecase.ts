import { ProfileRepository } from 'core/v1/admin/profile/repositories/profile.repository';
import { SignInResponse } from '../entities/admin/signInResponse';
import { AuthRepository } from '../repositories/auth.repository';
import { GenerateAdminTokenUseCase } from './generateAdminToken.usecase';

export class SignInUseCase {
  private generateAdminTokenUseCase = new GenerateAdminTokenUseCase();

  constructor(
    private authRepository: AuthRepository,
    private profileRepository: ProfileRepository,
  ) {}

  async execute(username: string, password: string): Promise<SignInResponse> {
    const expiresIn = 3600 * 24 * 365;
    try {
      const admin = await this.authRepository.signIn(username, password);
      const token = await this.generateAdminTokenUseCase.execute(
        admin,
        expiresIn,
      );

      const profile = await this.profileRepository.getProfileWithRole(admin.id);

      return {
        profile,
        token,
        expiresIn,
      };
    } catch (e: any) {
      throw e;
    }
  }
}
