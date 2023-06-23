import User from '../../../domain/entities/User';
import JwtConverUseCase from '../../../domain/ports/use-cases/auth/jwt-convert';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../../application/middlewares/auth';

export default class JwtSign implements JwtConverUseCase {
  execute(user: User): string {
    const { password, ...userWithoutPassword } = user;
    return jwt.sign({ password, userWithoutPassword }, SECRET_KEY, {
      expiresIn: '2 days'
    });
  }
}
