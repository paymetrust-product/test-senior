import { AuthTokenAdapter } from '../adapters/authToken.adapter';
import { AuthRepository } from '../repositories/auth.repository';
import { AdminJWTAuthTokenService } from '../services/adminJWTAuthToken.service';

export class ValidateAdminTokenUseCase {
  private authTokenAdapter: AuthTokenAdapter = new AdminJWTAuthTokenService();
  constructor(private authRepository: AuthRepository) {}

  async execute(authorization: string) {
    const token = authorization.split('Bearer ')[1];
    if (!token) {
      return false;
    } else {
      try {
        const admin = await this.authTokenAdapter.verify(token);
        return await this.authRepository.checkAdminExist(admin.id);
      } catch {
        return false;
      }
    }
  }
}
