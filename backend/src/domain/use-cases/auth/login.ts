import Login from '../../entities/login';
import User from '../../entities/User';
import UserRepository from '../../ports/repositories/user.repository.port';
import ComparePasswordUseCase from '../../ports/use-cases/auth/compare-password';
import JwtConverUseCase from '../../ports/use-cases/auth/jwt-convert';
import LoginUseCase from '../../ports/use-cases/auth/login';

export default class Authenticate implements LoginUseCase {
  userRepository: UserRepository;
  comparePassword: ComparePasswordUseCase;
  jwt: JwtConverUseCase;

  constructor(
    userRepository: UserRepository,
    comparePassword: ComparePasswordUseCase,
    jwt: JwtConverUseCase
  ) {
    this.userRepository = userRepository;
    this.comparePassword = comparePassword;
    this.jwt = jwt;
  }

  async execute(login: Login): Promise<Object> {
    let existUser: User | null = await this.userRepository.findOneByPhone(
      login.phone
    );
    if (!existUser) {
      throw new Error('Phone existe ');
    }
    const isMatch = this.comparePassword.execute(
      login.password,
      existUser.password!
    );
    if (!isMatch) {
      throw new Error('Password is not correct');
    }
    const token = this.jwt.execute(existUser);
    return {
      user: { id: existUser.id },
      token
    };
  }
}
