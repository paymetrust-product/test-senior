import { AdminJWTAuthTokenService } from '../services/adminJWTAuthToken.service';

export class DecodeAdminTokenUseCase {
  private authTokenAdapter = new AdminJWTAuthTokenService();
  async execute(authorization: string) {
    const bearerToken = authorization.split('Bearer ');
    if (bearerToken.length > 1) {
      const token = bearerToken[1];
      if (token) {
        try {
          return await this.authTokenAdapter.decode(token);
        } catch {
          return false;
        }
      }
    }
    return false;
  }
}
