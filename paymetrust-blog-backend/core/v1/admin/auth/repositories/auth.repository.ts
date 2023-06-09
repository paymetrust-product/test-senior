import { Admin } from '../entities/admin/admin.model';

export interface AuthRepository {
  signIn: (username: string, password: string) => Promise<Admin>;
  checkAdminExist: (id: number) => Promise<boolean>;
}
