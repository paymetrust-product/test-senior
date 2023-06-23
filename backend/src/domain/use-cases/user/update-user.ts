import User from '../../entities/User';
import UserRepository from '../../ports/repositories/user.repository.port';
import UpdateUserUseCase from '../../ports/use-cases/user/update-user';

export default class UpdateUser implements UpdateUserUseCase {
  userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(user: User): Promise<User | null> {
    if (!user.id) {
      throw new Error('Id is required ');
    }
    return await this.userRepository.updateUser(user);
  }
}
