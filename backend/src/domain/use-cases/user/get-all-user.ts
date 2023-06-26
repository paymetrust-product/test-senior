import User from '../../entities/User';
import UserRepository from '../../ports/repositories/user.repository.port';
import GetAllUserUseCase from '../../ports/use-cases/user/get-all.users';

export class GetAllUsers implements GetAllUserUseCase {
  userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    const result = await this.userRepository.getUsers();
    return result;
  }
}
