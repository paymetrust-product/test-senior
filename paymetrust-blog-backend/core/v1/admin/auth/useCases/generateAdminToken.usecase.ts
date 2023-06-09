import { Admin } from '../entities/admin/admin.model';
import { AdminJWTAuthTokenService } from '../services/adminJWTAuthToken.service';
import { AuthTokenAdapter } from '../adapters/authToken.adapter';

export class GenerateAdminTokenUseCase {
  private adminJWTAuthTokenService: AuthTokenAdapter =
    new AdminJWTAuthTokenService();

  async execute(admin: Admin, expiresIn: number) {
    return this.adminJWTAuthTokenService.generateToken(admin, expiresIn);
  }
}
