import ComparePasswordUseCase from '../../../domain/ports/use-cases/auth/compare-password';
import bcrypt from 'bcrypt';

export default class ComparePassword implements ComparePasswordUseCase {
  execute(plainPassword: string, hashPassword: string): boolean {
    return bcrypt.compareSync(plainPassword, hashPassword);
  }
}
