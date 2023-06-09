import { Admin, AdminAuthPayload } from '../entities/admin/admin.model';

export interface AuthTokenAdapter {
  generateToken: (admin: Admin, expiresIn: number) => Promise<string>;
  verify: (token: string) => Promise<AdminAuthPayload>;
  decode: (token: string) => Promise<AdminAuthPayload>;
}
