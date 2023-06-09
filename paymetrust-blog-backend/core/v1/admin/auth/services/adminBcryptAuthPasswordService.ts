import * as bcrypt from 'bcryptjs';
import { AuthPasswordAdapter } from '../adapters/authPassword.adapter';

export class AdminBcryptAuthPasswordService implements AuthPasswordAdapter {
  hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
  compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
