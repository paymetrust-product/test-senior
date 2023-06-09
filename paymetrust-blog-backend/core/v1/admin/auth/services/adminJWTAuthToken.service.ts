import * as jwt from 'jsonwebtoken';
import { Admin, AdminAuthPayload } from '../entities/admin/admin.model';
import { AuthTokenAdapter } from '../adapters/authToken.adapter';

export class AdminJWTAuthTokenService implements AuthTokenAdapter {
  async generateToken(admin: Admin, expiresIn: number) {
    return jwt.sign(
      {
        id: admin.id,
        username: admin.username,
      },
      process.env.JWT_KEY,
      { expiresIn },
    );
  }
  async verify(token: string) {
    return (await jwt.verify(token, process.env.JWT_KEY)) as AdminAuthPayload;
  }
  async decode(token: string) {
    return (await jwt.decode(token)) as AdminAuthPayload;
  }
}
