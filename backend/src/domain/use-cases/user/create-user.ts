import User from '../../entities/User';
import UserRepository from '../../ports/repositories/user.repository.port';
import CreateUserUseCase from '../../ports/use-cases/user/create-user';

export default class CreatUser implements CreateUserUseCase {
  userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: User): Promise<User> {
    let existUser: User | null = await this.userRepository.findOneByPhone(
      user.phone
    );
    if (existUser) {
      throw new Error('Phone existe ');
    }
    if (user.email) {
      existUser = await this.userRepository.findOneByEmail(user.email);
      if (existUser) {
        throw new Error('Email existe ');
      }
    }
    const result = await this.userRepository.createUser(user);
    return result;
  }
}
